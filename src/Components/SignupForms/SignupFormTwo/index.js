import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import PassportIcon from '../../../assets/icons/passport.png';
import IdCardIcon from '../../../assets/icons/id-card.png';


const SignupFormTwo = () => {
  const history = useHistory();

  const [choice, setChoice] = React.useState(null);

  return (
    <form className="signup-form">
      <div className={`signup-form__identity-option ${choice === 0 ? 'signup-form__identity-option--active' : ''} signup-form__row`} >
        <div onClick={() => setChoice(0)}>
          <p>CMND/CCCD</p>
          <img className="signup-form__validate-icon icon-resize" alt="identity-icon" src={PassportIcon} />
        </div>
      </div>
      <div className={`signup-form__identity-option ${choice === 1 ? 'signup-form__identity-option--active' : ''} signup-form__row--mg-1`}>
        <div onClick={() => setChoice(1)}>
          <p>HỘ CHIẾU</p>
          <img className="signup-form__validate-icon icon-resize" alt="identity-icon" src={IdCardIcon} />
        </div>
      </div>
      <div className="signup-form__row--mg-2 signup-form__action-button">
        <button className="signup-form__button"
          onClick={() => history.push('signup-step-1')}
        >
          Quay lại
        </button>
        <button className="signup-form__button signup-form__button--bold"
          onClick={() => history.push('signup-step-3')}
        >
          Tiếp theo
        </button>
      </div>
    </form>
  )
};

export default SignupFormTwo;