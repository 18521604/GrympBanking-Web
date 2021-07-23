import React from 'react';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';
import SignupFormTwo from '../../../Components/SignupForms/SignupFormTwo/index';

const SignupStepOneTwo = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Bước 2/7'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={2}
            title={'Chọn loại giấy tờ xác minh'}
            note={<>Nếu đã có tài khoản tại GrympBank, vui lòng <span>bấm vào đây</span> để kích hoạt các dịch vụ.</>}
          />
          <div className="form">
            <SignupFormTwo />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepOneTwo;