import React from 'react';
import './index.scss';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';
import SignupFormOne from '../../../Components/SignupForms/SignupFormOne/index';

const SignupStepOneView = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Bước 1/7'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={1}
            title={'Quý khách vui lòng điền các thông tin dưới đây'}
            note={<>Nếu đã có tài khoản tại GrympBank, vui lòng <span>bấm vào đây</span> để kích hoạt các dịch vụ.</>}
          />
          <div className="form">
            <SignupFormOne />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepOneView;