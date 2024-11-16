import styles from './menu.module.css'

export default function Menu (props) {
    const logo = props.logo
    const btnList = props.botao

    return(
         <>
            <img src={logo} alt="logo do site" className={styles.logo}/>             
             
            <div className={styles.menu__navBar}>
                {btnList.map((btn, index)=>{
                    return <li key={index}><a href={btn.link}>{btn.nome}</a></li>
                })}
            </div>
        </>   
    )
}