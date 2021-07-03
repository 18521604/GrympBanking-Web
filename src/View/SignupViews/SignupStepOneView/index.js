import React from 'react';
import './index.scss';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupStepInfoBox from '../../../Components/SignupStepInfoBox/index';

const SignupStepOneView = () => {

  return (
    <div className="root">
      <div className="container">
        <div className="form-container">
          <SignupStepInfoBox
            step={1}
            title={'Quý khách vui lòng điền các thông tin dưới đây'}
            note={<>Nếu đã có tài khoản tại GrympBank, vui lòng <span>bấm vào đây</span> để kích hoạt các dịch vụ.</>}
          />
          <form className="signup-form">
            
          </form>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepOneView;