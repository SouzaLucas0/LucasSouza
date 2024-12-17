import Menu from '../assets/menu/menu'
import styles from './header.module.css'

export default function Header(){
const logo = 'https://media.licdn.com/dms/image/v2/D4D03AQFw6X0VOHVQCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727109077881?e=1736985600&v=beta&t=5MRfxeHtBH_HBpj_p77DsKtSMVZxPAR1g04c9aMblDs'
const btnList = [
    {
        nome: "Sobre",
        link: "#about"
    },
    {
        nome: "Projetos",
        link: "#projects"
    },
    {
        nome: "Contato",
        link: "#contact"
    }
]
    return (
        <header className={styles.header}>
            <div className={styles.header__bar}>
                <Menu
                    logo= {logo}
                    botao= {btnList}
                />
            </div>            
        </header>
    )
}