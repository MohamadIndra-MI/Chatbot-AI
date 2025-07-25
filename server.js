const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Mengganti 'ollama' dengan 'axios'

const app = express();
const port = 3001;
const ollamaApiUrl = 'http://127.0.0.1:11434/api/generate'; // Ubah localhost ke 127.0.0.1 // Endpoint Ollama API untuk generate
// Atau jika Anda ingin menggunakan endpoint chat yang lebih baru (membutuhkan format pesan berbeda):
// const ollamaApiUrl = 'http://localhost:11434/api/chat'; 


app.use(bodyParser.json());
app.use(express.static(__dirname)); 

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;
    console.log(`Pesan dari pengguna: ${userMessage}`);

    try {
        // --- Integrasi dengan Ollama menggunakan Axios ---
        const ollamaResponse = await axios.post(ollamaApiUrl, {
            model: 'llama3', // !!! Pastikan ini adalah nama model yang sudah Anda pull di Ollama !!!
            prompt: userMessage, // Menggunakan 'prompt' untuk /api/generate
            stream: false // Pastikan ini false agar kita mendapatkan seluruh balasan sekaligus
        });

        // Parsing balasan dari Ollama (formatnya mungkin perlu disesuaikan jika pakai /api/chat)
        const botReply = ollamaResponse.data.response; // Untuk /api/generate

        /*
        // Jika Anda menggunakan ollamaApiUrl = 'http://localhost:11434/api/chat', gunakan ini:
        const ollamaChatResponse = await axios.post(ollamaApiUrl, {
            model: 'llama3', 
            messages: [{ role: 'user', content: userMessage }],
            stream: false
        });
        const botReply = ollamaChatResponse.data.message.content;
        */

        console.log(`Balasan dari Ollama: ${botReply}`);
        res.json({ reply: botReply });

    } catch (error) {
        console.error('Error saat berkomunikasi dengan Ollama:', error.message);
        // Detail error dari respons Axios (jika ada)
        if (error.response) {
            console.error('Data error dari Ollama:', error.response.data);
            console.error('Status error dari Ollama:', error.response.status);
        }
        res.status(500).json({ reply: 'Maaf, terjadi kesalahan internal pada server saat berkomunikasi dengan AI.' });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
    console.log(`Buka http://localhost:${port} di browser Anda untuk menggunakan chatbot.`);
});