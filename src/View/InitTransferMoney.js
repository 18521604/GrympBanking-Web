import React from 'react';
import { Menu } from '../Components/Menu';
import { HeaderBar } from '../Components/HeaderBar';

export default function InitTransferMoney() {
    return (
        <div className="w-full h-screen flex flex-row">
            <div className="hidden md:block w-1/18 bg-button-color">
                <Menu />
            </div>
            <div className="hidden md:block w-3/18 bg-group-color">
                <HeaderBar />
            </div>
            <div className="md:w-14/18 w-full bg-background-color flex flex-row justify-center">
                <div className="w-7/12 flex flex-col mt-6 text-xl space-y-2">
                    <span className="font-bold text-white">Chuyển tiền</span>
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
                    <div className="flex flex-row w-full text-white">
                        <span className="text-sm">Khởi tạo</span>
                        <div className="w-1/3"></div>
                        <span className="text-sm ">Xác nhận & xác thực</span>
                        <div className="w-1/3"></div>
                        <span className="text-sm self-end">Kết quả</span>
                    </div>
                </div>
            </div>
        </div>
    )
}