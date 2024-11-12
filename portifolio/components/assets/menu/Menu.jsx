import styles from './menu.module.css'

export default function Menu (props) {
    const logo = props.logo
    const btnList = props.botao

    return(
        <>           
        {/*<img src={logo} alt="logo do site" />*/}

            <div>
                {btnList.map((btn, i)=>{
                    return <li key={i}><a href={btn.link}>{btn.nome}</a></li>
                })}
            </div>
        </>        
    )
}