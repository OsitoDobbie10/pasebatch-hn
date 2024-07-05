import { motion } from 'framer-motion';
import {fadeIn} from '../index'
const TransitionComponent = ({position,className,children}) => {
  return (
    <motion.div 
    variants={fadeIn(position)}
    initial="hidden"
    animate="visible"
    exit="hidden"
    className={className}
    >
    {children}
    </motion.div>
  )
}

export default TransitionComponent;