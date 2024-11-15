import SectionHome from '../assets/sections/home/sectionHome'
import SectionSocialMedias from '../assets/sections/socialMedias/sectionSocialMedias'
import styles from './main.module.css'

export default function() {
const decorationColor = '#34D6F2'

    return (
        <main className={styles.main}>            
            <SectionHome color= {decorationColor}/>
        </main>
    )
}