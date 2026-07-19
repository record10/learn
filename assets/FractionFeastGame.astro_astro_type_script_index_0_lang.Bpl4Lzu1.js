import{n as e}from"./gameSounds.NIc3mBjX.js";import{t}from"./progress.CXJr4Kgm.js";var n=class{container;questions;currentIndex=0;constructor(e){this.container=e,this.questions=JSON.parse(e.dataset.questions||`[]`),this.init()}init(){document.addEventListener(`celebration-next`,()=>{window.location.href=this.container.dataset.nextUrl||`/builders/`}),this.loadQuestion()}loadQuestion(){if(this.currentIndex>=this.questions.length){this.finishGame();return}let e=this.questions[this.currentIndex];this.updateCounter(),this.renderVisual(e),this.renderOptions(e);let t=document.getElementById(`feedback-msg`);t&&(t.textContent=``)}updateCounter(){let e=document.getElementById(`question-counter`);e&&(e.textContent=(this.currentIndex+1).toString())}renderVisual(e){let t=document.getElementById(`visual-container`);if(!t)return;let[n,r]=e.fraction.split(`/`).map(Number);e.visualType===`pie`?t.innerHTML=this.createPieChart(n,r):t.innerHTML=this.createBarChart(n,r)}createPieChart(e,t){let n=e/t*360;return`
         <div class="w-40 h-40 rounded-full border-4 border-zinc-200 dark:border-zinc-700 relative overflow-hidden shadow-inner bg-zinc-100 dark:bg-slate-800"
              style="background-image: conic-gradient(#10b981 0deg ${n}deg, transparent ${n}deg 360deg)">
             ${Array.from({length:t},(e,n)=>`<div class="absolute top-0 left-1/2 w-0.5 h-1/2 bg-black/10 dark:bg-white/10 origin-bottom" style="transform: translateX(-50%) rotate(${360/t*n}deg)"></div>`).join(``)}
            <div class="absolute inset-0 border-4 border-white/20 rounded-full pointer-events-none"></div>
         </div>
         <div class="mt-4 text-center font-bold text-zinc-400">Pie Chart</div>
       `}createBarChart(e,t){return`
         <div class="w-64 h-16 border-4 border-zinc-200 dark:border-zinc-700 rounded-xl relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <div class="h-full bg-green-500 transition-all duration-500" style="width: ${e/t*100}%"></div>
            <div class="absolute inset-0 flex">
               ${Array(t).fill(0).map(()=>`<div class="flex-1 border-r border-zinc-300/50 last:border-0"></div>`).join(``)}
            </div>
         </div>
         <div class="mt-4 text-center font-bold text-zinc-400">Bar Model</div>
       `}renderOptions(e){let t=document.getElementById(`options-grid`);t&&(t.innerHTML=e.options.map(e=>`
         <button 
           class="opt-btn group relative p-6 bg-zinc-50 dark:bg-zinc-800/50 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200"
           data-correct="${e.isCorrect}"
         >
           <span class="text-3xl sm:text-4xl font-black text-zinc-700 dark:text-zinc-200 group-hover:scale-110 transition-transform block">
             ${e.value}
           </span>
         </button>
       `).join(``),t.querySelectorAll(`.opt-btn`).forEach(e=>{e.addEventListener(`click`,e=>this.handleAnswer(e))}))}handleAnswer(t){let n=t.currentTarget,r=n.dataset.correct===`true`,i=document.getElementById(`feedback-msg`),a=document.querySelectorAll(`.opt-btn`);a.forEach(e=>e.style.pointerEvents=`none`),r?(n.classList.add(`!bg-green-500`,`!border-green-600`,`!text-white`),n.querySelector(`span`)?.classList.add(`text-white`),i&&(i.textContent=`Correct! 🎉`,i.className=`h-8 mt-6 text-center text-lg font-bold text-green-500`),e&&e.playSuccess(),setTimeout(()=>{this.currentIndex++,this.currentIndex<this.questions.length?this.loadQuestion():this.finishGame()},1e3)):(n.classList.add(`!bg-red-500`,`!border-red-600`,`animate-shake`),i&&(i.textContent=`Try again!`,i.className=`h-8 mt-6 text-center text-lg font-bold text-red-500`),e&&e.playWrong(),setTimeout(()=>{n.classList.remove(`!bg-red-500`,`!border-red-600`,`animate-shake`),a.forEach(e=>e.style.pointerEvents=`auto`)},500))}finishGame(){t(this.container.dataset.id||``),window.showCelebration?.()}},r=()=>{document.querySelectorAll(`.fraction-feast-game`).forEach(e=>{let t=e;t.__init||=(new n(t),!0)})};r(),document.addEventListener(`astro:page-load`,r);