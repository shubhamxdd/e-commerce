"use client";

import useWindowSize from "react-use/lib/useWindowSize";

import Confetti from "react-confetti";

const ConfettiComp = () => {
  const { height, width } = useWindowSize();
  return (
    <Confetti
      height={height}
      confettiSource={{ y: height / 2, x: width / 2 }}
      recycle={false}
      initialVelocityX={10}
      initialVelocityY={10}
      width={width}
    />
  );
};

export default ConfettiComp;
