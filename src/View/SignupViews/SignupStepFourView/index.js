import React from 'react';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';
import SignupFormFour from '../../../Components/SignupForms/SignupFormFour/index';

const SignupStepFourView = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Bước 4/7'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={4}
            title={'Đăng ký khuôn mặt'}
            note={<>Vui lòng hướng khuôn mặt vào giữa màn hình đến khi có dấu tích xanh.</>}
          />
          <div className="form">
            <SignupFormFour />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepFourView;