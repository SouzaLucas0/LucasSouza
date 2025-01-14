import { useState } from 'react'
import { hexToRGBASimple } from '../../functions/hexToRGBA'
import styles from './form.module.css'
import { sendForm } from './conection'


export default function Form (props) {
    const colorProject = props.color ? props.color : '#34D6F2'
    const colorGlassReflect = 'inset -4px 0 10px ' + hexToRGBASimple(colorProject, '0.6')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className={styles.form__glass}>
            <form
                className={styles.form}
                style={{boxShadow: colorGlassReflect}}
            >
                <div className={styles.form__container}>
                    <label className={styles.form__label}>Informe seu nome<br/>
                        <input
                            className={styles.form__input}
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className={styles.form__label}>Informe seu email<br/>
                        <input
                            className={styles.form__input}
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required
                    />
                </label>
                <button
                    className={styles.form__button}
                    style={{backgroundColor:colorProject}}
                    onClick={e => {
                        e.preventDefault();
                        sendForm(name, email, message)
                    }}
                >Enviar
                </button>
            </form>
        </div>
    )    
}