import React from 'react';
import './index.scss';
import AppLogo from '../../assets/icons/phone_in_talk.svg';
import PhoneIcon from '../../assets/icons/phone_in_talk.svg';

const SignupNoteBox = () => {

  return (
    <div className="signup-note">
      <div className="signup-note__bank-info">
        <img alt="logo" src={AppLogo} />
        <div></div>
        <h1>NGÂN HÀNG TRỰC TUYẾN</h1>
        <p>GRYMP E-Banking</p>
      </div>
      <div className="signup-note__content">
        <div className="signup-note__content__group">
          <h2>LỢI ÍCH:</h2>
          <p>- Giao dịch mọi lúc mọi nơi chỉ cần có Internet mà không cần tới ngân hàng hay ra cây ATM.</p>
          <p>- Dễ dàng quản lý chi tiêu, thu, chi qua tài khoản mọi lúc mọi nơi.</p>
          <p>- Cho phép khách hàng đăng ký vay vốn, mở thẻ tín dụng trực tuyến mà không cần phải ra ngân hàng.</p>
        </div>
        <div className="signup-note__content__group">
          <h2>LƯU Ý:</h2>
          <p>- Cẩn trọng với máy tính nơi công cộng.</p>
          <p>- Luôn luôn bảo vệ kỹ mật khẩu.</p>
          <p>- Chỉ nên giao dịch với những website thanh toán uy tín.</p>
        </div>
      </div>
      <div className="signup-note__contact">
        <img alt="contact" src={PhoneIcon}/>
        <p>1900 9090</p>
      </div>
    </div>
  );
};

export default SignupNoteBox;