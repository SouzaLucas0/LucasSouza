import styles from './home.module.css'
import Image from 'next/image'

export default function SectionHome () {

    return (
        
        <section id='home' className={styles.home}>
            <Image 
                className={styles.home__fotoPerfil}
                src="/images/perfil.png"
                width={500}
                height={10}
                alt="Picture of the author"
            />
        </section>
        
    )
}