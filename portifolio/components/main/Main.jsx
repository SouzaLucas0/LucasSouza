import SectionAbout from '../assets/sections/about/aboutSecton'
import SectionHome from '../assets/sections/home/sectionHome'
import SectionSocialMedias from '../assets/sections/socialMedias/sectionSocialMedias'
import styles from './main.module.css'

export default function() {
const decorationColor = '#34D6F2'

/*cor original #34D6F2*/

/* use hexToRGBA(hex, alpha, spread) function on components
 to convert hex color to rgba for dynamic shadows*/

    return (
        <main className={styles.main}>
            <SectionHome color={decorationColor} />
            <SectionAbout color={decorationColor} />
        </main>
    )
}