import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import DoneIcon from '../../../assets/icons/done.svg';


const SignupFormFour = () => {
  const videoRef = React.useRef();
  const history = useHistory();

  React.useEffect(() => {
    initWebcam();
    return () => {
      window.localStream && window.localStream.getVideoTracks()[0].stop();
    };
  }, []);

  const initWebcam = async () => {
    try {
      const constraints = {
        video: true,
      }
      const instance = videoRef.current;
      if (instance) {
          instance.srcObject = window.localStream = await navigator.mediaDevices.getUserMedia(constraints);
      }
    } catch (err) {
      alert("Vui lòng cho phép truy cập vào webcam để tiến hành bước đăng kí nhận diện khuôn mặt");
    }
  };

  return (
    <form className="signup-form">
      <div className="signup-form__face-reg signup-form__row">
        <div className="face-round">
          <object className="signup-form__validate-icon validate-icon-abs" aria-label="check-icon" data={DoneIcon} />
        </div>
        <video ref={videoRef} autoPlay></video>
      </div>
      <div className="signup-form__row--mg-2 signup-form__action-button">
        <button className="signup-form__button"
          onClick={() => history.push('signup-step-3')}
        >
          Quay lại
        </button>
        <button className="signup-form__button signup-form__button--bold"
          onClick={() => history.push('signup-step-5')}
        >
          Tiếp theo
        </button>
      </div>
    </form>
  )
};

export default SignupFormFour;