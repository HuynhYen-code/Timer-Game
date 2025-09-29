import {useState, useRef} from "react";


export default function Player(){
    const playerName = useRef();
    const [player, setPlayer] = useState(null);
        
    // function handlePlayer(e){
    //     setSubmitted(false);
    //     setPlayer(e.target.value);
    // }

    function handleSubmit(){
        // setSubmitted(true);
        setPlayer(playerName.current.value);
    }

    return(
        <section id="player">
            <h2>Xin chào {player ?? "No name"}</h2>
            <input type="text" placeholder="Nhập vào tên của bạn..." ref={playerName}/>
            <button onClick={handleSubmit}>Đặt tên</button>
        </section>
    )
}