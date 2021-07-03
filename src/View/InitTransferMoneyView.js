import React, { useEffect, useState } from 'react';
import { RadioGroup, FormControlLabel, FormControl, Radio, IconButton } from '@material-ui/core';
import IconMenu from '@material-ui/icons/Menu';
import IconHome from '@material-ui/icons/Home';
import IconSetting from '@material-ui/icons/Settings';
import logoutIcon from "../assets/icons/logout.png";
import avatar from '../assets/img/IMG_7904.JPG';
import arrowIcon from '../assets/icons/arrow.png';
import communityIcon from '../assets/icons/community.png';
import { Link, useHistory } from 'react-router-dom';
import { Menu } from '../Components/Menu';
import { HeaderBar } from '../Components/HeaderBar';

export default function InitTransferMoneyView() {
    const [newPerson, setNewPerson] = useState('');
    const [statusTransfer, setStatusTransfer] = useState('');
    const [isShowText, setIsShowText] = useState(false);
    const [isShowStatusTransfer, setIsShowStatusTransfer] = useState(false);
    let history = useHistory();

    function changeStatePerson() {
        if (newPerson === "newPerson")
            setIsShowStatusTransfer(true);
        else
            setIsShowStatusTransfer(false);
    }
    function changeStateTransfer() {
        if (statusTransfer === "toBank")
            setIsShowText(true);
        else
            setIsShowText(false);
    }
    useEffect(() => {
        changeStateTransfer();
        changeStatePerson();
    })
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
            <div className="md:w-14/18 w-full bg-background-color flex flex-col items-center min-h-screen">
                <div className="md:w-11/20 w-11/12 flex flex-col mt-6 text-xl">
                    <span className="font-bold text-white mb-5 font-title">Chuyển tiền</span>
                    <div className="flex flex-row w-full justify-center text-white">
                        <div className="w-7 h-6 bg-button-color rounded-full flex items-center justify-center">
                            <span className="text-sm">1</span>
                        </div>
                        <div className="w-1/2 h-px bg-white self-center" />
                        <div className="w-7 h-6 bg-group-color rounded-full flex items-center justify-center">
                            <span className="text-sm">2</span>
                        </div>
                        <div className="w-1/2 h-px bg-white self-center" />
                        <div className="w-7 h-6 bg-group-color rounded-full flex items-center justify-center">
                            <span className="text-sm">3</span>
                        </div>
                    </div>
                    <div className="flex flex-row w-full text-white my-2 justify-between">
                        <span className="text-sm font-body">Khởi tạo</span>
                        <span className="text-sm font-body">Xác nhận & xác thực</span>
                        <span className="text-sm font-body">Kết quả</span>
                    </div>

                    <div className="w-full bg-group-color rounded-lg text-white py-2 my-3 text-base font-body flex justify-center">
                        <FormControl className="md:w-5/6 w-11/12">
                            <RadioGroup row className="flex flex-row justify-between" onChange={(e) => {
                                setNewPerson(e.target.value);
                            }}>
                                <FormControlLabel value="newPerson" control={<Radio style={{ color: "white" }} size="small" />} label="Người thụ hưởng mới"></FormControlLabel>
                                <FormControlLabel value="oldPerson" control={<Radio style={{ color: "white" }} size="small" />} label="Người thụ hưởng đã lưu"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <img src={arrowIcon} alt="arrowIcon" className={"w-6 justify-self-center self-center " + (isShowStatusTransfer ? "" : "hidden")}></img>

                    <div className={"w-full bg-group-color rounded-lg text-white py-2 my-3 text-base font-body flex justify-center " + (isShowStatusTransfer ? "" : "hidden")}>
                        <FormControl className="md:w-5/6 w-11/12">
                            <RadioGroup row className="flex flex-row justify-between" onChange={(e) => {
                                setStatusTransfer(e.target.value)
                            }}>
                                <FormControlLabel value="toBank" control={<Radio style={{ color: "white" }} size="small" />} label="Chuyển đến tài khoản ngân hàng"></FormControlLabel>
                                <FormControlLabel value="toATM" control={<Radio style={{ color: "white" }} size="small" />} label="Chuyển đến thẻ ATM"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <img src={arrowIcon} alt="arrowIcon" className={"w-6 justify-self-center self-center " + (isShowText ? "" : "hidden")}></img>

                    <div className={"" + (isShowText ? "block" : "hidden")}>
                        <div className="w-full bg-group-color rounded-lg text-white py-3 md:py-5 my-3 font-body text-sm space-y-3 flex flex-col items-center">
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Tài khoản nguồn</span>
                                <select name="listAccounts" id="listAccounts" className="w-7/12 bg-white text-black outline-none p-2 rounded-2xl">
                                    <option value="1">TK chính: 2153265425</option>
                                </select>
                            </div>
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Họ tên người gửi</span>
                                <text className="text-white">Nguyễn Thanh Tuấn</text>
                            </div>
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Số dư khả dụng</span>
                                <text className="text-white">8.000.000 VND</text>
                            </div>
                        </div>

                        <div className="w-full bg-group-color rounded-lg text-white md:py-5 py-3 mb-3 font-body text-sm space-y-3 flex flex-col items-center">
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Ngân hàng TK thụ hưởng</span>
                                <div className="w-7/12 flex flex-row bg-white text-black outline-none px-2 md:py-1.5 py-2 rounded-2xl">
                                    <input className="w-11/12 outline-none"></input>
                                    <img src={communityIcon} alt="community icon" className="w-1/12" />
                                </div>
                            </div>
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Tài khoản thụ hưởng</span>
                                <input className="w-7/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl" />
                            </div>
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Tên người hưởng</span>
                                <input className="w-7/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl" />
                            </div>
                        </div>

                        <div className="w-full bg-group-color rounded-lg text-white md:py-5 py-3 mb-3 font-body text-sm space-y-3 flex flex-col items-center">
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Số tiền</span>
                                <div className="w-7/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl items-center">
                                    <input className="w-11/12 outline-none"></input>
                                    <span className="w-1/12 text-icon-color md:mr-0 mr-3">VND</span>
                                </div>
                            </div>
                            <div className="md:w-5/6 w-11/12 flex flex-row items-center">
                                <span className="text-base text-secondtext-color w-5/12">Nội dung</span>
                                <textarea row="4" className="w-7/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-end">
                    <button className="bg-button-color text-white py-1 px-6 rounded-lg outline-none mr-5 my-5 hover:bg-hover-button-color transition-all" onClick={() => history.push("/confirmtransfermoney")}>Xác nhận</button>
                </div>
            </div>
        </div>
    )
}