import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import DoneIcon from '../../../assets/icons/done.svg';


const SignupFormFive = () => {
  const history = useHistory();

  return (
    <form className="signup-form">
      <div className="signup-form__row signup-form__checkbox-group">
        <div className="signup-form__check-box">
          <input type="checkbox" id="service-1" />
          <label htmlFor="service-1">Mở tài khoản</label>
        </div>
        <div className="signup-form__check-box">
          <input type="checkbox" id="service-2" />
          <label htmlFor="service-2">eMB Ngân hàng điện tử</label>
        </div>
        <div className="signup-form__check-box">
          <input type="checkbox" id="service-3" />
          <label htmlFor="service-3">SMS Banking</label>
        </div>
        <div className="signup-form__check-box">
          <input type="checkbox" id="service-4" />
          <label htmlFor="service-4">Thẻ ATM Active Plus</label>
        </div>
      </div>
      <div className="signup-form__row--mg-2 signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-1-name" >SĐT nhận SMS (*):</label>
        <input className="signup-form__input signup-form__input--uppercase" id="signup-1-name" placeholder="VD: 0378678408" tpye="number" />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-1-name" >Tên đăng nhập (*):</label>
        <input className="signup-form__input signup-form__input--uppercase" id="signup-1-name" placeholder="VD: noname" />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-1-name" >Tên in trên thẻ (*): </label>
        <input className="signup-form__input signup-form__input--uppercase" id="signup-1-name" placeholder="VD: NGUYEN VAN A" />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row--mg-2 signup-form__action-button">
        <button className="signup-form__button"
          onClick={() => history.push('signup-step-4')}
        >
          Quay lại
        </button>
        <button className="signup-form__button signup-form__button--bold"
          onClick={() => history.push('signup-step-6')}
        >
          Tiếp theo
        </button>
      </div>
    </form>
  )
};

export default SignupFormFive;