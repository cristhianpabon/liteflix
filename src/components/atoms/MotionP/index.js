import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MotionP = ({ children, ...props }) => {
  const { disableAnimations } = useSelector((state) => state.animations);

  if (disableAnimations) {
    return <h2 {...props}>{children}</h2>;
  }

  return <motion.h2 {...props}>{children}</motion.h2>;
};

export default MotionP;
