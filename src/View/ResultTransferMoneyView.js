import React from 'react';
import { IconButton } from '@material-ui/core';
import IconMenu from '@material-ui/icons/Menu';
import IconHome from '@material-ui/icons/Home';
import IconSetting from '@material-ui/icons/Settings';
import logoutIcon from "../assets/icons/logout.png";
import avatar from '../assets/img/IMG_7904.JPG';
import { Link, useHistory } from 'react-router-dom';
import { Menu } from '../Components/Menu';
import { HeaderBar } from '../Components/HeaderBar';

export default function ConfirmTransferMoneyView() {
    let history = useHistory();
    const openMenu = () => {
        let element = document.getElementById('list-menu');
        if (element.style.display === "none")
            element.style.display = "inline";
        else
            element.style.display = "none";
    }

    return (
        <div className="w-full flex md:flex-row flex-col">
            <div className="hidden md:block w-1/18 bg-button-color">
                <Menu />
            </div>
            <div className="hidden md:block w-3/18 bg-group-color ">
                <HeaderBar />
            </div>
            <div className="md:hidden flex flex-row bg-button-color items-center">
                <IconButton onClick={openMenu} className="focus:outline-none" style={{ color: 'white' }}>
                    <IconMenu />
                </IconButton>
                <div className="flex flex-row text-white w-full justify-end mr-3 space-x-1">
                    <img src={avatar} alt='avatar' className='w-7 h-7 object-cover rounded-full'></img>
                    <span>N.T.Tuấn</span>
                    <div className="w-0.5 h-7 bg-white"></div>
                    <Link to="/" className="p-0 m-0"><img src={logoutIcon} className="w-6" alt="logoutIcon" /></Link>
                </div>
            </div>
            <div style={{ display: 'none' }} id="list-menu">
                <div className="flex flex-col bg-group-color space-y-2 py-2 px-4 items-start">
                    <Link to="/inittransfermoney" className="font-title text-base font-semibold text-white"><IconHome className="mr-3" />Trang chủ</Link>
                    <Link className="font-title text-base font-semibold text-white"><IconSetting className="mr-3" />Cài đặt</Link>
                </div>
            </div>
            <div className="md:w-14/18 w-full bg-background-color flex flex-col items-center min-h-screen justify-center">
                <div className="md:w-11/20 w-11/12 flex flex-col mt-6 text-xl">
                    <span className="font-bold text-white mb-5 font-title">Chuyển tiền</span>
                    <div className="flex flex-row w-full justify-center text-white">
                        <div className="w-7 h-6 bg-group-color rounded-full flex items-center justify-center">
                            <span className="text-sm">1</span>
                        </div>
                        <div className="w-1/2 h-px bg-white self-center" />
                        <div className="w-7 h-6 bg-group-color rounded-full flex items-center justify-center">
                            <span className="text-sm">2</span>
                        </div>
                        <div className="w-1/2 h-px bg-white self-center" />
                        <div className="w-7 h-6 bg-button-color rounded-full flex items-center justify-center">
                            <span className="text-sm">3</span>
                        </div>
                    </div>
                    <div className="flex flex-row w-full text-white my-2 justify-between">
                        <span className="text-sm font-body">Khởi tạo</span>
                        <span className="text-sm font-body">Xác nhận & xác thực</span>
                        <span className="text-sm font-body">Kết quả</span>
                    </div>

                    <div className="w-full bg-group-color rounded-lg text-white pt-2 md:pt-3 pb-6 md:pb-10 my-3 font-body text-sm space-y-8 flex flex-col items-center">
                        <text className="font-bold text-lg">Thành công</text>
                        <text className="font-bold text-xl">GIAO DỊCH THÀNH CÔNG</text>
                        <text className="text-base w-7/12 text-center leading-7">
                            Quý khách đã thực hiện chuyển thành công
                            <b> 5.000.000 VND </b> cho <b> NGUYEN A </b> số tài khoản <b> 21536589438 </b>
                        </text>
                        <div className="flex flex-col space-y-3 md:w-1/2 w-2/3">
                            <button className="bg-button-color text-white py-2 font-bold rounded-lg outline-none hover:bg-hover-button-color transition-all" onClick={() => history.push("/inittransfermoney")}>Lưu danh bạ thụ hưởng</button>
                            <button className="bg-button-color text-white py-2 font-bold rounded-lg outline-none hover:bg-hover-button-color transition-all" onClick={() => history.push("/inittransfermoney")}>Thực hiện giao dịch khác</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}