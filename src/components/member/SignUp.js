import {Fragment, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import apiClient from "../../http-commons";

function SignUp() {
        const nav = useNavigate()
        const idRef = useRef(null)
        const nameRef = useRef(null)
        const pwdRef = useRef(null)

        const [id, setId] = useState("")
        const [name, setName] = useState("")
        const [pwd, setPwd] = useState("")
        const [pwdcheck, setPwdcheck] = useState("")
        const [errorMessage, setErrorMessage] = useState("")


        const {mutate:signup}=useMutation(
            async ()=> {
                    return await apiClient.post(`/member/signup`,{
                            id:id,
                            name:name,
                            pwd:pwd,
                    })
            },
            {
                    onSuccess:(res)=>{
                            if(res.data.msg==="yes")
                            {
                                    alert("회원가입이 완료되었습니다.")
                                    window.location.href="/";
                            }
                    }
            },
            {
                    onError:(err)=>{
                            console.log(err)
                    }
            }
        )
        const handleSignUp = () => {
                if (pwd !== pwdcheck) {
                        setErrorMessage("비밀번호가 일치하지 않습니다.")
                        return
                }
                setErrorMessage("")
                signup();
                }
    return(
        <Fragment>
                <div className="page-notification page-notification2">
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-12">
                                                <nav aria-label="breadcrumb">
                                                        <ol className="breadcrumb justify-content-center">
                                                                <li className="breadcrumb-item">
                                                                        <h2>회원&nbsp;가입</h2>
                                                                </li>
                                                        </ol>
                                                </nav>
                                        </div>
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col-lg-4"></div>
                        <div class="col-lg-4 col-md-4">
                                <form action="#">
                                        <div class="mt-10">
                                                <input type="text" name="id" placeholder="아이디 입력"
                                                       onfocus="this.placeholder = ''"
                                                       onblur="this.placeholder = '아이디 입력'" required=""
                                                       value={id}
                                                       onChange={(e) => setId(e.target.value)}
                                                       class="single-input"/>
                                        </div>
                                        <div class="mt-10">
                                                <input type="text" name="name" placeholder="이름 입력"
                                                       onfocus="this.placeholder = ''"
                                                       onblur="this.placeholder = '이름 입력'" required=""
                                                       value={name}
                                                       onChange={(e) => setName(e.target.value)}
                                                       class="single-input"/>
                                        </div>
                                        <div class="mt-10">
                                                <input type="password" name="pwd" placeholder="비밀번호 입력"
                                                       onfocus="this.placeholder = ''"
                                                       onblur="this.placeholder = '비밀번호 입력'"
                                                       value={pwd}
                                                       onChange={(e) => setPwd(e.target.value)}
                                                       required="" class="single-input"/>
                                        </div>
                                        <div class="mt-10">
                                                <input type="password" name="pwdCheck" placeholder="비밀번호 확인"
                                                       onfocus="this.placeholder = ''"
                                                       onblur="this.placeholder = '비밀번호 확인'"
                                                       value={pwdcheck}
                                                       onChange={(e) => setPwdcheck(e.target.value)}
                                                       required="" class="single-input"/>
                                        </div>
                                        {errorMessage && (
                                            <div style={{ color: "red", marginTop: "10px" }}>
                                                    {errorMessage}
                                            </div>
                                        )}
                                        <div className="form-group">
                                                <button type="button" className="button boxed-btn"
                                                        style={{
                                                                "textAlign": "center",
                                                                "marginLeft": "180px",
                                                                "display": "inline",
                                                                "marginTop":"20px",
                                                                "marginBottom":"20px"
                                                        }}
                                                        onClick={handleSignUp}
                                                >
                                                        가입
                                                </button>
                                                <button type="button" className="button boxed-btn"
                                                        style={{
                                                                "textAlign": "center",
                                                                "marginLeft": "20px",
                                                                "display": "inline",
                                                                "marginTop":"20px",
                                                                "marginBottom":"20px"
                                                        }}
                                                        onClick={() => nav(-1)}>취소
                                                </button>
                                        </div>
                                </form>
                        </div>
                        <div className="col-lg-4"></div>
                </div>
        </Fragment>
    )
}

export default SignUp;