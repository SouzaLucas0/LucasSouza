import styles from './home.module.css'
import Image from 'next/image'
import Foto from '../../../../public/img/perfil.png'

export default function SectionHome (props) {
    const colorProject = props.color ? props.color : '#34D6F2'
    const colorShadow = '0px 0px 10px rgba'+hexToRGBA(colorProject, '0.6')
    return (        
        <section id='home' className={styles.home}>
            <div className={styles.home__img}>                
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
                    }}>Frontend Developer
                </h2>                
                <p className={styles.home__title_p}>"Programadores criam soluções onde outros veem problemas"</p>
            </div>
            <div 
                className={styles.teste}
                style={{
                    backgroundColor: colorProject
                }}
            >

            </div>
        </section>        
    )


    function hexToRGBA(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);
    
        if (alpha) {
            return "(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "(" + r + ", " + g + ", " + b + ")";
        }
    }
}