import {Fragment, useRef, useState, useEffect} from "react"
import {Link, useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import apiClient from "../../http-commons";
function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const userId = window.sessionStorage.getItem("id")
        const userName = window.sessionStorage.getItem("name");
        if (userId) {
            setIsLoggedIn(true)
            setUserName(userName)
        }
    }, [])
    const handleLogout = () => {
        window.sessionStorage.removeItem("id")
        window.sessionStorage.removeItem("name")
        setIsLoggedIn(false)
        navigate("/")
    };
    return (
        <Fragment>
            <header>
                <div className="header-area ">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="header-left d-flex align-items-center">
                                    <div className="logo">
                                        <Link to={"/"}><img src="../../img/logo/logo1.png" alt=""/></Link>
                                    </div>
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to={"/"}>홈</Link></li>
                                                <li><Link to={"/book/list"}>도서 목록</Link></li>
                                                <li><Link to={"/board/list"}>독서 기록장</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right1 d-flex align-items-center">
                                    <div className="header-social d-none d-md-block">
                                        {isLoggedIn ? (
                                            <div className="button-group-area mt-40">
                                                <span>{userName}님, 환영합니다! &nbsp;</span>
                                                <button onClick={handleLogout}
                                                        className="genric-btn default arrow"
                                                        style={{"fontSize": "16px", "marginBottom": "20px", "borderRadius":"5px", "fontWeight":"bold"}}>
                                                    로그아웃 <i className="fa fa-sign-out"></i>
                                                </button>
                                            </div>
                                        ) : (
                                            <Link to={"/member/login"}>로그인 <i className="fa fa-sign-in"></i></Link>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header