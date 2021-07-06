import React from 'react';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';
import SignupFormThree from '../../../Components/SignupForms/SignupFormThree/index';

const SignupStepThreeView = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Bước 3/7'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={3}
            title={'Chọn loại giấy tờ xác minh'}
            note={<>Nếu đã có tài khoản tại GrympBank, vui lòng <span>bấm vào đây</span> để kích hoạt các dịch vụ.</>}
          />
          <div className="form">
            <SignupFormThree />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepThreeView;