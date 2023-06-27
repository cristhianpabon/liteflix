import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MotionDiv = ({ children, ...props }) => {
  const { disableAnimations } = useSelector((state) => state.animations);
  if (disableAnimations) {
    return <div {...props}>{children}</div>;
  }

  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
