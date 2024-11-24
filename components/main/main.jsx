import { useState } from 'react'
import SectionAbout from '../assets/sections/about/aboutSecton'
import SectionHome from '../assets/sections/home/sectionHome'
import SectionProjects from '../assets/sections/projects/projectsSection'
import styles from './main.module.css'
import SectionContact from '../assets/sections/contact/contactSection'

export default function() {
const [decorationColor, setDecorationColor] = useState('#00d9ff')


/*cor original #34D6F2*/

/* use hexToRGBA(hex, alpha, spread) function on components
 to convert hex color to rgba for dynamic shadows*/

    return (
        <main className={styles.main}>
            <div className={styles.sideBar}>            
                <div className={styles.colorSelect}>
                    <input
                        className={styles.input}
                        type="color"
                        value={decorationColor}
                        onChange={ event => setDecorationColor(event.target.value)}
                        />
                    <p>Altere a cor do projeto</p>
                </div>
            </div>
            <SectionHome color={decorationColor} />
            <SectionAbout color={decorationColor} />
            <SectionProjects color={decorationColor}/>
            <SectionContact color={decorationColor} />

        </main>
    )


}