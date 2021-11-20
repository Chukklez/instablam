import React from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  facingMode: 'user',
};

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);

  return (
    <Webcam
      audio={false}
      ref={webcamRef}
      height={400}
      width={300}
      videoConstraints={videoConstraints}
      screenshotFormat="image/jpeg"
    />
  );
};

export default Webcam;
