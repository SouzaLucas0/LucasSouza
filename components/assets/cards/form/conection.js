export async function sendForm (name, email, message) {
    await fetch('api/form', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            msg: message
        })
    })
}