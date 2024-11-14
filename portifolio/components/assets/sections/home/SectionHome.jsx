import styles from './home.module.css'
import Image from 'next/image'

export default function SectionHome () {
    const Foto = 'https://media.licdn.com/dms/image/v2/D4D03AQFw6X0VOHVQCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727109077942?e=1736985600&v=beta&t=kMs5CwAySk20eqxa8TQQfWAuOtmZIUmcnXQbBVjPUvM'
    return (
        
        <section id='home' className={styles.home}>
            <div >                
                <Image
                    fill
                    src={Foto}
                    alt='foto de perfil'
                    loading='lazy'
                    layout='reponsive'                   
                />
            </div>
        </section>
        
    )
}