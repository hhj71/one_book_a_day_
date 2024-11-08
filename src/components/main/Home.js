import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Home(){
    const [mainData, setMainData] = useState([]);
    const [oneData, setOneData] = useState([]);
    const [rList, setRList] = useState([]);
    const [nList, setNList] = useState([]);
    const isLoggedIn = window.sessionStorage.getItem("id");
    useEffect(()=> {
        axios.get('http://localhost/book/main_list')
            .then(res => {
                let arr = []
                arr.push(res.data.hList[0])
                arr.push(res.data.hList[1])
                arr.push(res.data.hList[2])
                arr.push(res.data.hList[3])
                setOneData(arr)
                setRList(res.data.rList)
                setNList(res.data.nList)

            }).catch(err => console.log(err))
    },[mainData])
    console.log(nList)
    let hanlist=oneData.map((HanKang) =>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-popular-items mb-50 text-center wow fadeInUp" data-wow-duration="1s"
                 data-wow-delay=".1s">
                <div className="popular-img">
                    <Link to={'/book/detail/'+HanKang.bno}>
                    <img src={HanKang.cover} alt=""/>
                    </Link>
                    <div className="img-cap">
                        <span>{HanKang.btitle}</span>y
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <main>
            <div className="container-fluid" style={{"maxWidth":"1600px"}}>
                <div className="slider-area">
                    <div className="header-right2 d-flex align-items-center">
                        <div className="header-social  d-block d-md-none">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>

                        <div className="search d-block d-md-none">
                            <ul className="d-flex align-items-center">
                                <li className="mr-15">
                                    <div className="nav-search search-switch">
                                            <i className="ti-search"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="slider-active dot-style">
                            <div className="single-slider slider-bg1 slider-height d-flex align-items-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12 col-lg-9">
                                            <div className="hero__caption">
                                                <h1 style={{"textAlign":"right", "paddingLeft":"600px"}}> What did you read today?</h1>
                                            </div>
                                            {isLoggedIn && (
                                                <div>
                                                <Link to={"/board/insert"} className="btn" style={{"float":"inline-end", "fontFamily":"Noto Sans KR, serif"}}>기록하기</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bannerimg" style={{"width": "1570px","marginLeft":"167px", "backgroundColor":"#f4cf9a", "paddingLeft":"20px"}}>
                    <img src={"https://contents.kyobobook.co.kr/etc/smartedit/8c1ed84f2f9245febcfeb67c0443b05e.jpg"} style={{"width": "1500px", "height": "350px", "paddingLeft":"250px", "display":"inline"}} alt=""/>
                </div>
            <div className="mainFirst" style={{"width": "1570px","backgroundColor":"#f4cf9a", "marginLeft":"167px"}}>
                <div className={"hanlist title"} style={{textAlign:"center"}}>
                    <h2 style={{"marginTop":"0px"}}>한강작가는 이런 작품을 썼어요</h2>
                </div>
                <div className="popular-items pt-50">
                    <div className="container-fluid">
                        <div className="row">
                            {hanlist}
                        </div>
                    </div>
                </div>
            </div>
                <div className="new-arrival">

                    <div className="row">
                        <div className="col-xl-1"></div>
                        <div className="col-xl-7">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-8 col-md-10">
                                    <div className="section-tittle mb-60 text-center wow fadeInUp"
                                         data-wow-duration="2s" data-wow-delay=".2s">
                                        <h2 style={{"fontFamily": "Noto Sans KR, serif"}}>오늘의 추천 책</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    rList && rList.map((vo) =>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                            <div className="single-new-arrival mb-50 text-center wow fadeInUp"
                                                 data-wow-duration="1s" data-wow-delay=".1s">
                                                <div className="popular-img">
                                                    <img src={vo.cover} alt=""/>
                                                </div>
                                                <div className="popular-caption">
                                                    <h3><Link to={'/book/detail/' + vo.bno}>{vo.btitle}</Link></h3>
                                                    <span>{vo.price.toLocaleString()}원</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="row justify-content-center">
                                <div className="section-tittle mb-60 text-center wow fadeInUp"
                                     data-wow-duration="2s" data-wow-delay=".2s">
                                    <h2 style={{"fontFamily": "Noto Sans KR, serif"}}>최신 도서 뉴스</h2>
                                </div>
                                <div className="row">
                                    {nList && nList.map((news) =>
                                        <div className="media post_item">
                                            <div className="media-body2">
                                                <Link target={"_blank"} to={news.link}>
                                                    <h3 dangerouslySetInnerHTML={{__html: news.title}}></h3>
                                                </Link>
                                                <h4 dangerouslySetInnerHTML={{__html: news.desc}}></h4>
                                            </div>
                                        </div>
                                    )
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1"></div>

                    </div>
                </div>
        </main>
    )

}

export default Home