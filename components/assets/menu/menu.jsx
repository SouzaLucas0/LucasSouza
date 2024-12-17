import logo from '/public/img/logo.png'
import styles from './menu.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Menu (props) {
    
    const btnList = props.botao
    const [menuOpen, setOpen] = useState(true)
    return(
         <>
            <Image
                src={logo}
                alt="logo do site"
                className={styles.logo}
            />
            
            <div className={`${styles.menu__navBar} ${menuOpen ? styles.open : styles.close }`}>
                {btnList.map((btn, index)=>{
                    return <li key={index}><a href={btn.link}>{btn.nome}</a></li>
                })}
            </div>

            
            <div className={styles.menu__navBarMobile}>
                    <button 
                        className={styles.hamburger}
                        onClick={openMenu}
                    >
                    </button>
            </div>
        </>
    )

    function openMenu() {
        if (menuOpen) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

}