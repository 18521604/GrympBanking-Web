import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import DoneIcon from '../../../assets/icons/done.svg';

const SignupFormOne = () => {

  const history = useHistory();

  return (
    <form className="signup-form">
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-1" >Họ và tên (*):</label>
        <input className="signup-form__input signup-form__input--uppercase" id="signup-1" placeholder="VD: NGUYEN VAN A" tabIndex={0} />
        <object className="signup-form__validate-icon" aria-label="check-icon" data={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-2" >Email (*):</label>
        <input className="signup-form__input" id="signup-2" placeholder="VD: grympbank@gmail.com" tabIndex={1} />
        <object className="signup-form__validate-icon" aria-label="check-icon" data={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-3" >ĐT di động (*):</label>
        <input className="signup-form__input" id="signup-3" placeholder="VD: 0378678408" />
        <object className="signup-form__validate-icon" aria-label="check-icon" data={DoneIcon} tabIndex={2} />
      </div>
      <div className="signup-form__row--mg-2 signup-form__action-button">
        <button className="signup-form__button"
          onClick={() => history.push('login')}
        >
          Quay lại
        </button>
        <button className="signup-form__button signup-form__button--bold"
          onClick={() => history.push('signup-step-2')}
        >
          Tiếp theo
        </button>
      </div>
    </form>
  )
};

export default SignupFormOne;