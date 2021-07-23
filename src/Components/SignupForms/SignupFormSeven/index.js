import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import DoneIcon from '../../../assets/icons/done.svg';


const SignupFormSeven = () => {
  const history = useHistory();

  return (
    <form className="signup-form">
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-1" >Mã OTP (*):</label>
        <input className="signup-form__input signup-form__input--uppercase" id="signup-1" placeholder="Nhập mã OTP" />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row--mg-1 signup-form__help-text">
        <p>Không nhận được mã? <span>Gửi lại</span></p>
      </div>
      <div className="signup-form__row--mg-2 signup-form__action-button">
        <button className="signup-form__button"
          onClick={() => history.push('signup-step-6')}
        >
          Quay lại
        </button>
        <button className="signup-form__button signup-form__button--bold"
          onClick={() => history.push('signup-finish')}
        >
          Tiếp theo
        </button>
      </div>
    </form>
  )
};

export default SignupFormSeven;