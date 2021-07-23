import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import DoneIcon from '../../../assets/icons/done.svg';

const SignupFormThree = () => {
  const history = useHistory();

  const lRef = React.useRef(null);
  const rRef = React.useRef(null);


  const [lfile, setlfile] = React.useState(null);
  const [rfile, setrfile] = React.useState(null);

  const [lfileUrl, setlfileUrl] = React.useState(null);
  const [rfileUrl, setrfileUrl] = React.useState(null);

  React.useEffect(() => {
    if (lfile != null) {
      const url = URL.createObjectURL(lfile);
      setlfileUrl(url);
    }
  }, [lfile]);

  React.useEffect(() => {
    if (rfile != null) {
      const url = URL.createObjectURL(lfile);
      setrfileUrl(url);
    }
  }, [rfile]);

  const handleFileChange = (e, left) => {
    const files = e.target.files || [];
    if (files.length === 0) {
      return;
    }
    if (left) {
      setlfile(files[0]);
    } else {
      setrfile(files[0]);
    }
  };

  const handleOpenFileBox = (left) => {
    if (left) {
      const instance = lRef?.current;
      console.log('1');
      if (instance) {
      console.log('2');

        instance.click();
      }
    } else {
      const instance = rRef?.current;
      if (instance) {
        instance.click();
      }
    }
  };

  return (
    <form className="signup-form">
      <div className="signup-form__identity-card signup-form__row">
        <div className="signup-form__identity-card--left">
          <p onClick={() => handleOpenFileBox(true)}>+ SELECT</p>
          <input ref={lRef} hidden onChange={(e) =>  handleFileChange(e, true)} type="file" />
          {
            lfileUrl && (
              <img className="signup-form__identity-card--left" src={lfileUrl} />
            )
          }
        </div>
        <div className="signup-form__identity-card--right">
          <p onClick={() => handleOpenFileBox(false)}>+ SELECT</p>
          <input ref={rRef} hidden onChange={(e) =>  handleFileChange(e, false)} type="file" />
          {
            rfileUrl && (
              <img className="signup-form__identity-card--right" src={rfileUrl} />
            )
          }
        </div>
      </div>
      <div className="signup-form__label-row signup-form__row--mg-2" >
        <p>Giấy tờ tùy thân</p>
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-1" >Số CMND (*):</label>
        <input className="signup-form__input" id="signup-1" placeholder="VD: 231245297" 
          defaultValue={(lfile && rfile) && '231246290'} />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-2" >Ngày cấp (*):</label>
        <input className="signup-form__input" id="signup-2" placeholder="VD: 15/06/2015" type="date" data-date-format="DD MM YYYY" 
          defaultValue={(lfile && rfile) && "2013-05-24"} />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-3" >Nơi cấp (*):</label>
        <input className="signup-form__input" id="signup-3" placeholder="VD: Công an TP Thủ Đức, TP. HCM" 
          defaultValue={(lfile && rfile) && "Công an Quận 2, TP. HCM"}/>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>

      <div className="signup-form__label-row signup-form__row" >
        <p>Địa chỉ thường trú</p>
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-4" >Tỉnh/TP (*):</label>
        <input className="signup-form__input" id="signup-4" placeholder="VD: TP. HCM"
          defaultValue={(lfile && rfile) && "TP. HCM"} />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-5" >Quận/Huyện (*):</label>
        <input className="signup-form__input" id="signup-5" placeholder="VD: TP. Thủ Đức" 
          defaultValue={(lfile && rfile) && "Quận 2"}/>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-6" >Phường/xã (*):</label>
        <input className="signup-form__input" id="signup-6" placeholder="VD: P. Linh Xuân" 
          defaultValue={(lfile && rfile) && "Phường Hiệp Bình Chánh"}/>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-7" >Nơi thường trú (*):</label>
        <input className="signup-form__input" id="signup-7" placeholder="VD: 120 Kha Vạn Cân" 
          defaultValue={(lfile && rfile) && "23 Nguyễn Thị Nhỏ"}/>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>

      <div className="signup-form__label-row signup-form__row" >
        <p>Nơi ở hiện tại</p>
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-8" >Tỉnh/TP (*):</label>
        <input className="signup-form__input" id="signup-8" placeholder="VD: TP. HCM" 
          defaultValue={(lfile && rfile) && "TP. HCM"}/>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-9" >Quận/Huyện (*):</label>
        <input className="signup-form__input" id="signup-9" placeholder="VD: Quận 9" 
           defaultValue={(lfile && rfile) && "Quận 2"}/>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-10" >Phường/xã (*):</label>
        <input className="signup-form__input" id="signup-10" placeholder="VD: Tân Phú" 
          defaultValue={(lfile && rfile) && "Phường Hiệp Bình Chánh"}/>
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>
      <div className="signup-form__row signup-form__text-field">
        <label className="signup-form__label" htmlFor="signup-11" >Nơi thường trú (*):</label>
        <input className="signup-form__input" id="signup-11" placeholder="VD: 120 Nguyễn Văn A"
          defaultValue={(lfile && rfile) && "23 Nguyễn Thị Nhỏ"} />
        <img className="signup-form__validate-icon" aria-label="check-icon" src={DoneIcon} />
      </div>

      <div className="signup-form__row--mg-2 signup-form__action-button">
        <button className="signup-form__button"
          onClick={() => history.push('signup-step-2')}
        >
          Quay lại
        </button>
        <button className="signup-form__button signup-form__button--bold"
          onClick={() => history.push('signup-step-4')}
        >
          Tiếp theo
        </button>
      </div>
    </form>
  )
};

export default SignupFormThree;