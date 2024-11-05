import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function BoardList() {
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
                                        <li className="breadcrumb-item"><a href="#">Blog</a></li>
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
                                    <article className="col-lg-6 blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="assets/img/blog/single_blog_1.png"
                                                 alt=""/>
                                            <a href="#" className="blog_item_date">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </a>
                                        </div>
                                        <div className="blog_details">
                                            <a className="d-inline-block" href="blog_details.html">
                                                <h2 className="blog-head" style={{"color": "#2d2d2d;"}}>Google inks pact for
                                                    new 35-storey office</h2>
                                            </a>
                                            <p>That dominion stars lights dominion divide years for fourth have don't
                                                stars is that
                                                he earth it first without heaven in place seed it second morning
                                                saying.</p>
                                            <ul className="blog-info-link">
                                                <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="col-lg-6 blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="assets/img/blog/single_blog_2.png"
                                                 alt=""/>
                                            <a href="#" className="blog_item_date">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </a>
                                        </div>
                                        <div className="blog_details">
                                            <a className="d-inline-block" href="blog_details.html">
                                                <h2 className="blog-head" style={{"color": "#2d2d2d;"}}>Google inks pact for
                                                    new 35-storey office</h2>
                                            </a>
                                            <p>That dominion stars lights dominion divide years for fourth have don't
                                                stars is that
                                                he earth it first without heaven in place seed it second morning
                                                saying.</p>
                                            <ul className="blog-info-link">
                                                <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Previous">
                                                <i className="ti-angle-left"></i>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="#" className="page-link">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Next">
                                                <i className="ti-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title" style={{"color": "#2d2d2d;"}}>Recent Post</h3>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_1.png" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3 style={{"color": "#2d2d2d;"}}>From life was you fish...</h3>
                                                </a>
                                                <p>January 12, 2019</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_2.png" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3 style={{"color": "#2d2d2d;"}}>The Amazing Hubble</h3>
                                                </a>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_3.png" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3 style={{"color": "#2d2d2d;"}}>Astronomy Or Astrology</h3>
                                                </a>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="assets/img/post/post_4.png" alt="post"/>
                                            <div className="media-body">
                                                <a href="blog_details.html">
                                                    <h3 style={{"color": "#2d2d2d;"}}>Asteroids telescope</h3>
                                                </a>
                                                <p>01 Hours ago</p>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside className="single_sidebar_widget tag_cloud_widget">
                                        <h4 className="widget_title" style={{"color": "#2d2d2d;"}}>Tag Clouds</h4>
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