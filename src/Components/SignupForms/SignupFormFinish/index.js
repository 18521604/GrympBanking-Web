import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import SuccessImage from '../../../assets/img/success.png';


const SignupFormFinish = () => {
  const history = useHistory();

  return (
    <form className="signup-form">
      <div className="signup-form__label-row signup-form__row--mg-2 signup-form__row--center" >
        <p>CHÚC MỪNG QUÝ KHÁCH ĐÃ ĐĂNG KÝ MỞ TÀI KHOẢN THÀNH CÔNG!</p>
      </div>
      <div className="signup-form__label-row signup-form__row--mg-2 signup-form__row--center" >
        <img src={SuccessImage} alt="success" />
      </div>
      <div className="signup-form__row--mg-2 signup-form__action-button signup-form__row--center">
        <button className="signup-form__button signup-form__button--bold" style={{margin: 0}}
          onClick={() => history.push('login')}
        >
          Đăng nhập
        </button>
      </div>
    </form>
  )
};

export default SignupFormFinish;