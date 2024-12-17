import logo from '/public/img/logo.png'
import styles from './menu.module.css'
import Image from 'next/image'

export default function Menu (props) {
    
    const btnList = props.botao

    return(
         <>
            <Image
                src={logo}
                alt="logo do site"
                className={styles.logo}                
            />
            
            <div className={styles.menu__navBar}>
                {btnList.map((btn, index)=>{
                    return <li key={index}><a href={btn.link}>{btn.nome}</a></li>
                })}
            </div>

            <div className={styles.menu__navBarMobile}>
                <div className={styles.menu__mobileIcon}>
                        sadfas
                    
                </div>
            </div>
        </>   
    )
}