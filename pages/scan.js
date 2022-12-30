import Link from 'next/link'
import { motion } from "framer-motion";
import styles from '../styles/Home.module.scss'

export default function Scan() {
return (
    <div className={styles.container}>
        <motion.div className={styles.comingSoon}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 50 }}
           transition={{  duration: 1, delay: 1, ease: "easeInOut" }}
           >
            <p>
                Preparing AR contents...
            </p>
            <button>
            <Link href="/">
            Back
            </Link>
            </button>
        </motion.div>

    </div>
)
}