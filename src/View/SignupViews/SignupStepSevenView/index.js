import React from 'react';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';
import SignupFormSeven from '../../../Components/SignupForms/SignupFormSix/index';

const SignupStepSevenView = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Bước 7/7'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={7}
            title={'Xác thực và hoàn tất'}
            note={<>Một mã OTP đã được gửi về số điện thoại quý khách đã đăng ký ban đầu, vui lòng điền mã OTP để xác nhận hoàn tất.</>}
          />
          <div className="form">
            <SignupFormSeven />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepSevenView;