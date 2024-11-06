import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import apiClient from "../../http-commons"
import {useQuery} from "react-query";

function BoardDetail() {
    const {no} = useParams()
    const {isLoading,isError,error,data}=useQuery(['board_detail',no],
        async ()=>{
            return await apiClient.get(`/board/detail/${no}`)
        }
    )
    useEffect(()=>{
        // boardDetail()
    }, [no])
    if(isLoading)
        return <h1 className={"text-center"}>서버에서 데이터 전송 지연...</h1>
    if(isError)
        return <h1 className={"text-center"}>{error}</h1>

    return (
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
                                            <span style={{"color": "#140C40"}}>수정 &nbsp;</span>
                                            <span style={{"color": "#140C40"}}>삭제 &nbsp;</span>
                                            <Link to={"/board/list"}><span style={{"color": "#140C40"}}>목록</span></Link>
                                        </div>
                                    </div>

                                </div>

                                <div className="comments-area">
                                    <h4>05 Comments</h4>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="assets/img/blog/comment_1.png" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">
                                                        Multiply sea night grass fourth day sea lesser rule open subdue
                                                        female fill which them
                                                        Blessed, give fill lesser bearing multiply sea night grass
                                                        fourth day sea lesser
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5>
                                                                <a href="#">Emilly Blunt</a>
                                                            </h5>
                                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <a href="#" className="btn-reply text-uppercase">reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="assets/img/blog/comment_2.png" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">
                                                        Multiply sea night grass fourth day sea lesser rule open subdue
                                                        female fill which them
                                                        Blessed, give fill lesser bearing multiply sea night grass
                                                        fourth day sea lesser
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5>
                                                                <a href="#">Emilly Blunt</a>
                                                            </h5>
                                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <a href="#" className="btn-reply text-uppercase">reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="assets/img/blog/comment_3.png" alt=""/>
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">
                                                        Multiply sea night grass fourth day sea lesser rule open subdue
                                                        female fill which them
                                                        Blessed, give fill lesser bearing multiply sea night grass
                                                        fourth day sea lesser
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5>
                                                                <a href="#">Emilly Blunt</a>
                                                            </h5>
                                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <a href="#" className="btn-reply text-uppercase">reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h4>Leave a Reply</h4>
                                    <form className="form-contact comment_form" action="#" id="commentForm">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea className="form-control w-100" name="comment" id="comment"
                                                              cols="30" rows="9" placeholder="Write Comment"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="name" id="name" type="text"
                                                           placeholder="Name"/>
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
                                                    <input className="form-control" name="website" id="website"
                                                           type="text" placeholder="Website"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit"
                                                    className="button button-contactForm btn_1 boxed-btn">Post Comment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-1 posts-list">
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default BoardDetail;