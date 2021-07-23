import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import DoneIcon from '../../../assets/icons/done.svg';
import CapchaImage from '../../../assets/icons/capcha.png';


const SignupFormSix = () => {
  const history = useHistory();

  return (
    <form className="signup-form">
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-1" >Tỉnh/Thành phố (*):</label>
        <div className="signup-form__selector">
          <select id="signup-1" className="signup-form__selector">
            <option value="city-1" selected>TP. HCM</option>
            <option value="city-2">TP. Hà Nội</option>
            <option value="city-3">Tp. Đà Nẵng</option>
          </select>
        </div>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-2" >Chi nhánh (*):</label>
        <div className="signup-form__selector">
          <select id="signup-2" className="signup-form__selector">
            <option value="city-1" selected>PGD Võ Văn Ngân</option>
            <option value="city-2">Quận 1</option>
            <option value="city-3">Quận 2</option>
          </select>
        </div>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field" >
        <label className="signup-form__label" htmlFor="signup-3" >Mã capcha (*):</label>
        <div className="signup-form__capcha-input">
          <input className="signup-form__input" id="signup-3" placeholder="Nhập Capcha" />
          <img className="signup-form__capcha" alt="capcha" src={CapchaImage} />
        </div>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row--mg-2 signup-form__action-button">
        <button className="signup-form__button"
          onClick={() => history.push('signup-step-5')}
        >
          Quay lại
        </button>
        <button className="signup-form__button signup-form__button--bold"
          onClick={() => history.push('signup-step-7')}
        >
          Tiếp theo
        </button>
      </div>
    </form>
  )
};

export default SignupFormSix;