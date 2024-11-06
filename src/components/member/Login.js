import { Fragment, useState, useRef } from "react";
import { useMutation } from "react-query";
import apiClient from "../../http-commons";

function Login(){
    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')
    const [login, setLogin] = useState(false)
    const idRef=useRef(null)
    const pwdRef = useRef(null)
    const { mutate: loginOk, isLoading, isError, error } = useMutation(
       async () => {
        const response = await apiClient.get(`/member/login/${id}/${pwd}`)
        return response.data;
        },
        {
            onSuccess:(res)=>{
                console.log(res)
                if(res.msg==='NOID')
                {
                    alert("아이디가 존재하지 않습니다")
                    setId('')
                    setPwd('')
                    idRef.current.focus()
                }
                else if(res.msg==="NOPWD")
                {
                    alert("비밀번호가 틀립니다")
                    setPwd('')
                    pwdRef.current.focus()
                }
                else if(res.msg==="OK")
                {
                    window.sessionStorage.setItem('id',res.id)
                    window.sessionStorage.setItem('name',res.name)
                    setLogin(true)
                    window.location.href = "/"
                }
            }
        },
        {
            onError:(err)=>{
                console.log(err.response)
            }
        }
    )
    const memberLogin=()=>{
        if(id.trim()==="")
        {
            idRef.current.focus()
            return
        }
        else if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }

        loginOk()
    }

    return(
        <Fragment>
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <h3 className="mb-30">로그인</h3>
                    <form action="#">
                        <div className="mt-10">
                            <input type="text"
                                   name="ID"
                                   placeholder="아이디를 입력하세요"
                                   value={id}
                                   onChange={(e) => setId(e.target.value)}
                                   onFocus={() => (idRef.current.placeholder = '')}
                                   onBlur={() => (idRef.current.placeholder = '아이디를 입력하세요')}
                                   ref={idRef}
                                   required
                                   className="single-input"/>
                        </div>
                        <div className="mt-10">
                            <input
                                type="password"
                                name="PWD"
                                placeholder="비밀번호를 입력하세요"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)} // onChange로 값 바인딩
                                onFocus={() => (pwdRef.current.placeholder = '')}
                                onBlur={() => (pwdRef.current.placeholder = '비밀번호를 입력하세요')}
                                ref={pwdRef}
                                required
                                className="single-input"
                            />
                        </div>
                        <div className="mt-10">
                            <button
                                type="button"
                                onClick={memberLogin} // 로그인 버튼 클릭 시 로그인 요청
                                className="button button-contactForm btn_1 boxed-btn"
                            >
                                로그인
                            </button>
                        </div>
                    </form>
                    {isLoading && <p>로그인 중...</p>}
                    {isError && <p>{error.message}</p>}
                    {login && <p>로그인 성공! {window.sessionStorage.getItem('name')}님, 환영합니다.</p>}
                </div>
            </div>
        </Fragment>
    )
}

export default Login;