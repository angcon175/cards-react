import { useState } from "react";

export default function Like() {
    let [isLiked,setIsLiked] = useState(false)
    let [click, setClick] = useState(0)

    let changeLike = () => {
        setIsLiked(!isLiked)
        setClick(click+1)
    }

    return (
        <>
            <p onClick={changeLike}>Click = {click}</p>
            <p onClick={changeLike}>
                {
                    isLiked ? (<i className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)
                }
            </p>
        </>
    )
}