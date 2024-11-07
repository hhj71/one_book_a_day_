import { Fragment, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery } from "react-query"
import apiClient from "../../http-commons"

function BoardUpdate() {
    const { no } = useParams();
    const nav = useNavigate();
    const userId = window.sessionStorage.getItem("id")
    const userName = window.sessionStorage.getItem("name")

    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("")
    const [btitle, setBtitle] = useState("")
    const [bList, setBList] = useState([])
    const [updatedBook, setUpdatedBook] = useState({
        bno: null,
        btitle: "",
        bcover: "",
        bwriter: ""
    })

    // 게시물 조회
    const { data: boardData, isLoading } = useQuery(
        ['getBoard', no],
        () => apiClient.get(`/board/update/${no}`),
        {
            onSuccess: (data) => {
                setSubject(data.data.subject)
                setContent(data.data.content)
                setTag(data.data.tag)
                setBtitle(data.data.btitle)
                setUpdatedBook({
                    bno: data.data.bno,
                    btitle: data.data.btitle,
                    bcover: data.data.bcover,
                    bwriter: data.data.bwriter
                })
            },
            onError: (error) => {
                console.error("게시물 정보 불러오기 실패:", error);
            },
        }
    )

    const { mutate: updateBoard } = useMutation(
        async () => {
            return await apiClient.put(`/board/update_ok/${no}`, {
                subject: subject,
                content: content,
                tag: tag,
                id: userId,
                name: userName,
                bno: updatedBook.bno,
                btitle: updatedBook.btitle,
                bcover: updatedBook.bcover,
                bwriter: updatedBook.bwriter
            })
        },
        {
            onSuccess: (res) => {
                if (res.data.msg === "yes") {
                    alert("게시물이 수정되었습니다.")
                    nav(`/board/detail/${no}`)
                } else {
                    alert("게시물 수정 실패. 다시 시도해주세요.")
                }
            },
            onError: (error) => {
                console.error("게시물 수정 실패:", error)
            },
        }
    )

    // 책 검색 함수
    const fetchBooks = async (query) => {
        try {
            const response = await apiClient.get(`/board/booksearch`, {
                params: { btitle: query }
            })
            setBList(response.data)
        } catch (error) {
            console.error("책 검색 실패:", error)
        }
    };

    const handleBookSelect = (e) => {
        const selectedBno = parseInt(e.target.value)
        const selectedBook = bList.find(book => book.bno === selectedBno);
        setUpdatedBook({
            bno: selectedBook.bno,
            btitle: selectedBook.btitle,
            bcover: selectedBook.cover,
            bwriter: selectedBook.writer
        })
    }

    // 게시물 수정 핸들러
    const handleUpdate = (e) => {
        e.preventDefault()
        updateBoard()
    }

    if (isLoading) {
        return <div className="preloader"><div className="preloader-circle"></div></div>;
    }

    return (
        <Fragment>
            <div className="page-notification page-notification2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><h2>하루&nbsp;한&nbsp;권&nbsp;독서&nbsp;기록&nbsp;수정</h2></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-form">
                <div className="container">
                    <form onSubmit={handleUpdate} className="form-contact comment_form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="제목을 입력해주세요"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>

                        <div className="form-group" style={{ display: "flex" }}>
                            <div className="col-7" style={{ paddingLeft: "0px" }}>
                                <input
                                    className="form-control"
                                    name="book"
                                    id="book"
                                    type="text"
                                    placeholder="책 제목을 입력해주세요"
                                    value={btitle}
                                    onChange={(e) => setBtitle(e.target.value)}
                                />
                            </div>
                            <div className="col-1">
                                <button
                                    className="button boxed-btn"
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        fetchBooks(btitle); // 검색 버튼 클릭 시 책 검색
                                    }}
                                    style={{ height: "48px", padding: "10px" }}
                                >
                                    검색
                                </button>
                            </div>
                            <div className="col-4"></div>
                        </div>
                        <div className="form-group">
                            <div className="col-7">
                                <div>
                                    <select
                                        className="nice-select"
                                        style={{ marginBottom: "20px", minWidth: "300px", marginLeft: "-15px" }}
                                        value={updatedBook.bno}
                                        onChange={handleBookSelect}
                                    >
                                        {bList.map(book => (
                                            <option key={book.bno} value={book.bno}>
                                                {book.btitle}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-5"></div>
                        </div>

                        <div className="form-group">
                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="기록을 작성해주세요"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <span>어떤 기분일 때 이 책을 읽으면 좋을까요?</span>
                            <div className="boardradio">
                                <label>
                                    <input
                                        type="radio"
                                        name="tag"
                                        value="기쁨"
                                        checked={tag === "기쁨"}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                    😊 기쁨
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="tag"
                                        value="보통"
                                        checked={tag === "보통"}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                    😐 보통
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="tag"
                                        value="슬픔"
                                        checked={tag === "슬픔"}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                    😭 슬픔
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="tag"
                                        value="화남"
                                        checked={tag === "화남"}
                                        onChange={(e) => setTag(e.target.value)}
                                    />
                                    😡 화남
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                수정하기
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default BoardUpdate;
