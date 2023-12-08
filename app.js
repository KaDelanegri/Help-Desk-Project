const express = require('express');
const exphbs = require('express-handlebars');  // Adicione esta linha
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Configurando o Express Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost/helpdesk', { useNewUrlParser: true, useUnifiedTopology: true });

// Definindo o modelo do Ticket
const Ticket = mongoose.model('Ticket', {
    title: String,
    description: String,
    status: { type: String, default: 'Aberto' },
});

app.get('/', (req, res) => {
    res.render('ticket-form');
});

app.post('/submit-ticket', async (req, res) => {
    try {
        const { title, description } = req.body;
        await Ticket.create({ title, description });
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Erro ao criar o ticket.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

