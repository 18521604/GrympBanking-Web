import React from 'react';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';
import SignupFormSix from '../../../Components/SignupForms/SignupFormSeven/index';

const SignupStepSixView = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Bước 6/7'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={6}
            title={'Chi nhánh xác thực thông tin'}
            note={<>Vui lòng chọn chi nhánh kích hoạt dịch vụ.</>}
          />
          <div className="form">
            <SignupFormSix />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepSixView;