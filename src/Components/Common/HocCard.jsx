import { motion } from "motion/react";

const HocCard = (WrappedComponent ) => {
  return (props) => {
    return (
      <>
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
        >
          <WrappedComponent  {...props} />
        </motion.div>
      </>
    );
  };
};

export default HocCard;
