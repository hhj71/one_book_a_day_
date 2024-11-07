import { useEffect, useRef } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../http-commons";

function BoardDelete() {
    const { no } = useParams()
    const nav = useNavigate()

    // Mutation hook for deleting the post
    const { mutate: boardDelete } = useMutation(
        async () => {
            return await apiClient.delete(`/board/delete/${no}`)
        },
        {
            onSuccess: (res) => {
                if (res.data.msg === "yes") {
                    alert("기록이 삭제되었습니다.")
                    nav("/board/list")
                } else {
                    alert("삭제에 실패했습니다. 다시 시도해주세요.")
                }
            },
            onError: (error) => {
                console.error(error.response)
            },
        }
    );

    // useRef를 사용하여 confirm 창이 한번만 실행되도록 방지
    const confirmShown = useRef(false)

    useEffect(() => {

        if (!confirmShown.current) {
            confirmShown.current = true
            const isConfirmed = window.confirm("정말 게시물을 삭제하시겠습니까?")

            if (isConfirmed) {
                boardDelete()
            } else {
                nav(`/board/detail/${no}`)
            }
        }
    }, [no, boardDelete, nav])

    return null
}

export default BoardDelete
