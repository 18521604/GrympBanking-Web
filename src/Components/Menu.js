import React from "react";
import homeIcon from "../assets/icons/home.png";
import settingIcon from "../assets/icons/setting.png";

export function Menu(){
    return(
        <div className="w-full flex flex-col items-center space-y-5 px-3 sticky top-0">
            <div className="bg-group-color p-2 mt-4 rounded-2xl">
                <img src={homeIcon} className="md:w-8 w-4" alt="homeicon"></img>
            </div>
            <div className="hover:bg-group-color p-2 mt-4 rounded-2xl transition-all">
                <img src={settingIcon} className="md:w-8 w-4" alt="settingicon"></img>
            </div>
        </div>
    )
}