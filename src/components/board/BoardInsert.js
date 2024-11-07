import {Fragment,useState,useEffect,useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import apiClient from "../../http-commons"

function BoardInsert() {
    const nav = useNavigate();
    const nameRef = useRef(null);
    const subjectRef = useRef(null);
    const contentRef = useRef(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [bList, setBList] = useState([]);
    const userId = window.sessionStorage.getItem("id")
    const userName = window.sessionStorage.getItem("name");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("");
    const [selectedBook, setSelectedBook] = useState({
        bno: null,
        btitle: "",
        bcover: "",
        bwriter: ""
    })

    // const [result, setResult] = useState("");
    // // 서버로부터 데이터 전송
    const handleTagChange = (event) => {
        setTag(event.target.value)
    }
    const fetchBooks = async (query) => {
        try {
            const response = await apiClient.get(`/board/booksearch`, {
                params: { btitle: searchQuery }
            });
            setBList(response.data);
        } catch (error) {
            console.error("책 검색 실패:", error);
        }
    }
    const {mutate:insert}=useMutation(
        async ()=>{
            return await apiClient.post(`/board/insert`,{
                name:userName,
                subject:subject,
                content:content,
                id:userId,
                bno:selectedBook.bno,
                tag:tag,
                btitle:selectedBook.btitle,
                bcover:selectedBook.cover,
                bwriter:selectedBook.writer

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
    const boardInsert=(e)=>{
        e.preventDefault();
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
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10" style={{"paddingLeft":"20px", "paddingRight":"20px"}}>
                    <div className="comment-form">
                        <h2>오늘의 기록</h2>
                        <form className="form-contact comment_form" action="#" id="commentForm">
                            <div className="form-group" >
                                        <input className="form-control" name="subject" id="subject" type="text"
                                               placeholder="제목을 입력해주세요"
                                               value={subject}
                                               onChange={(e) => setSubject(e.target.value)}
                                        />
                            </div>
                            <div className="form-group" style={{"display":"flex"}}>

                                    <div className="col-7" style={{"paddingLeft":"0px"}}>
                                    <input className="form-control" name="book" id="book" type="book"
                                           placeholder="책 제목을 입력하세요" value={searchQuery}
                                           onChange={(e) => setSearchQuery(e.target.value)}/>
                                    </div>
                                    <div className="col-1">
                                    <button className="button boxed-btn" onClick={fetchBooks} style={{"height":"48px", "padding":"10px"}}>검색</button>
                                    </div>
                                    <div className="col-4"></div>
                            </div>
                                <div className="form-group">
                                    <div className="col-7">
                                        <div>
                                        <select className="nice-select" style={{"marginBottom":"20px", "minWidth":"300px", "marginLeft":"-15px"}}>
                                            {bList.map(book => (
                                                <option key={book.bno} value={book.bno}>
                                                    {book.btitle}
                                                </option>
                                            ))}
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-5"></div>
                                </div>
                            <div className=" form-group">
                                            <textarea className=" form-control w-100" name=" content" id="content" cols="30" rows="9"
                                placeholder="기록을 작성해 주세요" style={{"resize": "none", "overflowY": "scroll"}} onChange={(e) => setContent(e.target.value)}>
                            </textarea>
                            </div>

                            <div className="form-group">
                                <div className="form-control" name="tagselect" id="tagselect" style={{"height":"60px"}}>
                                    <span>어떤 기분일 때 이 책을 읽으면 좋을까요?</span>
                                    <div className="boardradio">
                                        <label><input type="radio" name="tag" value="기쁨" checked={tag === "기쁨"} onChange={handleTagChange} />😊</label>
                                        <label><input type="radio" name="tag" value="보통" checked={tag === "보통"} onChange={handleTagChange} />😐</label>
                                        <label><input type="radio" name="tag" value="슬픔" checked={tag === "슬픔"} onChange={handleTagChange} />😭</label>
                                        <label><input type="radio" name="tag" value="화남" checked={tag === "화남"} onChange={handleTagChange} />😡</label>
                                    </div>
                                </div>
                            </div>

                                <div className="form-group">
                                <button type="button" className="button boxed-btn" onClick={boardInsert}>기록 작성
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </Fragment>
)
}

export default BoardInsert