import React, { useState } from "react";
import "../App.css";

const Tugas8 = () => {
    const [angka, setAngka] = useState(0);
    const [pesan, setPesan] = useState("");

    const handleAngka = () => {
        const newAngka = angka + 1;
        setAngka(newAngka);

        if (newAngka >= 10) {
            setPesan("State count sudah lebih dari 10!!");
        }
    };

    return (
        <>
            <div className="App">
                <div className='container'>
                    <p>{angka}</p>
                    <button 
                        className="btnnn" 
                        onClick={handleAngka} 
                        disabled={angka >= 10}
                    >
                        Tambah
                    </button>
                    <p><strong>{pesan}</strong></p>
                </div>
            </div>
        </>
    );
}

export default Tugas8;
