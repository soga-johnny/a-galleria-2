import dynamic from "next/dynamic"
import Link from 'next/link'
import { motion } from "framer-motion";
import styles from '../styles/Home.module.scss'
// import Ar from '../components/Ar'
import { Scene } from 'react-aframe-ar/dist/core';


const Arssr = dynamic(() => 
import("../components/Ar"), {
ssr: false,
})

export default function scan() {
return (
    <div className={styles.container}>
        <motion.div className={styles.comingSoon}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 50 }}
           transition={{  duration: 1, delay: 1, ease: "easeInOut" }}
           >
            <Scene>
            < Arssr />
            </Scene>


             <p>
                Preparing AR contents...
                please waita few days.
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