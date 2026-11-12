document.addEventListener('DOMContentLoaded',()=>{
 const hamb=document.getElementById('hamb'),nav=document.getElementById('nav');
 if(hamb&&nav)hamb.addEventListener('click',()=>nav.classList.toggle('open'));
 const el=id=>document.getElementById(id);
 if(el('test'))el('test').onclick=()=>{const v=+el('solution').value;el('phresult').textContent=`pH ${v} — ${v<7?'Asam':v>7?'Basa':'Netral'}. ${v<7?'Konsentrasi H⁺ relatif lebih besar.':v>7?'Konsentrasi OH⁻ relatif lebih besar.':'Konsentrasi H⁺ dan OH⁻ sama.'}`;el('swatch').style.background=`hsl(${300-v*19},75%,65%)`};
 if(el('observe'))el('observe').onclick=()=>{const i=el('indicator').value,c=el('condition').value;let r='';if(i==='litmus')r=c==='acid'?'Lakmus biru menjadi merah.':c==='base'?'Lakmus merah menjadi biru.':'Tidak ada perubahan khas.';if(i==='pp')r=c==='base'?'Fenolftalein menjadi merah muda.':'Fenolftalein tetap tidak berwarna.';if(i==='btb')r=c==='acid'?'BTB berwarna kuning.':c==='base'?'BTB berwarna biru.':'BTB berwarna hijau.';el('indicatorresult').textContent=r};
 document.querySelectorAll('.challenge').forEach(b=>b.onclick=()=>{const r=el('challengeresult');if(r)r.textContent=b.dataset.v==='acid'?'Benar! Air jeruk umumnya bersifat asam.':'Belum tepat. Air jeruk umumnya bersifat asam.'});
 if(el('check'))el('check').onclick=()=>{const a={q1:'b',q2:'a',q3:'b',q4:'b',q5:'a'};let s=0,n=0;Object.keys(a).forEach(k=>{const v=document.querySelector(`input[name=${k}]:checked`);if(v){n++;if(v.value===a[k])s++}});el('score').innerHTML=`<b>Skor: ${s*20}/100</b><br>Jawaban terisi: ${n}/5<br>1. Asam Arrhenius menghasilkan H⁺.<br>2. pH di bawah 7 bersifat asam.<br>3. Basa Brønsted-Lowry menerima proton.<br>4. Kw = 10⁻¹⁴ pada 25°C.<br>5. Asam lemah dan basa konjugasinya membentuk larutan penyangga asam.`};
 if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise();
});
