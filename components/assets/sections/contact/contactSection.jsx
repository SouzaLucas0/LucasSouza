import Form from '../../cards/form/form'
import SocialsCard from '../../cards/socials/socialsCard'
import { hexToRGBA } from '../../functions/hexToRGBA'
import styles from './contact.module.css'

export default function SectionContact (props) {
    const colorProject = props.color ? props.color : '#34D6F2'
    const colorShadow = hexToRGBA(colorProject, '0.6')

    return (
        <section id='contact' className={styles.contact}>
            <h4 data-aos="fade-up" className={styles.contact__title}
                style={{color: colorProject,
                        textShadow: colorShadow
                }}
            >Entre em contato comigo!
            </h4>
            <h5 data-aos="fade-up" className={styles.contact__subTitle}
                style={{color: colorProject,
                    textShadow: colorShadow
                }}
            >Preencha o formulário ou contate pelas redes sociais.</h5>
            <div className={styles.contact__container}>
                <Form color={colorProject}/>
                <div className={styles.contact__socials}>
                    <SocialsCard colorful/>
                    <p data-aos="fade-up" className={styles.contact__text}
                        style={{color: colorProject,
                            textShadow: colorShadow
                        }}
                    >Clique na rede social que seja contatar
                    </p>
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