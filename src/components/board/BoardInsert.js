import {Fragment,useState,useEffect,useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import apiClient from "../../http-commons"

function BoardInsert() {
    const nav = useNavigate();
    const nameRef = useRef(null);
    const subjectRef = useRef(null);
    const contentRef = useRef(null);

    const [bList, setBList] = useState([]);
    const userId = window.sessionStorage.getItem("id")
    const userName = window.sessionStorage.getItem("name");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [bno, setBno] = useState(0);
    const [tag, setTag] = useState("");
    const [btitle, setBtitle] = useState("");
    const [selectedBook, setSelectedBook] = useState({
        bno: null,
        btitle: "",
        bcover: "",
        bwriter: ""
    })

    const [result, setResult] = useState("");
    // 서버로부터 데이터 전송
    const {isLoading,mutate:insert}=useMutation(
        async ()=>{
            return await apiClient.post(`/board/insert`,{
                name:userName,
                subject:subject,
                content:content,
                id:userId,
                bno:bno,
                tag:tag,
                btitle:btitle,
                bcover:bcover,
                bwriter:bwriter

            })
        },
        {
            onSuccess:(res)=>{
                if(res.data.msg==="yes")
                {
                    window.location.href="/board/list";
                }
            }
        },
        {
            onError:(err)=>{
                console.log(err)
            }
        }
    )
    const boardInsert=()=>{
        if(userName.trim()==="")
        {
            nameRef.current.focus()
            return
        }
        else if(subject.trim()==="")
        {
            subjectRef.current.focus()
            return
        }
        else if(content.trim()==="")
        {
            contentRef.current.focus()
            return
        }
        insert()
    }
    return (
        <Fragment>
            <div className="page-notification page-notification2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><h2>하루&nbsp;한&nbsp;권&nbsp;독서&nbsp;기록&nbsp;작성</h2></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-form">
                <h4>오늘의 기록</h4>
                <form className="form-contact comment_form" action="#" id="commentForm">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="form-group">
                                <input className="form-control" name="subject" id="subject" type="text" placeholder="제목을 입력해주세요"/>
                            </div>
                        </div>

                        <div className="col-10">
                            <div className="form-group">
                                <textarea className="form-control w-100" name="content" id="content" cols="30" rows="9"
                                          placeholder="기록을 작성해 주세요" style={{"resize": "none"}}></textarea>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <input className="form-control" name="email" id="email" type="email"
                                       placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input className="form-control" name="website" id="website" type="text"
                                       placeholder="Website"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="button button-contactForm btn_1 boxed-btn">Post Comment
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default BoardInsert