import { Interface } from "readline"
import styles from "./Porta.module.css"
import PortaModel from "../model/porta"

interface PortaProps {
    value: PortaModel
}

export default function Porta (props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada ? styles.selecionada : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${selecionada}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>
                        {porta.numero}
                    </div>
                    <div className={styles.macaneta}></div>
                </div>
            </div>
            <div className={styles.chao}></div>
        </div>
    )

}