import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import styles from './socialsCard.module.css'

export default function SocialsCard (props) {
    const style = defineClassName(props)
    const size = props.fontSize    

    return (
        <>
            <a href="https://wa.me/5569984191509" target="_blank">
                <FaWhatsapp className={`${styles.socials} ${style} ${styles.whatsapp}`} style={{fontSize: size}}/>
            </a>
            <a href="https://github.com/SouzaLucas0" target="_blank">
                <VscGithub className={`${styles.socials} ${style} ${styles.github}`} style={{fontSize: size}}/>
            </a>
            <a href="https://www.instagram.com/_lucass.fs/" target="_blank">
                <FaInstagram className={`${styles.socials} ${style} ${styles.instagram}`} style={{fontSize: size}}/>
            </a>
            <a href="https://www.linkedin.com/in/souzalucas0/" target="_blank">
                <FaLinkedin  className={`${styles.socials} ${style} ${styles.linkedin}`} style={{fontSize: size}}/>
            </a>
        </>
    )

    function defineClassName(params) {
        let className

        if (params.colorful) {
            className = styles.socialsColorful
        }

        return className
    }
}