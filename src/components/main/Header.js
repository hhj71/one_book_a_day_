import { Fragment } from "react"
import {Link} from "react-router-dom";
function Header(){
    return (
        <Fragment>
            <header>
                <div className="header-area ">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                <div className="header-left d-flex align-items-center">
                                    <div className="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                                    </div>
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to={"/"}>홈</Link></li>
                                                <li><Link to={"/book/list"}>도서 목록</Link></li>
                                                <li><Link to={"/board/list"}>독서 기록</Link>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">목록</a></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Elements</a></li>
                                                        <li><a href="product_details.html">Product Details</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right1 d-flex align-items-center">
                                    <div className="header-social d-none d-md-block">
                                        <a href="#"><i className="ti-search"></i></a>
                                        <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                    <div className="search d-none d-md-block">
                                        <ul className="d-flex align-items-center">
                                            <li className="mr-15">
                                                <div className="nav-search search-switch">

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
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