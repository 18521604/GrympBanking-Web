import React from 'react';
import avatar from '../assets/img/IMG_7904.JPG';

export function HeaderBar(){
    return(
        <div className="w-full flex flex-col items-center sticky top-0">
            <span className="md:text-2xl text-base text-secondtext-color mt-4 text-center"><b className='text-white'>GRYMP</b> Banking</span>
            <div className="flex flex-col border border-white w-4/5 items-center py-4 mt-10 space-y-2 rounded-lg">
                <img src={avatar} alt='avatar' className='w-16 h-16 object-cover rounded-full'></img>
                <span className='text-secondtext-color'>Xin chào</span>
                <span className='text-white'>Nguyễn Thanh Tuấn</span>
            </div>
        </div>
    )
}