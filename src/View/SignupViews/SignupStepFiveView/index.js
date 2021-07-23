import React from 'react';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';
import SignupFormFive from '../../../Components/SignupForms/SignupFormFive/index';

const SignupStepFiveView = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Bước 5/7'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={5}
            title={'Thông tin dịch vụ đăng ký'}
            note={<>Vui lòng chọn các dịch vụ cần đăng ký.</>}
          />
          <div className="form">
            <SignupFormFive />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepFiveView;