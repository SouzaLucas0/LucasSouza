import { hexToRGBA } from '../../functions/hexToRGBA'
import styles from './form.module.css'


export default function Form (props) {
    const colorProject = props.color ? props.color : '#34D6F2'
    const colorShadow = hexToRGBA(colorProject, '0.6')

    return (
        <form className={styles.form}>            
            <div className={styles.form__container}>
                <label className={styles.form__label}>Informe seu nome<br/>
                    <input
                        className={styles.form__input}
                        type='text'
                        required
                    />
                </label>
                <label className={styles.form__label}>Informe seu email<br/>
                    <input
                        className={styles.form__input}
                        type='email'
                        required
                    />
                </label>
            </div>            
            <label className={styles.form__label}>Digite sua mensagem<br/>
                <textarea
                    className={styles.form__input}
                    name="text"
                    id="text"
                    rows='6'
                />
            </label>
            <button 
                type="submit"
                className={styles.form__button}
                style={{backgroundColor:colorProject}}
            >Enviar
            </button>
        </form>
    )
}