import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import apiClient from "../../http-commons"

function BookList() {
    const [curpage, setCurpage] = useState(1)

    const [selectedGenre, setSelectedGenre] = useState(null)
    const [searchTitle, setSearchTitle] = useState("")
    const [searchTriggered, setSearchTriggered] = useState(false)
    const [inputDisabled, setInputDisabled] = useState(false)
    const {isLoading,isError,error,data}=useQuery(["book_all_list", curpage, selectedGenre, searchTriggered],
        // 서버 연결
        async ()=>{
            const page = curpage
            const params = new URLSearchParams()
            params.append("start", (curpage - 1) * 12)
            if (selectedGenre) {
                params.append("bgenre", selectedGenre)
            }
            if (searchTitle) {
                params.append("btitle", searchTitle)
            }
            return await apiClient.get(`/book/AllList/${page}?${params.toString()}`)
        },
        {
            enabled: true,
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            staleTime: 5000
        }
    )
    console.log(data)
    if(isLoading)
        return <h1 className={"preloader"}>하루 한 권</h1>
    if(isError)
        return <h1 className={"text-center"}>{error.message}</h1>

    /*if (!data || !data.data.aList || data.data.aList.length === 0) {
        return <h1 className={"text-center"}>도서 목록이 없습니다.</h1>
    }*/
    const reSearch = (e) =>{
        handleShowAll()
        setInputDisabled(false)
    }
    const handleSearch = (e) => {
        setCurpage(1)
        setSearchTriggered(true)
        setInputDisabled(true)
    }
    const handleShowAll = () => {
        setCurpage(1)
        setSelectedGenre(null)
        setSearchTitle("")
        setSearchTriggered(false)
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
        }
    }
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
                                        <li className="breadcrumb-item"><h2>하루&nbsp;한&nbsp;권&nbsp;도서&nbsp;목록</h2></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8 col-md-10">
                                <div className="section-tittle mb-50">
                                    <p style={{
                                        "marginTop": "30px",
                                        "paddingLeft": "20px",
                                        "marginBottom": "0px"
                                    }}>총 {data.data.count}권</p>
                                    <p style={{
                                        "marginTop": "30px",
                                        "marginBottom": "0px",
                                        "textAlign":"right"
                                    }}> 책을 읽을 장소를 찾고 있다면? </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 ">
                                <aside className="single_sidebar_widget search_widget" style={{
                                    "paddingTop": "30px",
                                    "paddingBottom": "30px",
                                    "paddingLeft": "0px",
                                    "paddingRight": "0px"
                                }}>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="도서명 입력"
                                                    disabled={inputDisabled}
                                                    value={searchTitle}
                                                    onFocus={(e) => e.target.placeholder = ''}
                                                    onBlur={(e) => e.target.placeholder = '도서명을 입력해주세요'}
                                                    onChange={(e) => setSearchTitle(e.target.value)}
                                                    onKeyDown={handleKeyPress}
                                                />
                                                <div className="input-group-append">
                                                    <button className="btns" type="button"
                                                            style={{
                                                                "border": "1px solid blueviolet"
                                                            }}>
                                                        <i onClick={reSearch} className="ti-trash"></i>
                                                    </button>
                                                    <button className="btns" type="button"
                                                            style={{
                                                                "border": "1px solid blueviolet"
                                                            }}>
                                                        <i onClick={handleSearch} className="ti-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </aside>
                                <aside className="single_sidebar_widget post_category_widget">
                                    <h2 className="widget_title" style={{
                                        "color": "navy",
                                        "fontFamily": "Noto Sans KR, serif",
                                        "marginBottom": "20px"
                                    }}>카테고리</h2>
                                    <ul className="list cat-list">
                                        <p style={{
                                            "fontFamily": "Noto Sans KR, serif",
                                            "marginBottom": "30px",
                                            "cursor": "pointer",
                                            "fontWeight": "bold"
                                        }} onClick={() => handleShowAll()}> 전체 목록 </p>
                                        {data.data.bgList.map((bgenre, index) => (
                                            <li key={index}>
                                                <p
                                                    className="d-flex" style={{"cursor": "pointer"}}
                                                    onClick={() => {
                                                        setSelectedGenre(bgenre[0])
                                                        setSearchTitle("")
                                                        setCurpage(1)
                                                    }}
                                                >
                                                    {bgenre[0]}&nbsp;({bgenre[1]})</p>
                                            </li>
                                        ))}
                                    </ul>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-8">
                                <div className="new-arrival new-arrival2">
                                    <div className="row">
                                        {data.data.aList.map(book => (
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={book.bno}>
                                                <div className="single-new-arrival mb-50 text-center">
                                                    <div className="popular-img">
                                                        <img src={book.cover} alt={book.btitle}/>
                                                        <div className="favorit-items">
                                                            <img src="../img/gallery/favorit-card.png" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="popular-caption">
                                                        <h3><Link style={{"fontFamily": "Noto Sans KR, serif"}}
                                                                  to={'/book/detail/' + book.bno}>{book.btitle}</Link>
                                                        </h3>
                                                        <h4 style={{"fontFamily": "Noto Sans KR, serif"}}>{book.writer}</h4>
                                                        <span>{book.price.toLocaleString()}원</span>
                                                    </div>
                                                </div>
                                            </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default BookList;