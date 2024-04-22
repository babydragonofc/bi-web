const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    if (email === 'usuario@exemplo.com' && senha === 'senha123') {
        res.redirect('');
    } else {
        res.send('E-mail ou senha incorretos.');
    }
});

app.post('/criar-conta', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const senha = req.body.senha;

    // Aqui você pode implementar a lógica para criar uma nova conta com os dados fornecidos
    // Por enquanto, apenas para demonstração, vamos imprimir os dados recebidos
    console.log("Nome de usuário:", username);
    console.log("E-mail:", email);
    console.log("Senha:", senha);

    // Envie uma resposta para indicar que a conta foi criada com sucesso
    res.send('Conta criada com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
