import Menu from '../assets/menu/menu'
import styles from './footer.module.css'

export default function Footer() {
    const logo = 'https://media.licdn.com/dms/image/v2/D4D03AQFw6X0VOHVQCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727109077881?e=1736985600&v=beta&t=5MRfxeHtBH_HBpj_p77DsKtSMVZxPAR1g04c9aMblDs'
    const btnList = [
    {
        nome: "Home",
        link: "#home"
    },
    {
        nome: "Projetos",
        link: "#projects"
    },
    {
        nome: "Sobre",
        link: "#about"
    }
]

    return (
        <footer className={styles.footer}>
             <div className={styles.footer__bar}>
                <Menu
                    logo= {logo}
                    botao= {btnList}
                />
                <a className={styles.footer__link} href="https://www.linkedin.com/in/souzalucas0/" target="_blank">
                Desenvolvido por <strong>Lucas Souza</strong>
                </a>
            </div>
        </footer>
    )
}