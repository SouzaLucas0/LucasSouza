import Menu from '../assets/menu/Menu'
import styles from './header.module.css'

export default function Header(){
const logo = 'https://media.licdn.com/dms/image/v2/D4D03AQFw6X0VOHVQCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727109077881?e=1736985600&v=beta&t=5MRfxeHtBH_HBpj_p77DsKtSMVZxPAR1g04c9aMblDs'
const btnList = [
    {
        nome: "Sobre",
        link: "#sobre"
    },
    {
        nome: "Projetos",
        link: "#projetos"
    },
    {
        nome: "Contato",
        link: "#contato"
    }
]
    return (
        <header className={styles.header}>
            <Menu 
                logo= {logo}
                botao= {btnList}
            />
        </header>
    )
}