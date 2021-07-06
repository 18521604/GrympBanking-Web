import React from 'react';
import CoverLogin from '../assets/img/CoverLogin.png'
import CapchaImage from '../assets/img/capcha.png';
import PhoneIcon from '../assets/icons/phone.png';
import { Link, useHistory } from 'react-router-dom';

export default function LoginView(){
    let history = useHistory();
    return(
        <div className="flex bg-background-color w-full min-h-screen justify-center items-center">
            <div className="flex flex-row md:w-8/12 w-5/6">
                <div className="w-2/3 object-cover lg:block hidden">
                    <img src={CoverLogin} alt="cover" className="rounded-l-2xl" style={{minWidth: 700}}></img>
                </div>
                <div className="flex flex-col lg:w-1/3 w-full bg-white lg:rounded-r-2xl lg:rounded-l-none rounded-l-xl rounded-r-2xl text-group-color font-body items-center py-7 space-y-3">
                    <div className="flex flex-col w-5/6 items-end space-y-2 md:text-base text-sm mb-4">
                        <div className="w-1/4 h-10 bg-blue-500">Logo</div>
                        <text className="font-title text-md">NGÂN HÀNG TRỰC TUYẾN</text>
                        <text className="font-title font-bold">GRYMP E-Banking</text>
                    </div>
                    <input className="w-5/6 rounded-2xl border border-group-color py-1.5 px-3 placeholder-group-color 
                    placeholder-opacity-70 outline-none md:text-base text-sm" placeholder="Tên truy cập"></input>
                    <input className="w-5/6 rounded-2xl border border-group-color py-1.5 px-3 placeholder-group-color 
                    placeholder-opacity-70 outline-none md:text-base text-sm" placeholder="Mật khẩu"></input>
                    <div className="w-5/6 flex-row flex space-x-5">
                        <input className="w-1/2 rounded-2xl border border-group-color py-1.5 px-3 placeholder-group-color
                    placeholder-opacity-70 outline-none md:text-base text-sm" placeholder="Mã xác thực"></input>
                        <img src={CapchaImage} alt="capcha" className="w-2/5"></img>
                    </div>
                    <div className="flex justify-start w-5/6 pt-2">
                        <button className="bg-button-color text-white py-1.5 w-1/2 rounded-lg hover:bg-hover-button-color transition-all
                        md:text-base text-sm"
                            onClick={() => history.push("/inittransfermoney")}>
                            Đăng nhập
                        </button>
                    </div>
                    <div className="flex justify-start w-5/6 md:text-sm text-xs space-x-2">
                        <text>Bạn chưa có tài khoản?</text>
                        <Link to="/signup-step-1" className="font-bold transition-all hover:text-background-color">Đăng ký ngay</Link>
                    </div>

                    <div className="w-5/6 h-px bg-group-color"></div>
                    
                    <div className="flex flex-col w-5/6 items-start font-bold md:text-sm text-xs space-y-2 pb-5">
                        <text className="hover:text-background-color transition-all cursor-pointer">Câu hỏi thường gặp</text>
                        <text className="hover:text-background-color transition-all cursor-pointer">Hướng dẫn sử dụng</text>
                        <text className="hover:text-background-color transition-all cursor-pointer">Điều khoản sử dụng</text>
                        <text className="hover:text-background-color transition-all cursor-pointer">Liên hệ</text>
                    </div>
                    <div className="flex flex-row w-5/6 justify-start space-x-4 font-bold md:text-base text-sm">
                        <img src={PhoneIcon} alt="iconPhone" className="w-6" style={{maxWidth: 100}}></img>
                        <span>1900 9090</span>
                    </div>
                </div>
            </div>
        </div>
    )
}