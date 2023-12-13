import React from "react";
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { sideBarData } from "../Data/sideBarData";

export default function BaseApp({children,btn,btnName,btnClick}){
    return(
        <div className="main-container">
            <div className="side-bar-container">
                <div className="application-icon">
                    <AutoAwesomeMosaicIcon sx={{ fontSize: 40 }}/>
                </div>
                <ul>
                    {sideBarData.map((data,key)=>{
                        return( <li key={key}>
                        <div>{data.icon}</div>
                        <div>{data.name}</div>
                    </li>)
                    })}
                </ul>
            </div>
            <div className="content-container">
                <div className="content-header">
                    {btn ? <button onClick={btnClick}>{btnName}</button> : " "}
                </div>
                {children}
            </div>
        </div>
    )
}