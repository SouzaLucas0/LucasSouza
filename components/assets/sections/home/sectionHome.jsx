import Image from 'next/image'
import Foto from '../../../../public/img/perfil.png'
import { hexToRGBA } from '../../functions/hexToRGBA'
import styles from './home.module.css'

export default function SectionHome (props) {
    const colorProject = props.color ? props.color : '#34D6F2'
    const colorShadow = hexToRGBA(colorProject, '0.6', '12px')
    const dropShadow = 'drop-shadow('+hexToRGBA(colorProject, '0.5', '12px')+')'

    return (        
        <section id='home' className={styles.home}>
            <div className={styles.home__img}

                style={{
                    filter: dropShadow
                }}  
            >           
                <Image              
                    src={Foto}
                    layout='responsive'
                />                
            </div>
            <div className={styles.home__title} >
                <h1 className={styles.home__title_h1}
                    style={{
                        color: colorProject,
                        textShadow: colorShadow
                    }}>Lucas Souza
                </h1>
                <h2
                    className={styles.home__title_h2}
                    style={{
                        color: colorProject,
                        textShadow: colorShadow
                }}>
                    Frontend Developer
                </h2>                
                <p className={styles.home__title_p}>
                    "Programadores criam soluções onde outros veem problemas"
                </p>
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