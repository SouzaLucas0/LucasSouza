import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import styles from './socialsCard.module.css'

export default function SocialsCard (props) {
    const style = defineClassName(props)   

    return (
        <>
            <a data-aos="zoom-in" href="https://wa.me/5569984191509" target="_blank">
                <FaWhatsapp className={`${styles.socials} ${style} ${styles.whatsapp}`}/>
            </a>
            <a data-aos="zoom-in" href="https://github.com/SouzaLucas0" target="_blank">
                <VscGithub className={`${styles.socials} ${style} ${styles.github}`}/>
            </a>
            <a data-aos="zoom-in" href="https://www.instagram.com/_lucass.fs/" target="_blank">
                <FaInstagram className={`${styles.socials} ${style} ${styles.instagram}`}/>
            </a>
            <a data-aos="zoom-in" href="https://www.linkedin.com/in/souzalucas0/" target="_blank">
                <FaLinkedin  className={`${styles.socials} ${style} ${styles.linkedin}`}/>
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