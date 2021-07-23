import React from 'react';
import avatar from '../assets/img/IMG_7904.JPG';
import GrympLogo from '../assets/img/grympLogo.png';

export function HeaderBar() {
    return (
        <div className="w-full flex flex-col items-center sticky top-0">
            <div className="md:text-2xl text-base text-secondtext-color mt-4 text-center flex flex-col items-center space-y-2">
                <img src={GrympLogo} alt="logo" className="w-10"></img>
                <span><b className='text-white'>GRYMP</b> Banking</span>
            </div>
            <div className="flex flex-col border border-white w-4/5 items-center py-4 mt-10 space-y-2 rounded-lg">
                <img src={avatar} alt='avatar' className='w-16 h-16 object-cover rounded-full'></img>
                <span className='text-secondtext-color'>Xin chào</span>
                <span className='text-white'>Nguyễn Thanh Tuấn</span>
            </div>
        </div>
    )
}