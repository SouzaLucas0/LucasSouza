import { hexToRGBA, hexToRGBASimple } from '../../functions/hexToRGBA'
import styles from './glassCard.module.css'

export default function GlassCard (props) {
    const cardList = props.cards
    const colorProject = props.color ? props.color : '#34D6F2'
    const colorGlassReflect = 'inset 0 -13px 20px ' + hexToRGBASimple(colorProject, '0.6')
    const dropShadow = 'drop-shadow('+hexToRGBA(colorProject, '0.2')
    const colorShadow = hexToRGBA(colorProject, '0.3', '10px')

    return (
        cardList.map((card, index) => {
            return(                   
                <div className={styles.glassCard1} key={index}>
                    <li className={styles.glassCard2}
                        style={{boxShadow: colorGlassReflect}}
                    >
                        <span className={styles.glassCard__title}
                              style={{
                                color: colorProject,
                                textShadow: colorShadow
                                    }}
                        >{card.title}</span>

                        <span className={styles.glassCard__icon}
                              style={{
                                color: colorProject,
                                filter: dropShadow
                              }}
                        >{card.icon}</span>
                    </li>
                </div>                    
            )
        })      
            
    )
}