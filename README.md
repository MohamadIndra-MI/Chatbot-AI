Panduan Penggunaan Chatbot AI Sederhana Anda
Selamat! Chatbot AI Anda kini sudah berfungsi penuh dengan tampilan yang lebih menarik. Berikut adalah panduan langkah demi langkah untuk menggunakannya.
1.	Memulai Chatbot
Sebelum Anda bisa menggunakan chatbot, Anda perlu menjalankan dua komponen utamanya: Ollama (yang menjalankan model AI) dan Server Node.js (yang menjadi jembatan antara browser dan Ollama).
  1.	Pastikan Ollama Berjalan:
    •	Cari ikon aplikasi Ollama di system tray (Windows) atau menu bar (macOS). Pastikan statusnya aktif.
    •	Verifikasi (Opsional): Buka browser Anda dan kunjungi http://localhost:11434. Anda seharusnya melihat tulisan "ollama is running". Jika tidak, mulai ulang aplikasi Ollama Anda.
  2.	Jalankan Server Node.js:
    •	Buka terminal atau Command Prompt di komputer Anda.
    •	Navigasi ke direktori proyek chatbot Anda (misalnya D:\Tes Kerja\chatbot-ai). Gunakan perintah cd:
    Bash
    cd D:\Tes Kerja\chatbot-ai
    •	Jalankan server Node.js dengan perintah:
    Bash
    node server.js
    •	Anda akan melihat pesan seperti:
    Server berjalan di http://localhost:3001
    Buka http://localhost:3001 di browser Anda untuk menggunakan chatbot.
    •	Jangan tutup terminal ini selama Anda ingin menggunakan chatbot, karena ini adalah server yang mengelola komunikasi.
  3.	Buka Chatbot di Browser:
    •	Buka browser web Anda (Google Chrome, Mozilla Firefox, Microsoft Edge, dll.).
    •	Ketik alamat yang tertera di terminal Anda (biasanya http://localhost:3001) dan tekan Enter.

2.	Berinteraksi dengan Chatbot
Setelah chatbot terbuka di browser, Anda akan melihat antarmuka obrolan yang sederhana.
  1.	Melihat Pesan Selamat Datang:
    •	Pertama kali Anda membuka chatbot, Anda akan melihat pesan selamat datang dari bot, seperti "Halo! Ada yang bisa saya bantu?".
  2.	Mengirim Pesan ke Bot:
    •	Di bagian bawah antarmuka obrolan, Anda akan melihat kotak teks dengan placeholder "Ketik pesan Anda...".
    •	Ketik pertanyaan atau pesan Anda di kotak teks tersebut.
    •	Tekan tombol "Kirim" di sebelah kotak teks, atau cukup tekan tombol Enter pada keyboard Anda.
  3.	Menerima Balasan dari Bot:
    •	Setelah Anda mengirim pesan, Anda akan melihat pesan Anda muncul di kotak obrolan.
    •	Segera setelah itu, akan muncul indikator "Memproses pesan Anda...", menandakan bahwa bot sedang memikirkan balasannya.
    •	Dalam beberapa detik (tergantung pada kinerja komputer Anda dan kompleksitas pertanyaan), balasan dari AI akan muncul di bawah pesan Anda.
  4.	Melanjutkan Percakapan:
    •	Anda bisa terus mengetik dan mengirim pesan untuk melanjutkan percakapan dengan bot. Bot (model Llama 3 yang Anda gunakan) akan berusaha memahami konteks percakapan.
3.	Menghentikan Chatbot
Untuk menghentikan chatbot agar tidak lagi berjalan:
  1.	Tutup Tab Browser: Anda bisa menutup tab atau jendela browser tempat chatbot terbuka. Ini akan menghentikan tampilan frontend, tetapi server Node.js masih akan berjalan di latar belakang.
  2.	Hentikan Server Node.js:
    •	Kembali ke terminal atau Command Prompt tempat Anda menjalankan node server.js.
    •	Tekan Ctrl + C (tekan tombol Control dan huruf C secara bersamaan).
    •	Anda akan melihat beberapa baris teks di terminal, dan kursor akan kembali ke prompt, menandakan server sudah berhenti.
  3.	Hentikan Ollama (Opsional):
    •	Jika Anda tidak ingin Ollama berjalan di latar belakang lagi, Anda bisa menutup aplikasi Ollama dari system tray atau menu bar Anda.
