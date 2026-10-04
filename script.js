const slideData = [
{title:"Cover", html:`<div class="hero-grid"><div><div class="eyebrow">Pengantar Ekonomi Mikro • BK 3 • Minggu 10</div><h1>OLIGOPOLI<br>& GAME THEORY</h1><p class="subtitle">Memahami strategi persaingan dalam pasar oligopoli melalui game theory, payoff, Prisoner's Dilemma, Nash Equilibrium, dan collusion.</p><button class="cta" onclick="goTo(1)">▶ MULAI BELAJAR</button></div><div class="visual"><div class="companies"><div class="company">A</div><div class="company">B</div><div class="company">C</div></div></div></div>`},
{title:"Pertanyaan Pembuka", html:`<div class="content"><div class="eyebrow">01 • Mulai dari pertanyaan</div><h2 class="title">Bagaimana jika hanya ada dua perusahaan besar?</h2><p class="big-quote">“Apakah mereka akan selalu saling menjatuhkan, atau justru bisa memilih strategi yang saling menguntungkan?”</p><div class="grid"><div class="card"><strong>Perusahaan A</strong><p>Harus memikirkan bagaimana B akan merespons setiap keputusan.</p></div><div class="card"><strong>Perusahaan B</strong><p>Juga harus memperkirakan langkah A sebelum menentukan strategi.</p></div></div></div>`},
{title:"Apa Itu Oligopoli?", html:`<div class="content"><div class="eyebrow">02 • Struktur pasar</div><h2 class="title">Apa itu Oligopoli?</h2><p class="subtitle">Oligopoli adalah struktur pasar yang terdiri dari beberapa perusahaan yang menguasai sebagian besar pasar.</p><div class="flow"><div class="node">Beberapa perusahaan</div><div class="arrow">→</div><div class="node">Menguasai pasar</div><div class="arrow">→</div><div class="node">Saling memperhatikan</div></div><div class="card"><strong>Inti konsep</strong><p>Dalam oligopoli, tindakan satu perusahaan dapat memengaruhi keputusan dan hasil yang dihadapi perusahaan lain.</p></div></div>`},
{title:"Saling Ketergantungan", html:`<div class="content"><div class="eyebrow">03 • Interdependensi</div><h2 class="title">Mengapa perusahaan saling memperhatikan?</h2><div class="flow"><div class="node">A mengubah harga</div><div class="arrow">→</div><div class="node">B merespons</div><div class="arrow">→</div><div class="node">A mengevaluasi</div><div class="arrow">→</div><div class="node">Pasar berubah</div></div><p class="big-quote">Keputusan perusahaan tidak berdiri sendiri. Strategi pesaing ikut menentukan hasil yang diperoleh.</p></div>`},
{title:"Game Theory", html:`<div class="content"><div class="eyebrow">04 • Alat analisis</div><h2 class="title">Game Theory</h2><p class="subtitle">Game theory menganalisis bagaimana pihak-pihak mengambil keputusan ketika hasil keputusan masing-masing dipengaruhi oleh keputusan pihak lain.</p><div class="grid three"><div class="card"><strong>👥 Pemain</strong><p>Perusahaan atau pihak yang mengambil keputusan.</p></div><div class="card"><strong>🎯 Strategi</strong><p>Pilihan tindakan yang tersedia bagi setiap pemain.</p></div><div class="card"><strong>🏆 Payoff</strong><p>Hasil atau keuntungan yang diterima dari kombinasi strategi.</p></div></div></div>`},
{title:"Pemain & Strategi", html:`<div class="content"><div class="eyebrow">05 • Menentukan pilihan</div><h2 class="title">Pemain dan Strategi</h2><div class="grid"><div class="card"><strong>PERUSAHAAN A</strong><p>Strategi 1: Harga Tinggi<br>Strategi 2: Harga Rendah</p></div><div class="card"><strong>PERUSAHAAN B</strong><p>Strategi 1: Harga Tinggi<br>Strategi 2: Harga Rendah</p></div></div><p class="note">Setiap perusahaan memilih strategi dengan mempertimbangkan kemungkinan respons pesaing.</p></div>`},
{title:"Matriks Payoff", html:`<div class="content"><div class="eyebrow">06 • Interaktif</div><h2 class="title">Matriks Payoff</h2><p class="subtitle">Angka pertama = payoff Perusahaan A. Angka kedua = payoff Perusahaan B. Klik salah satu kotak.</p><table class="payoff"><tr><th></th><th>B: Harga Tinggi</th><th>B: Harga Rendah</th></tr><tr><th>A: Harga Tinggi</th><td data-info="Keduanya memilih harga tinggi. Payoff A = 5, B = 5.">5, 5</td><td data-info="A tetap tinggi, B rendah. B mendapat payoff lebih besar.">2, 7</td></tr><tr><th>A: Harga Rendah</th><td data-info="A rendah, B tinggi. A mendapat payoff lebih besar.">7, 2</td><td data-info="Keduanya rendah. Payoff A = 3, B = 3.">3, 3</td></tr></table><div id="payoffInfo" class="result">Klik sel untuk melihat penjelasan.</div></div>`},
{title:"Prisoner's Dilemma", html:`<div class="content"><div class="eyebrow">07 • Konflik strategi</div><h2 class="title">Prisoner's Dilemma</h2><p class="subtitle">Prisoner's Dilemma menggambarkan situasi ketika pilihan yang rasional bagi masing-masing pihak dapat menghasilkan hasil bersama yang kurang baik dibandingkan jika mereka bekerja sama.</p><div class="grid"><div class="card"><strong>🤝 Kerja Sama</strong><p>Kedua perusahaan menahan diri dari persaingan agresif.</p></div><div class="card"><strong>⚔️ Kompetisi</strong><p>Masing-masing mengejar kepentingan sendiri dan dapat memicu respons pesaing.</p></div></div></div>`},
{title:"Simulasi Prisoner's Dilemma", html:`<div class="content"><div class="eyebrow">08 • Mini game</div><h2 class="title">Kamu adalah Perusahaan A</h2><p class="subtitle">Pilih strategi. Sistem akan menentukan respons Perusahaan B secara acak untuk simulasi.</p><div class="choice-row"><button class="choice" onclick="dilemma('coop')">🤝 KERJA SAMA</button><button class="choice" onclick="dilemma('compete')">⚔️ MENURUNKAN HARGA</button></div><div id="dilemmaResult" class="result"></div></div>`},
{title:"Nash Equilibrium", html:`<div class="content"><div class="eyebrow">09 • Keseimbangan</div><h2 class="title">Nash Equilibrium</h2><p class="subtitle">Nash Equilibrium adalah kondisi ketika setiap pemain memilih strategi terbaik berdasarkan strategi pemain lain, sehingga tidak ada pemain yang memperoleh keuntungan dengan mengubah strateginya sendiri.</p><div class="flow"><div class="node">Strategi A</div><div class="arrow">↔</div><div class="node">Strategi B</div><div class="arrow">→</div><div class="node">Kondisi stabil</div></div><div class="card"><strong>Cara berpikir</strong><p>Tanyakan: “Jika pesaing mempertahankan strateginya, apakah saya punya alasan untuk mengubah strategi saya?”</p></div></div>`},
{title:"Mencari Nash Equilibrium", html:`<div class="content"><div class="eyebrow">10 • Langkah analisis</div><h2 class="title">Cara Menemukan Nash Equilibrium</h2><div class="grid"><div class="card"><strong>01</strong><p>Lihat pilihan strategi Perusahaan B.</p></div><div class="card"><strong>02</strong><p>Cari respons terbaik Perusahaan A.</p></div><div class="card"><strong>03</strong><p>Lihat respons terbaik Perusahaan B.</p></div><div class="card"><strong>04</strong><p>Cari titik ketika kedua pemain memilih respons terbaik.</p></div></div><p class="note">Titik yang memenuhi kondisi tersebut merupakan kandidat Nash Equilibrium.</p></div>`},
{title:"Collusion", html:`<div class="content"><div class="eyebrow">11 • Koordinasi</div><h2 class="title">Collusion</h2><p class="subtitle">Collusion adalah kesepakatan atau koordinasi antarperusahaan untuk mengurangi persaingan, misalnya melalui kesepakatan harga atau jumlah produksi.</p><div class="flow"><div class="node">Perusahaan A</div><div class="arrow">🤝</div><div class="node">Perusahaan B</div></div><div class="grid"><div class="card"><strong>Potensi keuntungan</strong><p>Harga atau keuntungan dapat lebih tinggi ketika persaingan dikurangi.</p></div><div class="card"><strong>Risiko</strong><p>Kesepakatan dapat sulit dipertahankan dan dapat menimbulkan persoalan persaingan usaha.</p></div></div></div>`},
{title:"Studi Kasus Duopoli", html:`<div class="content"><div class="eyebrow">12 • Studi kasus pembelajaran</div><h2 class="title">Indomie vs Supermi</h2><p class="subtitle">Gunakan contoh dua merek ini sebagai ilustrasi pembelajaran tentang strategi dalam duopoli—bukan sebagai klaim tentang pangsa pasar atau data bisnis tertentu.</p><div class="grid"><div class="card"><strong>INDOMIE</strong><p>Mempertimbangkan harga, promosi, dan respons pesaing.</p></div><div class="card"><strong>SUPERMI</strong><p>Mempertimbangkan strategi sendiri sekaligus reaksi pesaing.</p></div></div><p class="big-quote">Pertanyaan kuncinya: “Jika saya melakukan X, apa kemungkinan respons pesaing?”</p></div>`},
{title:"Studi Kasus Interaktif", html:`<div class="content"><div class="eyebrow">13 • Ambil keputusan</div><h2 class="title">Perusahaan A memberikan diskon.</h2><p class="subtitle">Apa yang sebaiknya dilakukan Perusahaan B?</p><div class="choice-row"><button class="choice" onclick="caseStudy('ignore')">A. Tidak melakukan apa-apa</button><button class="choice" onclick="caseStudy('follow')">B. Ikut memberikan diskon</button><button class="choice" onclick="caseStudy('raise')">C. Menaikkan harga</button></div><div id="caseResult" class="result"></div></div>`},
{title:"Kesimpulan", html:`<div class="content"><div class="eyebrow">14 • Ringkasan</div><h2 class="title">Yang Harus Kamu Ingat</h2><div class="grid"><div class="card"><strong>01</strong><p>Oligopoli terdiri dari beberapa perusahaan utama.</p></div><div class="card"><strong>02</strong><p>Perusahaan saling bergantung dalam pengambilan keputusan.</p></div><div class="card"><strong>03</strong><p>Game theory membantu menganalisis strategi.</p></div><div class="card"><strong>04</strong><p>Payoff menunjukkan hasil kombinasi strategi.</p></div><div class="card"><strong>05</strong><p>Prisoner's Dilemma menunjukkan konflik kepentingan individu dan hasil bersama.</p></div><div class="card"><strong>06</strong><p>Nash Equilibrium menggambarkan kondisi strategi yang stabil.</p></div></div></div>`},
{title:"Kuis", html:`<div class="content"><div class="eyebrow">15 • Uji pemahaman</div><h2 class="title">Kuis Interaktif</h2><div id="quiz"></div></div>`},
{title:"Refleksi", html:`<div class="content"><div class="eyebrow">16 • Penutup</div><h2 class="title">Sekarang coba pikirkan...</h2><p class="big-quote">Jika kamu menjadi manajer sebuah perusahaan dalam pasar oligopoli, strategi apa yang akan kamu pilih?</p><div class="choice-row"><button class="choice" onclick="reflect('aggressive')">STRATEGI AGRESIF</button><button class="choice" onclick="reflect('defensive')">STRATEGI BERTAHAN</button><button class="choice" onclick="reflect('cooperative')">STRATEGI KERJA SAMA</button></div><div id="reflectResult" class="result"></div></div>`},
{title:"Selesai", html:`<div class="content" style="text-align:center"><div class="eyebrow">17 • Selesai</div><h2 class="title">Selamat! 🎓</h2><p class="subtitle" style="margin:auto">Kamu telah menyelesaikan materi Oligopoli & Game Theory. Gunakan konsep payoff, Prisoner's Dilemma, Nash Equilibrium, dan collusion untuk menganalisis strategi perusahaan.</p><button class="cta" onclick="goTo(0)">↺ Ulangi Presentasi</button></div>`}
];

let current=0;
const slidesEl=document.getElementById('slides');
const menuEl=document.getElementById('slideMenu');
slideData.forEach((s,i)=>{
  const el=document.createElement('section'); el.className='slide'; el.innerHTML=s.html; slidesEl.appendChild(el);
  const b=document.createElement('button'); b.textContent=String(i+1).padStart(2,'0')+'  '+s.title; b.onclick=()=>goTo(i); menuEl.appendChild(b);
});
const slides=[...document.querySelectorAll('.slide')], menuBtns=[...menuEl.children];

function goTo(i){
  current=Math.max(0,Math.min(slides.length-1,i));
  slides.forEach((s,n)=>s.classList.toggle('active',n===current));
  menuBtns.forEach((b,n)=>b.classList.toggle('active',n===current));
  document.getElementById('counter').textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
  document.getElementById('slideTitle').textContent=slideData[current].title;
  document.getElementById('progressBar').style.width=((current+1)/slides.length*100)+'%';
  localStorage.setItem('eduSlideProgress',current);
  closeDrawer();
  if(current===14) renderQuiz();
}
function next(){goTo(current+1)}
function prev(){goTo(current-1)}
document.getElementById('nextBtn').onclick=next;
document.getElementById('prevBtn').onclick=prev;
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key===' ') {e.preventDefault();next()}
  if(e.key==='ArrowLeft'){e.preventDefault();prev()}
  if(e.key==='Escape') document.body.classList.remove('presenting');
});

const drawer=document.getElementById('drawer'),overlay=document.getElementById('overlay');
function openDrawer(){drawer.classList.add('open');overlay.classList.add('show')}
function closeDrawer(){drawer.classList.remove('open');overlay.classList.remove('show')}
document.getElementById('menuBtn').onclick=openDrawer; document.getElementById('closeMenu').onclick=closeDrawer; overlay.onclick=closeDrawer;

document.getElementById('themeBtn').onclick=()=>{
 document.body.classList.toggle('light');
 localStorage.setItem('eduSlideTheme',document.body.classList.contains('light')?'light':'dark');
 document.getElementById('themeBtn').textContent=document.body.classList.contains('light')?'☀️':'🌙';
};
if(localStorage.getItem('eduSlideTheme')==='light'){document.body.classList.add('light');document.getElementById('themeBtn').textContent='☀️'}

document.getElementById('fullscreenBtn').onclick=async()=>{
 if(!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
 else await document.exitFullscreen?.();
};

function speak(){
 speechSynthesis.cancel();
 const text=slides[current].innerText;
 const u=new SpeechSynthesisUtterance(text); u.lang='id-ID'; u.rate=.95; speechSynthesis.speak(u);
}
document.getElementById('speakBtn').onclick=speak;
document.getElementById('stopSpeakBtn').onclick=()=>speechSynthesis.cancel();

document.addEventListener('click',e=>{
 if(e.target.matches('.payoff td')){
  document.querySelectorAll('.payoff td').forEach(x=>x.classList.remove('selected'));
  e.target.classList.add('selected');
  const box=document.getElementById('payoffInfo'); box.textContent=e.target.dataset.info; box.classList.add('show');
 }
});

function dilemma(choice){
 const b=Math.random()<.5?'coop':'compete';
 let aPay,bPay,text;
 if(choice==='coop'&&b==='coop'){aPay=5;bPay=5;text='Keduanya bekerja sama. Hasil bersama relatif lebih baik.'}
 if(choice==='coop'&&b==='compete'){aPay=2;bPay=7;text='Kamu bekerja sama, tetapi B memilih kompetisi. B memperoleh payoff lebih besar.'}
 if(choice==='compete'&&b==='coop'){aPay=7;bPay=2;text='Kamu memilih kompetisi saat B bekerja sama. Kamu memperoleh payoff lebih besar.'}
 if(choice==='compete'&&b==='compete'){aPay=3;bPay=3;text='Keduanya memilih kompetisi. Masing-masing mendapat payoff 3.'}
 const box=document.getElementById('dilemmaResult'); box.innerHTML=`<strong>Hasil simulasi</strong><br>Perusahaan B memilih: <b>${b==='coop'?'KERJA SAMA':'KOMPETISI'}</b><br>Payoff A = ${aPay} • Payoff B = ${bPay}<br><br>${text}`; box.classList.add('show');
}
function caseStudy(choice){
 const msg={
  ignore:'Tidak ada respons langsung. Strategi ini bisa menjaga harga tetapi berisiko kehilangan sebagian konsumen jika pesaing menarik konsumen dengan diskon.',
  follow:'Ikut memberikan diskon dapat mempertahankan daya saing, tetapi dapat memicu persaingan harga. Dalam game theory, B perlu memperkirakan respons lanjutan A.',
  raise:'Menaikkan harga saat pesaing memberi diskon berpotensi membuat produk relatif lebih mahal. Keputusan harus didasarkan pada tujuan dan kondisi pasar.'
 }[choice];
 const box=document.getElementById('caseResult'); box.innerHTML=`<strong>Analisis:</strong> ${msg}`; box.classList.add('show');
}
function reflect(x){
 const msg={aggressive:'Strategi agresif dapat meningkatkan tekanan kompetitif, tetapi harus memperhitungkan respons pesaing.',defensive:'Strategi bertahan berfokus menjaga posisi dan mengurangi risiko, sambil tetap memantau langkah pesaing.',cooperative:'Strategi kerja sama dapat mengurangi persaingan, tetapi harus memperhatikan aturan persaingan usaha dan keberlanjutan kesepakatan.'}[x];
 const box=document.getElementById('reflectResult'); box.innerHTML=msg; box.classList.add('show');
}

const questions=[
 {q:'Pasar oligopoli ditandai oleh...',a:['Satu penjual','Beberapa perusahaan utama','Tidak ada penjual','Jutaan penjual kecil'],c:1,e:'Oligopoli memiliki beberapa perusahaan yang menguasai sebagian besar pasar.'},
 {q:'Dalam game theory, payoff berarti...',a:['Jumlah pesaing','Hasil/keuntungan dari kombinasi strategi','Nama perusahaan','Jenis pasar'],c:1,e:'Payoff adalah hasil yang diterima pemain dari kombinasi keputusan.'},
 {q:'Prisoner’s Dilemma menggambarkan...',a:['Selalu ada kerja sama','Konflik antara kepentingan individu dan hasil bersama','Pasar tanpa pesaing','Keseimbangan sempurna'],c:1,e:'Konsep ini menunjukkan bagaimana keputusan rasional individu dapat menghasilkan hasil bersama yang kurang baik.'},
 {q:'Nash Equilibrium terjadi ketika...',a:['Semua perusahaan rugi','Tidak ada pemain yang memperoleh keuntungan dengan mengubah strategi sendiri berdasarkan strategi pemain lain','Hanya satu pemain yang memilih','Harga selalu sama'],c:1,e:'Nash Equilibrium adalah kondisi strategi yang stabil terhadap perubahan sepihak.'},
 {q:'Collusion adalah...',a:['Koordinasi antarperusahaan untuk mengurangi persaingan','Persaingan tanpa strategi','Masuknya perusahaan baru','Penurunan permintaan'],c:0,e:'Collusion merupakan kesepakatan/koordinasi yang mengurangi persaingan.'},
 {q:'Mengapa perusahaan oligopoli saling memperhatikan?',a:['Karena keputusan satu perusahaan dapat memengaruhi perusahaan lain','Karena tidak ada konsumen','Karena tidak ada strategi','Karena semua perusahaan sama'],c:0,e:'Saling ketergantungan strategis adalah ciri penting oligopoli.'},
 {q:'Dalam matriks payoff, pasangan (7,2) biasanya berarti...',a:['A mendapat 2, B mendapat 7','A mendapat 7, B mendapat 2','Keduanya mendapat 7','Keduanya mendapat 2'],c:1,e:'Angka pertama mewakili payoff A dan angka kedua payoff B.'}
];
let quizIndex=0,score=0;
function renderQuiz(){
 const q=questions[quizIndex], el=document.getElementById('quiz'); if(!el)return;
 el.innerHTML=`<div class="card"><strong>Soal ${quizIndex+1} dari ${questions.length}</strong><h3>${q.q}</h3><div>${q.a.map((x,i)=>`<button class="choice quiz-option" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${x}</button>`).join('')}</div><div id="quizResult" class="result"></div></div>`;
}
function answerQuiz(i){
 const q=questions[quizIndex], box=document.getElementById('quizResult');
 const ok=i===q.c; if(ok)score++;
 box.innerHTML=`<strong class="${ok?'success':'danger'}">${ok?'✓ BENAR':'✕ SALAH'}</strong><br>${q.e}`;
 box.classList.add('show');
 setTimeout(()=>{
   quizIndex++;
   if(quizIndex<questions.length) renderQuiz();
   else {
     const pct=Math.round(score/questions.length*100);
     document.getElementById('quiz').innerHTML=`<div class="card" style="text-align:center"><div class="eyebrow">Hasil Kuis</div><div class="score">${pct}</div><p class="subtitle" style="margin:auto">${pct>=80?'Mantap! Pemahamanmu sudah sangat baik.':pct>=60?'Bagus! Tinggal review beberapa konsep.':'Yuk review lagi materi dan coba kuis sekali lagi.'}</p><button class="cta" onclick="quizIndex=0;score=0;renderQuiz()">↺ ULANGI KUIS</button></div>`;
   }
 },900);
}
goTo(Number(localStorage.getItem('eduSlideProgress')||0));
