import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import BoardList from "./BoardList";

function BoardDetail() {
    return (
        <Fragment>
            <main>
                <div className="page-notification page-notification2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#"> Details</a></li>
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
                                        <h2 style="color: #2d2d2d;">Second divided from form fish beast made every of
                                            seas
                                            all gathered us saying he our
                                        </h2>
                                        <ul className="blog-info-link mt-3 mb-4">
                                            <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                                            <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                        </ul>
                                        <div className="blog-author">
                                            <div className="media align-items-center">
                                                <img src="assets/img/blog/author.png" alt=""/>
                                                <div className="media-body">
                                                    <a href="#">
                                                        <h4>Harvard milan</h4>
                                                    </a>
                                                    <p>Second divided from form fish beast made. Every of seas all
                                                        gathered use saying you're, he
                                                        our dominion twon Second divided from</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="excert">
                                            MCSE boot camps have its supporters and its detractors. Some people do not
                                            understand why you
                                            should have to spend money on boot camp when you can get the MCSE study
                                            materials yourself at a
                                            fraction of the camp price. However, who has the willpower
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not
                                            understand why you
                                            should have to spend money on boot camp when you can get the MCSE study
                                            materials yourself at a
                                            fraction of the camp price. However, who has the willpower to actually sit
                                            through a
                                            self-imposed MCSE training. who has the willpower to actually
                                        </p>
                                        <div className="quote-wrapper">
                                            <div className="quotes">
                                                MCSE boot camps have its supporters and its detractors. Some people do
                                                not understand why you
                                                should have to spend money on boot camp when you can get the MCSE study
                                                materials yourself at
                                                a fraction of the camp price. However, who has the willpower to actually
                                                sit through a
                                                self-imposed MCSE training.
                                            </div>
                                        </div>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not
                                            understand why you
                                            should have to spend money on boot camp when you can get the MCSE study
                                            materials yourself at a
                                            fraction of the camp price. However, who has the willpower
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some people do not
                                            understand why you
                                            should have to spend money on boot camp when you can get the MCSE study
                                            materials yourself at a
                                            fraction of the camp price. However, who has the willpower to actually sit
                                            through a
                                            self-imposed MCSE training. who has the willpower to actually
                                        </p>
                                    </div>
                                </div>
                                <div className="navigation-top">
                                    <div className="d-sm-flex justify-content-between text-center">
                                        <p className="like-info"><span className="align-middle"><i
                                            className="fa fa-heart"></i></span> Lily and 4
                                            people like this</p>
                                        <div className="col-sm-4 text-center my-2 my-sm-0">
                                        </div>
                                        <ul className="social-icons">
                                            <li><a href="https://www.facebook.com/sai4ull"><i
                                                className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        </ul>
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