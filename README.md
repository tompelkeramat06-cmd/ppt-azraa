# EduSlide — Oligopoli & Game Theory

Website presentasi interaktif untuk materi Pengantar Ekonomi Mikro, BK 3, Minggu ke-10:
**Oligopoli & Game Theory**.

## Isi
- Oligopoli & saling ketergantungan
- Game Theory
- Pemain, strategi, payoff
- Matriks payoff interaktif
- Prisoner's Dilemma + simulasi
- Nash Equilibrium
- Collusion
- Studi kasus ilustratif Indomie vs Supermi
- Studi kasus interaktif
- Kuis 7 soal
- Refleksi
- Dark mode, fullscreen, progress, text-to-speech

## Cara menjalankan di VS Code
1. Ekstrak ZIP.
2. Buka folder `eduslide-oligopoli` di VS Code.
3. Pastikan `index.html`, `style.css`, dan `script.js` berada di folder utama.
4. Install extension **Live Server** di VS Code.
5. Klik kanan `index.html`.
6. Pilih **Open with Live Server**.
7. Browser akan membuka website.

Alternatif sederhana: klik dua kali `index.html`. Sebagian besar fitur tetap dapat digunakan, tetapi Live Server lebih disarankan.

## Cara presentasi
- Klik **▶ MULAI BELAJAR**.
- `→` atau `Space` = slide berikutnya.
- `←` = slide sebelumnya.
- Tombol `☰` = daftar slide.
- `🔊` = bacakan isi slide.
- `⏹` = hentikan narasi.
- `🌙` = dark/light mode.
- `⛶` = fullscreen.

## Cara publish ke Netlify
Project ini adalah static website dan tidak membutuhkan Node.js/backend.

1. Masuk ke akun Netlify.
2. Pilih opsi untuk menambahkan/deploy project baru secara manual.
3. Upload folder hasil ekstrak `eduslide-oligopoli` (seluruh folder/file-nya, bukan hanya index.html).
4. Tunggu deploy selesai.
5. Netlify akan memberikan URL `*.netlify.app`.
6. Buka URL tersebut untuk menguji dan bagikan ke teman/dosen.

Jika Netlify meminta folder publik/deploy directory, gunakan folder yang berisi `index.html` sebagai root publish directory.

## Mengubah materi
Edit isi slide di `script.js`, pada array `slideData`.
Jangan menghapus fungsi navigasi/kuis jika belum memahami JavaScript.

## Catatan
Contoh "Indomie vs Supermi" dipakai sebagai ilustrasi pembelajaran duopoli. Website sengaja tidak memasukkan klaim pangsa pasar atau angka bisnis yang tidak bersumber.
