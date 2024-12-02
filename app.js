const express = require(`express`); // Importiamo il modulo `express` per creare un'applicazione web.
const posts = require("./data"); // Importiamo il file `data.js` che contiene i post.
const app = express(); // Creiamo un'applicazione Express.
const port = 3001; // Definiamo la porta su cui il server ascolterà (3001).

// Creiamo una rotta per la homepage (`/`) che risponde con un messaggio JSON.
app.get(`/`, (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
});

// Creiamo poi una rotta `/bacheca` che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
app.get(`/bacheca`, (req, res) => {
    const result = {
        dolci: posts, 
        totale: posts.length
    }
    res.json(result);
})

// Avviamo il server sull'indirizzo localhost alla porta specificata (3001).
app.listen(port, () => {
    console.log("Server is listenin")
});
