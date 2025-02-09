import styles from './projectCard.module.css'

export default function ProjectCard(props) {
    const projecList = props.projects
    

    return (
        projecList.map((projec, index) => {
            return (
                <li data-aos="zoom-in" key={index} className={styles.projectCard__item}
                    style={{backgroundImage: `url(${projec.img}`}}>
                    <a href={projec.link} target='_blank' className={styles.projectCard__link}>                        
                    </a>
                    <span className={styles.projectCard__title}>
                            {projec.title}
                    </span>
                </li>
            )
        })
    )
}