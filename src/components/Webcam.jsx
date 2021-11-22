import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam
        className="webcam"
        audio={false}
        ref={webcamRef}
        height={400}
        width={300}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
      />
      <div className="webcam-btn">
        <button onClick={capture}> Capture Photo</button>
      </div>
      <div className="img-container">{imgSrc && <img src={imgSrc} />}</div>
    </>
  );
};

export default WebcamCapture;
