import { useState } from 'react'
import SectionAbout from '../assets/sections/about/aboutSecton'
import SectionHome from '../assets/sections/home/sectionHome'
import SectionProjects from '../assets/sections/projects/projectsSection'
import styles from './main.module.css'

export default function() {
const [decorationColor, setDecorationColor] = useState('#34D6F2')


/*cor original #34D6F2*/

/* use hexToRGBA(hex, alpha, spread) function on components
 to convert hex color to rgba for dynamic shadows*/

    return (
        <main className={styles.main}>
            <div className={styles.colorSelect}>
                <input 
                    type="color"
                    value={decorationColor}
                    onChange={ event => setDecorationColor(event.target.value)}
                />
            </div>
            <SectionHome color={decorationColor} />
            <SectionAbout color={decorationColor} />
            <SectionProjects color={decorationColor}/>
        </main>
    )


}