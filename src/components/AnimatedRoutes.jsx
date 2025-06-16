import { Routes, Route, useLocation } from "react-router-dom";
import Landing from '../views/Landing' 
import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
    //use useLocation to get current locaiton of page w/ framer motion
    const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />}>
            </Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
