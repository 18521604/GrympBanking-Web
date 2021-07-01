import React from 'react';
import { Menu } from '../Components/Menu';
import { HeaderBar } from '../Components/HeaderBar';
import { RadioGroup, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import arrowIcon from '../assets/icons/arrow.png';
import communityIcon from '../assets/icons/community.png';

export default function InitTransferMoney() {
    return (
        <div className="w-full flex flex-row">
            <div className="hidden md:block w-1/18 bg-button-color">
                <Menu />
            </div>
            <div className="hidden md:block w-3/18 bg-group-color ">
                <HeaderBar />
            </div>
            <div className="md:w-14/18 w-full bg-background-color flex flex-col items-center">
                <div className="w-11/20 flex flex-col mt-6 text-xl">
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

                    <div className="w-full bg-group-color rounded-lg text-white py-2 my-3 text-base font-body">
                        <FormControl className="w-full">
                            <RadioGroup row className="flex flex-row justify-between mx-6 md:mx-12">
                                <FormControlLabel value="Người thụ hưởng mới" control={<Radio style={{color:"white"}} size="small"/>} label="Người thụ hưởng mới"></FormControlLabel>
                                <FormControlLabel value="Người thụ hưởng đã lưu" control={<Radio style={{color:"white"}} size="small"/>} label="Người thụ hưởng đã lưu"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <img src={arrowIcon} alt="arrowIcon" className="w-6 justify-self-center self-center"></img>

                    <div className="w-full bg-group-color rounded-lg text-white py-2 my-3 text-base font-body">
                        <FormControl className="w-full">
                            <RadioGroup row className="flex flex-row justify-between mx-6 md:mx-12">
                                <FormControlLabel value="Chuyển đến tài khoản ngân hàng" control={<Radio style={{color:"white"}} size="small"/>} label="Chuyển đến tài khoản ngân hàng"></FormControlLabel>
                                <FormControlLabel value="Chuyển đến thẻ ATM" control={<Radio style={{color:"white"}} size="small"/>} label="Chuyển đến thẻ ATM"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <img src={arrowIcon} alt="arrowIcon" className="w-6 justify-self-center self-center"></img>

                    <div className="w-full bg-group-color rounded-lg text-white py-5 my-3 font-body text-sm space-y-3">
                        <div className="w-full flex flex-row mx-6 md:mx-12 items-center">
                            <span className="text-base text-secondtext-color w-4/12">Tài khoản nguồn</span>
                            <select name="listAccounts" id="listAccounts" className="w-6/12 bg-white text-black outline-none p-2 rounded-2xl">
                                <option value="1">Tài khoản chính: 256325642536</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-row mx-6 md:mx-12 items-center">
                            <span className="text-base text-secondtext-color w-4/12">Họ tên người gửi</span>
                            <text className="text-white">Nguyễn Thanh Tuấn</text>
                        </div>
                        <div className="w-full flex flex-row mx-6 md:mx-12 items-center">
                            <span className="text-base text-secondtext-color w-4/12">Số dư khả dụng</span>
                            <text className="text-white">8.000.000 VND</text>
                        </div>
                    </div>

                    <div className="w-full bg-group-color rounded-lg text-white py-5 mb-3 font-body text-sm space-y-3">
                        <div className="w-full flex flex-row mx-6 md:mx-12 items-center">
                            <span className="text-base text-secondtext-color w-4/12">Ngân hàng TK thụ hưởng</span>
                            <div className="w-6/12 flex flex-row bg-white text-black outline-none px-2 py-1 rounded-2xl">
                                <input className="w-11/12 outline-none"></input>
                                <img src={communityIcon} alt="community icon" className="w-1/12"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-row mx-6 md:mx-12 items-center">
                            <span className="text-base text-secondtext-color w-4/12">Tài khoản thụ hưởng</span>
                            <input className="w-6/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl" />
                        </div>
                        <div className="w-full flex flex-row mx-6 md:mx-12 items-center">
                            <span className="text-base text-secondtext-color w-4/12">Tên tài khoản thụ hưởng</span>
                            <input className="w-6/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl" />
                        </div>
                    </div>

                    <div className="w-full bg-group-color rounded-lg text-white py-5 mb-3 font-body text-sm space-y-3">
                        <div className="w-full flex flex-row mx-6 md:mx-12 items-center">
                            <span className="text-base text-secondtext-color w-4/12">Số tiền</span>
                            <div className="w-6/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl items-center">
                                <input className="w-11/12 outline-none"></input>
                                <span className="w-1/12 text-icon-color">VND</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row mx-6 md:mx-12">
                            <span className="text-base text-secondtext-color w-4/12">Nội dung</span>
                            <textarea row="4" className="w-6/12 flex flex-row bg-white text-black outline-none px-2 py-2 rounded-2xl" />
                        </div>
                    </div>
                </div>
                <div className="self-end">
                    <button className="bg-button-color text-white py-1 px-6 rounded-lg outline-none mr-5 my-5 hover:bg-hover-button-color transition-all">Quay lại</button>
                    <button className="bg-button-color text-white py-1 px-6 rounded-lg outline-none mr-5 my-5 hover:bg-hover-button-color transition-all">Xác nhận</button>
                </div>
            </div>
        </div>
    )
}