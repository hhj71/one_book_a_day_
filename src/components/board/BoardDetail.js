import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import apiClient from "../../http-commons"
import {useQuery} from "react-query";

function BoardDetail() {
    const {no} = useParams()
    const userId = window.sessionStorage.getItem("id")
    const userName = window.sessionStorage.getItem("name")
    const {isLoading,isError,error,data}=useQuery(['board_detail',no],
        async ()=>{
            return await apiClient.get(`/board/detail/${no}`)
        }
    )
    const isUserAuthor = userId && data && userId === data.data.id;

    if(isLoading)
        return <h1 className={"text-center"}>서버에서 데이터 전송 지연...</h1>
    if(isError)
        return <h1 className={"text-center"}>{error}</h1>

    return(
        <Fragment>
        <main>
            <div className="page-notification page-notification2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><h2>하루&nbsp;한&nbsp;권&nbsp;독서&nbsp;기록</h2></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog_area single-post-area section-padding">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-1 posts-list">
                        </div>
                        <div className="col-lg-10 posts-list">
                            <div className="single-post">
                                <div className="blog_details">
                                    <h2 style={{"color": "#2d2d2d"}}>
                                        {data.data.subject}
                                    </h2>
                                    <ul className="blog-info-link mt-3 mb-4">
                                        <li><i className="fa fa-user">&nbsp;{data.data.name}</i></li>
                                        <li><i className="fa fa-eye">&nbsp;{data.data.hit}</i></li>
                                    </ul>
                                    <div className="blog-author">
                                        <div className="media align-items-center">
                                            <img src={data.data.bcover} alt=""/>
                                            <div className="media-body">
                                                <Link to={'/book/detail/' + data.data.bno}>
                                                    <h4>{data.data.btitle}</h4>
                                                </Link>
                                                <p>{data.data.bwriter}&nbsp;저</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="excert">
                                        {data.data.content}
                                    </p>
                                    <div className={"boardtag"}>
                                   <p> #{data.data.tag}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation-top">
                                <div className="d-sm-flex justify-content-between text-center">
                                    <p className="like-info"><span className="align-middle"><i
                                        className="fa fa-heart"></i></span> </p>
                                    <div className="col-sm-4 text-center my-2 my-sm-0">
                                        {isUserAuthor && (
                                            <>
                                            <Link to={`/board/update/${no}`}><span style={{"color": "#140C40"}}>수정 &nbsp;</span></Link>
                                            <Link to={`/board/delete/${no}`}><span style={{"color": "#140C40"}}>삭제 &nbsp;</span></Link>
                                            </>
                                    )}
                                    <Link to={"/board/list"}><span style={{"color": "#140C40"}}>목록</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Fragment>
    )
}

export default BoardDetail;