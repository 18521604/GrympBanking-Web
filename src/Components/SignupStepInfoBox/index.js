import React from 'react';
import './index.scss';

const SignupStepInfoBox = ({
  step,
  title,
  note
}) => {

  return (
    <div className="signup-step-info">
      <h1>ĐĂNG KÝ DỊCH VỤ TRỰC TUYẾN</h1>
      <div className="signup-step-info__step">
        <p>{`Bước ${step}/7: ${title}`}</p>
        <div></div>
      </div>
      <p>{note}</p>
    </div>
  );
};

export default SignupStepInfoBox;