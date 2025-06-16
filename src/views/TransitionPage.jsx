import { motion } from "framer-motion";
import ls from "../assets/images/ls.png";
function TransitionPage() {
  const slideUp = {
    initial: {
      y: 0,
    },
    exit: {
      y: "-100vh",
      transition: { duration: 1, ease: [0.83, 0, 0.17, 1] },
    },
  };
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex justify-center items-center z-[999] fixed top-0 left-0 bg-Light text-white font-light text-xl font-gothic "
    >
          <div
      className="text-black"
      style={{ fontFamily: "var(--font-book-antiqua)" }}
    >
      JUSTPAOLOSTAR
    </div>
    </motion.div>
  );
}

export default TransitionPage;
