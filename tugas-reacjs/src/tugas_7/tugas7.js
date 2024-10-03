import React from "react";
import "../App.css";

function Tugas7(props) {
return (
    <div className="App">
        <div className="container">
            <h1>Data Diri Peserta kelas Reactjs</h1>
            <hr></hr>
            
                <li><strong>Nama Lengkap :</strong> {props.name}</li>
                <li><strong>Email :</strong> {props.email}</li>
                <li><strong>Batch Pelatihan :</strong> {props.batch}</li>
           
        </div>
    </div>
);
}

export default Tugas7;
