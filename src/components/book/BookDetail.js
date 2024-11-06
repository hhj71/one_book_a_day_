import { Fragment } from "react"
import { Link, useNavigate, useParams } from "../../../node_modules/react-router-dom/dist/index"
import { useQuery } from "react-query"
import httpCommons from "../../http-commons"

function BookDetail() {
    const nav=useNavigate
    const {bno}=useParams()
    const { isLoading, isError, error, data } = useQuery(['bookDetailData', bno],
        async () => {
            return await httpCommons.get(`/book/detail/${bno}`)
        }
    )
    if(isLoading)
        return <h1 className={"preloader"}>하루 한 권</h1>
    if (isError)
        return <h1 className="text-center">{error}</h1>
    console.log(data)
    return(
        <Fragment>
            <main>
                <div className="directory-details pt-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="gallery-img" style={{"textAlign":"center"}}>
                                            <img src={data.data.cover} className="mb-30" alt=""/>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="small-tittle mb-20">
                                            <h1 style={{
                                                "fontWeight": "bold",
                                                "fontFamily": "Noto Sans KR, serif",
                                                "fontSize": "30px"
                                            }}>{data.data.btitle}</h1>
                                        </div>
                                        <div className="small-tittle mb-20">
                                            <h2>{data.data.writer}</h2>
                                        </div>
                                        <div className="small-tittle mb-20">
                                            <h4>{data.data.publisher}&nbsp;|&nbsp;{data.data.bdate}</h4>
                                        </div>
                                        <div className="directory-cap mb-40">
                                            <p>{data.data.btag}</p>
                                        </div>
                                        <div className="small-tittle mb-20">
                                            <h2>{data.data.price.toLocaleString()} 원</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-1"></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-1">
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="directory-cap mb-40">
                                            <p style={{"fontWeight":"500","backgroundColor":"#fbf9ff","padding":"20px"}}>{data.data.intro}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
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

export default BookDetail;