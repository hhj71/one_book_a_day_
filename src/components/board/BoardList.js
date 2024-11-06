import {useQuery} from "react-query";
import {useEffect, useState,Fragment} from 'react'
import {Link} from "react-router-dom";
import apiClient from "../../http-commons"

function BoardList() {
    const [curpage, setCurpage] = useState(1);
    const {isLoading,isError,error,data}=useQuery(['board_list',curpage],
        async ()=>{
            return await apiClient.get(`/board/list/${curpage}`)
        }
    )
    if(isLoading) {
        return <div className={"preloader"}> <div className={"preloader-circle"}></div></div>
    }
    if(isError)
        return <h1 className={"text-center"}>{error.message}</h1>

    const pageChange=(page)=>{
        setCurpage(page)
        console.log(curpage)
    }
    const prev=()=>{
        if (data.data.startPage > 1) {
            setCurpage(data.data.startPage - 1);
        }
    }
    const next=()=>{
        if (data.data.endPage < data.data.totalpage) {
            setCurpage(data.data.endPage + 1);
        }
    }
    let pageArr=[]
    for (let i = data.data.startPage; i <= data.data.endPage; i++) {
        if (curpage === i) {
            pageArr.push(
                <li className="page-item active">
                    <button className="page-link" onClick={() => pageChange(i)}>{i}</button>
                </li>
            )
        } else {
            pageArr.push(
                <li className="page-item">
                    <button className="page-link" onClick={() => pageChange(i)}>{i}</button>
                </li>
            )
        }

    }
    return (
        <Fragment>
            <main>
                <div className="page-notification page-notification2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><h2>하루&nbsp;한&nbsp;권&nbsp;독서&nbsp;기록장</h2></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="blog_area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-5 mb-lg-0">
                                <div className="row blog_left_sidebar">
                                    {data.data.list.map((rb) => (
                                        <article className="col-lg-6 blog_item">
                                            <div className="blog_item_img" style={{"textAlign":"center", "display":"flex", "marginLeft":"70px"}} >
                                                <img className="card-img" src={rb.bcover} style={{"height":"300px", "borderRadius":"5px"}} />
                                            </div>
                                                <div className="blog_item_date">
                                                    <p>{rb.regdate}</p>
                                                </div>
                                            <div className="blog_details">
                                                <Link to={'/board/detail/' + rb.no}>
                                                    <h2 className="blog-head" style={{"color": "#2d2d2d"}}>
                                                        {rb.subject}</h2>
                                                </Link>
                                                <ul className="blog-info-link">
                                                    <li><a href="#"><i className="fa fa-user"></i> {rb.name} </a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-eye"></i>{rb.hit}</a></li>
                                                </ul>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                                <div className="row justify-content-center">
                                    <nav className="blog-pagination justify-content-center d-flex">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <button className="page-link" onClick={prev} aria-label="Previous">
                                                    <i className="ti-angle-left"></i>
                                                </button>
                                            </li>
                                            {pageArr}
                                            <li className="page-item">
                                                <button className="page-link" onClick={next} aria-label="Next">
                                                    <i className="ti-angle-right"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <div className="button-group-area mt-40">
                                        <Link to={"/"} className="genric-btn default circle arrow" style={{"fontSize": "20px", "marginBottom": "20px"}}>
                                            <i class="fa fa-sticky-note"></i>&nbsp;기록하기</Link>
                                    </div>
                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title" style={{"color": "#2d2d2d"}}>조회수&nbsp;Top10</h3>
                                        {data.data.tList.map((top) => (
                                            <div className="media post_item">
                                                <img src={top.bcover} style={{
                                                    "width": "40px",
                                                    "height": "60px",
                                                    "borderRadius": "5px"
                                                }}/>
                                                <div className="media-body">
                                                    <Link to={'/board/detail/' + top.no}>
                                                        <h3 style={{
                                                            "color": "#2d2d2d",
                                                            "width": "250px"
                                                        }}>{top.subject}</h3>
                                                    </Link>
                                                    <p>{top.regdate}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </aside>
                                    <aside className="single_sidebar_widget tag_cloud_widget">
                                        <h4 className="widget_title" style={{"color": "#2d2d2d"}}>Tag Clouds</h4>
                                        <ul className="list">
                                            <li>
                                                <a href="#">project</a>
                                            </li>
                                            <li>
                                                <a href="#">love</a>
                                            </li>
                                            <li>
                                                <a href="#">technology</a>
                                            </li>
                                            <li>
                                                <a href="#">travel</a>
                                            </li>
                                            <li>
                                                <a href="#">restaurant</a>
                                            </li>
                                            <li>
                                                <a href="#">life style</a>
                                            </li>
                                            <li>
                                                <a href="#">design</a>
                                            </li>
                                            <li>
                                                <a href="#">illustration</a>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default BoardList;