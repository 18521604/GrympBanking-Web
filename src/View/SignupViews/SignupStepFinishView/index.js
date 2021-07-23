import React from 'react';
import SignupNoteBox from '../../../Components/SignupNoteBox/index';
import SignupFormFinish from '../../../Components/SignupForms/SignupFormFinish/index';

const SignupStepFinishView = () => {

  React.useEffect(() => {
    document.title = 'Đăng kí tài khoản - Hoàn thành'
  }, []);

  return (
    <div className="page-view">
      <div className="container">
        <div className="form-container">
          <div className="form">
            <SignupFormFinish />
          </div>
        </div>
        
        <SignupNoteBox />
      </div>
    </div>
  );
};

export default SignupStepFinishView;