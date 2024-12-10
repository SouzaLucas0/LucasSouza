import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { hexToRGBA } from "../../functions/hexToRGBA";
import GlasCard from '../../cards/glassCard/glassCard';
import styles from './about.module.css'

/*          Icons          */
/*HTML5 = <FaHtml5 />      */
/*CSS3 = <FaCss3Alt />     */
/*JS = <FaJsSquare />      */
/*ReactJS = <FaReact />    */
/*NextJS = <RiNextjsFill/>*/

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
        }
    ]

        return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutContent}>                
                <h3 className={styles.aboutContent__tile}
                    style={{color: colorProject, textShadow: colorShadow}}
                >Sobre mim</h3>

                <p className={styles.aboutContent__text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>

                <h4 className={styles.aboutContent__subTite}
                    style={{color: colorProject, textShadow: colorShadow}}
                >Conhecimentos</h4>

                <div className={styles.aboutContent__skillCards}>
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