import ProjectCard from '../../cards/projecCard/projectCard'
import { hexToRGBASimple } from '../../functions/hexToRGBA'
import styles from './projectsSection.module.css'

export default function SectionProjects (props) {
    const projectList = [{
        title: 'RealStore',
        link: 'https://real-store-ahas9vhu0-souzalucas0.vercel.app/',
        img: './img/bgReralStore.png'
        },{
            title: 'RealStore',
            link: 'https://real-store-ahas9vhu0-souzalucas0.vercel.app/',
            img: './img/bgReralStore.png'
        },{
            title: 'RealStore',
            link: 'https://real-store-ahas9vhu0-souzalucas0.vercel.app/',
            img: './img/bgReralStore.png'
        },{
            title: 'RealStore',
            link: 'https://real-store-ahas9vhu0-souzalucas0.vercel.app/',
            img: './img/bgReralStore.png'
        }
    ]
    const colorProject = hexToRGBASimple(props.color, '0.7')

    return (
        <section id='projects' className={styles.projects}>
            <div className={styles.projects__bgModifier}
                style={{backgroundColor: colorProject}}
            >
                <h4 className={styles.projectList__title}>
                    Projetos recentes
                </h4>
                <div className={styles.projects__list}>
                    <ProjectCard projects = {projectList}/>
                </div>
            </div>
        </section>
    )
}