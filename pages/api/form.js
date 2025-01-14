const contatos = []

export default function form (req, res) {
    
    if (req.method === 'POST') {
        post(req, res)
    } else {
        res.status(200).json(contatos)
    }
    
}

function post(req, res) {
    const contato = JSON.parse(req.body)
    contatos.push(contato)
    res.status(200).send()

}
