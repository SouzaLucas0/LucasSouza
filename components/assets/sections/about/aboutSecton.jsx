import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { hexToRGBA } from "../../functions/hexToRGBA";
import GlasCard from '../../cards/glassCard/glassCard';
import styles from './about.module.css'

/*          Icons          */
/*HTML5 = <FaHtml5 />      */
/*CSS3 = <FaCss3Alt />     */
/*JS = <FaJsSquare />      */
/*ReactJS = <FaReact />    */
/*NextJS = <RiNextjsFill/> */

export default function SectionAbout (props) {
    const colorProject = props.color ? props.color : '#34D6F2'
    const colorShadow = hexToRGBA(colorProject, '0.6')

    const cardList = [
        {
            title: 'HTML5',
            icon: <FaHtml5 />
        },
        {
            title: 'CSS3',
            icon: <FaCss3Alt />
        },
        {
            title: 'JavaScript',
            icon: <FaJsSquare />
        },
        {
            title: 'ReactJS',
            icon: <FaReact />
        },
        {
            title: 'NextJS',
            icon: <RiNextjsFill/>
        },
        {
            title: 'Tailwind',
            icon: <RiTailwindCssFill />
        }
    ]

        return (
        <section id="about" className={styles.about}>
            <div data-aos="fade-up" className={styles.aboutContent}>                
                <h3 data-aos="fade-up" className={styles.aboutContent__tile}
                    style={{color: colorProject, textShadow: colorShadow}}
                >Sobre mim</h3>

                <p data-aos="fade-up" className={styles.aboutContent__text}>Formado em Sistemas de Informação e buscando consolidar primeiramente carreira em Desenvolvimento Front-End com especialidade em ReactJS. Posteriormente pretendendo adquirir conhecimentos em Back-End, a fim de trilhar a carreira de desenvolvedor Full Stack.</p>

                <h4 data-aos="fade-up" className={styles.aboutContent__subTite}
                    style={{color: colorProject, textShadow: colorShadow}}
                >Conhecimentos</h4>

                <div data-aos="fade-up" className={styles.aboutContent__skillCards}>
                    <GlasCard
                        cards = {cardList}
                        color={colorProject}
                    />
                </div>
            </div>
            <div 
                className={styles.iluminacao}
                style={{
                    backgroundColor: colorProject
                }}
            >
            </div>
        </section>
    )
}