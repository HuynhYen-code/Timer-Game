import { useImperativeHandle, useRef } from "react"
import {createPortal} from "react-dom"

export default function ResultModel({targetTime, ref, remainingTime, onReset}){
    const dialogInside = useRef();
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const userLost = remainingTime <= 0;
    const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100);
    useImperativeHandle(ref, () => {
        return{
            open(){
                dialogInside.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialogInside} className="result-modal">
            {userLost ? <h2>Thua rồi!</h2> :<h2>Bạn ghi được {score} điểm!</h2>}
            <p>Thời gian đích: <strong>{targetTime} giây</strong></p>
            <p>Bạn còn <strong> {formattedRemainingTime} giây</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Đóng</button>
            </form>
        </dialog>, document.getElementById("modal")
    )
}