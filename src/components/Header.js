import React from "react";
import './Header.css';

export default ({black})=>{
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-1498-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABenK7eqn1F_ZhvdTTfYnUfDwrhDOz1zeAT768YUIRAn3IglungKyeHqdcLkU8YBPSM3pMWFr-lthHNvc2_fGkNvXHwk-.png?r=2c1"></img>
                </a>
            </div>
        </header>
    );
}