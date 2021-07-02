import React from "react";
import homeIcon from "../assets/icons/home.png";
import settingIcon from "../assets/icons/setting.png";
import logoutIcon from "../assets/icons/logout.png";
import { Link } from 'react-router-dom';

export function Menu() {
    return (
        <div className="w-full flex flex-col items-center space-y-5 px-3 sticky top-0">
            <div className="bg-group-color p-2 mt-4 rounded-2xl">
                <img src={homeIcon} className="w-8" style={{minWidth: 20}} alt="homeicon"></img>
            </div>
            <div className="hover:bg-group-color p-2 mt-4 rounded-2xl transition-all">
                <img src={settingIcon} className="w-8" style={{minWidth: 20}} alt="settingicon"></img>
            </div>
            <Link to="/" className="hover:bg-group-color p-2 mt-4 rounded-2xl transition-all">
                <img src={logoutIcon} className="w-8" style={{minWidth: 20}} alt="settingicon"></img>
            </Link>
        </div>
    )
}