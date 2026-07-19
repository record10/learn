import{n as e}from"./gameSounds.NIc3mBjX.js";import{t}from"./progress.CXJr4Kgm.js";var n={battery:`
      <rect x="5" y="15" width="50" height="30" rx="3" fill="#374151" stroke="#6b7280" stroke-width="2"/>
      <rect x="55" y="22" width="8" height="16" rx="2" fill="#ef4444"/>
      <rect x="-3" y="25" width="8" height="10" rx="1" fill="#3b82f6"/>
      <text x="30" y="35" text-anchor="middle" fill="#9ca3af" font-size="8" font-family="monospace">9V</text>
    `,bulb:`
      <circle cx="30" cy="25" r="18" fill="#fef3c7" stroke="#fbbf24" stroke-width="2" class="bulb-glass"/>
      <path d="M22 43 L38 43 L35 50 L25 50 Z" fill="#374151" stroke="#6b7280" stroke-width="1"/>
      <line x1="30" y1="12" x2="30" y2="38" stroke="#d97706" stroke-width="2"/>
      <circle cx="30" cy="12" r="3" fill="#fbbf24"/>
    `,led:`
      <path d="M15 10 L45 10 L45 35 L30 50 L15 35 Z" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="2"/>
      <line x1="22" y1="50" x2="22" y2="60" stroke="#9ca3af" stroke-width="2"/>
      <line x1="38" y1="50" x2="38" y2="60" stroke="#9ca3af" stroke-width="2"/>
      <text x="30" y="30" text-anchor="middle" fill="#ef4444" font-size="8">LED</text>
    `,resistor:`
      <line x1="0" y1="25" x2="15" y2="25" stroke="#9ca3af" stroke-width="3"/>
      <path d="M15 25 L20 15 L25 35 L30 15 L35 35 L40 15 L45 25" fill="none" stroke="#ca8a04" stroke-width="3"/>
      <line x1="45" y1="25" x2="60" y2="25" stroke="#9ca3af" stroke-width="3"/>
      <rect x="15" y="10" width="30" height="30" fill="#78350f" rx="2"/>
      <g fill="none" stroke-width="3">
        <line x1="20" y1="10" x2="20" y2="40" stroke="#a16207"/>
        <line x1="28" y1="10" x2="28" y2="40" stroke="#000"/>
        <line x1="36" y1="10" x2="36" y2="40" stroke="#dc2626"/>
        <line x1="42" y1="10" x2="42" y2="40" stroke="#fbbf24"/>
      </g>
    `,switch:`
      <circle cx="15" cy="30" r="6" fill="#374151" stroke="#9ca3af" stroke-width="2"/>
      <circle cx="45" cy="30" r="6" fill="#374151" stroke="#9ca3af" stroke-width="2"/>
      <line x1="15" y1="30" x2="40" y2="15" stroke="#9ca3af" stroke-width="3" stroke-linecap="round"/>
      <rect x="5" y="45" width="50" height="8" rx="2" fill="#374151" stroke="#6b7280"/>
      <text x="30" y="52" text-anchor="middle" fill="#9ca3af" font-size="6">ON/OFF</text>
    `,motor:`
      <circle cx="30" cy="25" r="20" fill="#374151" stroke="#6b7280" stroke-width="2"/>
      <circle cx="30" cy="25" r="12" fill="#1f2937" stroke="#4b5563" stroke-width="1"/>
      <circle cx="30" cy="25" r="4" fill="#9ca3af"/>
      <line x1="15" y1="45" x2="15" y2="55" stroke="#9ca3af" stroke-width="2"/>
      <line x1="45" y1="45" x2="45" y2="55" stroke="#9ca3af" stroke-width="2"/>
      <text x="30" y="55" text-anchor="middle" fill="#6b7280" font-size="6">MOTOR</text>
    `},r=class{container;challenges;currentIndex=0;score=0;nextUrl;placedComponents=new Map;selectedComponent=null;constructor(e){this.container=e,this.challenges=JSON.parse(e.dataset.challenges||`[]`),this.nextUrl=e.dataset.nextUrl||`/challengers/`,this.init()}init(){document.addEventListener(`celebration-next`,()=>{window.location.href=this.nextUrl}),document.addEventListener(`celebration-replay`,()=>{window.location.reload()}),document.getElementById(`reset-btn`)?.addEventListener(`click`,()=>this.resetCircuit()),document.getElementById(`test-btn`)?.addEventListener(`click`,()=>this.testCircuit()),document.getElementById(`hint-btn`)?.addEventListener(`click`,()=>this.showHint()),this.loadChallenge()}loadChallenge(){if(this.currentIndex>=this.challenges.length){this.finish();return}let e=this.challenges[this.currentIndex];this.placedComponents.clear(),this.selectedComponent=null,document.querySelectorAll(`.electron`).forEach(e=>e.remove());let t=document.getElementById(`challenge-counter`),n=document.getElementById(`challenge-title`),r=document.getElementById(`challenge-goal`),i=document.getElementById(`concept-badge`),a=document.getElementById(`feedback`),o=document.getElementById(`hint-display`),s=document.getElementById(`test-btn`),c=document.getElementById(`power-indicator`),l=document.getElementById(`circuit-status`);t&&(t.textContent=`CIRCUIT ${this.currentIndex+1} / ${this.challenges.length}`),n&&(n.textContent=e.title),r&&(r.textContent=e.goal),i&&(i.textContent=e.concept),a&&(a.innerHTML=``),o&&o.classList.add(`hidden`),s&&(s.disabled=!0),c&&(c.classList.remove(`bg-green-500`,`shadow-green-500/50`),c.classList.add(`bg-red-500`,`shadow-red-500/50`)),l&&(l.innerHTML=`<span class="text-zinc-400 font-mono text-sm">⬤ PLACE COMPONENTS TO BUILD CIRCUIT</span>`),this.renderCircuitBoard(e),this.renderComponentsTray(e),this.updateProgress()}renderCircuitBoard(e){let t=document.getElementById(`components-group`),n=document.getElementById(`wires-group`);if(!t||!n)return;t.innerHTML=``,n.innerHTML=``;let r=e.components.length,i=(500-r*80)/(r+1),a=i,o=i+(r-1)*(80+i)+80,s=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);s.setAttribute(`d`,`M ${a-15} 80 L ${o+15} 80`),s.setAttribute(`fill`,`none`),s.setAttribute(`stroke`,`#78350f`),s.setAttribute(`stroke-width`,`8`),s.setAttribute(`stroke-linecap`,`round`),s.setAttribute(`opacity`,`0.5`),n.appendChild(s);let c=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);c.setAttribute(`d`,`
        M ${o+15} 80
        L ${o+30} 80
        L ${o+30} 150
        L ${a-30} 150
        L ${a-30} 80
        L ${a-15} 80
      `),c.setAttribute(`fill`,`none`),c.setAttribute(`stroke`,`#78350f`),c.setAttribute(`stroke-width`,`6`),c.setAttribute(`stroke-linecap`,`round`),c.setAttribute(`stroke-linejoin`,`round`),c.setAttribute(`opacity`,`0.4`),c.setAttribute(`id`,`return-wire`),n.appendChild(c),e.components.forEach((e,r)=>{let a=i+r*(80+i),o=document.createElementNS(`http://www.w3.org/2000/svg`,`circle`);o.setAttribute(`cx`,String(a)),o.setAttribute(`cy`,`80`),o.setAttribute(`r`,`6`),o.setAttribute(`fill`,`#b45309`),o.setAttribute(`stroke`,`#78350f`),o.setAttribute(`stroke-width`,`2`),n.appendChild(o);let s=document.createElementNS(`http://www.w3.org/2000/svg`,`circle`);if(s.setAttribute(`cx`,String(a+80)),s.setAttribute(`cy`,`80`),s.setAttribute(`r`,`6`),s.setAttribute(`fill`,`#b45309`),s.setAttribute(`stroke`,`#78350f`),s.setAttribute(`stroke-width`,`2`),n.appendChild(s),r>0){let e=i+(r-1)*(80+i)+80,t=document.createElementNS(`http://www.w3.org/2000/svg`,`line`);t.setAttribute(`x1`,String(e)),t.setAttribute(`y1`,`80`),t.setAttribute(`x2`,String(a)),t.setAttribute(`y2`,`80`),t.setAttribute(`stroke`,`#52525b`),t.setAttribute(`stroke-width`,`4`),t.setAttribute(`stroke-dasharray`,`8,4`),t.setAttribute(`data-wire`,String(r-1)),t.setAttribute(`class`,`wire-disconnected`),n.appendChild(t)}let c=document.createElementNS(`http://www.w3.org/2000/svg`,`g`);c.setAttribute(`class`,`slot-empty`),c.setAttribute(`data-slot`,String(r)),c.innerHTML=`
          <rect x="${a}" y="50" width="80" height="60" rx="8" fill="#1f2937" stroke="#4b5563" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="${a+80/2}" y="85" text-anchor="middle" fill="#6b7280" font-size="12">SLOT ${r+1}</text>
        `,c.addEventListener(`click`,()=>this.placeComponent(r)),t.appendChild(c)});let l=document.createElementNS(`http://www.w3.org/2000/svg`,`g`);l.innerHTML=`
        <circle cx="${a-30}" cy="80" r="10" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <text x="${a-30}" y="84" text-anchor="middle" fill="white" font-size="10" font-weight="bold">+</text>
        <circle cx="${a-30}" cy="150" r="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
        <text x="${a-30}" y="154" text-anchor="middle" fill="white" font-size="10" font-weight="bold">−</text>
      `,n.appendChild(l)}renderComponentsTray(e){let t=document.getElementById(`components-tray`);t&&(t.innerHTML=``,e.components.forEach((e,r)=>{let i=Array.from(this.placedComponents.values()).includes(e+r),a=document.createElement(`div`);a.className=`component-card p-3 w-24 ${i?`placed`:``}`,a.setAttribute(`draggable`,i?`false`:`true`),a.dataset.component=e,a.dataset.compIndex=String(r),a.innerHTML=`
          <svg viewBox="0 0 60 60" class="w-full h-16 pointer-events-none">
            ${n[e]||`<rect width="60" height="60" fill="#374151"/>`}
          </svg>
          <p class="text-center text-xs text-zinc-300 font-mono mt-1 uppercase pointer-events-none">${e}</p>
        `,i||(a.addEventListener(`dragstart`,t=>{a.classList.add(`dragging`),t.dataTransfer?.setData(`text/plain`,e+`|`+r),t.dataTransfer.effectAllowed=`move`}),a.addEventListener(`dragend`,()=>{a.classList.remove(`dragging`),document.querySelectorAll(`.slot-empty`).forEach(e=>e.classList.remove(`drag-over`))}),a.addEventListener(`touchstart`,()=>{this.selectedComponent=e+r,a.classList.add(`dragging`)},{passive:!0}),a.addEventListener(`touchend`,()=>{a.classList.remove(`dragging`)})),t.appendChild(a)}),this.setupDropZones())}setupDropZones(){document.querySelectorAll(`.slot-empty`).forEach(e=>{let t=e,n=parseInt(t.dataset.slot||`0`);t.addEventListener(`dragover`,e=>{e.preventDefault(),t.classList.add(`drag-over`)}),t.addEventListener(`dragleave`,()=>{t.classList.remove(`drag-over`)}),t.addEventListener(`drop`,e=>{e.preventDefault(),t.classList.remove(`drag-over`);let r=e.dataTransfer?.getData(`text/plain`);if(r){let[e,t]=r.split(`|`);this.selectedComponent=e+t,this.placeComponent(n)}}),t.addEventListener(`click`,()=>{this.selectedComponent&&this.placeComponent(n)})})}placeComponent(t){if(!this.selectedComponent)return;let r=this.challenges[this.currentIndex],i=this.selectedComponent.replace(/\d+$/,``);if(r.components[t]!==i){e?.playWrong();return}this.placedComponents.set(t,this.selectedComponent),this.selectedComponent=null;let a=document.querySelector(`[data-slot="${t}"]`);if(a){let e=r.components.length,o=(500-e*80)/(e+1),s=o+t*(80+o);a.setAttribute(`class`,`slot-filled`),a.innerHTML=`
          <rect x="${s}" y="50" width="80" height="60" rx="8" fill="#1a3d1a" stroke="#22c55e" stroke-width="2"/>
          <g transform="translate(${s+10}, 50)">
            ${n[i]||``}
          </g>
        `}if(t>0&&this.placedComponents.has(t-1)){let e=document.querySelector(`[data-wire="${t-1}"]`);e&&e.setAttribute(`class`,`wire-connected current-flowing`)}if(this.placedComponents.has(t+1)){let e=document.querySelector(`[data-wire="${t}"]`);e&&e.setAttribute(`class`,`wire-connected current-flowing`)}e?.playSuccess(),this.renderComponentsTray(r);let o=document.getElementById(`test-btn`);o&&(o.disabled=this.placedComponents.size<r.components.length);let s=document.getElementById(`circuit-status`);if(s){let e=r.components.length-this.placedComponents.size;e>0?s.innerHTML=`<span class="text-amber-400 font-mono text-sm">⬤ ${e} COMPONENT${e>1?`S`:``} REMAINING</span>`:s.innerHTML=`<span class="text-green-400 font-mono text-sm">⬤ READY TO TEST!</span>`}}showHint(){let e=this.challenges[this.currentIndex],t=document.getElementById(`hint-display`);t&&(t.textContent=`💡 ${e.hint}`,t.classList.remove(`hidden`))}animateElectricityFlow(){let e=document.getElementById(`circuit-svg`);if(!e)return;let t=this.challenges[this.currentIndex].components.length,n=(500-t*80)/(t+1),r=n,i=n+(t-1)*(80+n)+80,a=`
        M ${r-30} 80
        L ${i+30} 80
        L ${i+30} 150
        L ${r-30} 150
        Z
      `;for(let t=0;t<5;t++){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`circle`);n.setAttribute(`r`,`5`),n.setAttribute(`fill`,`#fbbf24`),n.setAttribute(`filter`,`url(#glow)`),n.classList.add(`electron`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`animateMotion`);r.setAttribute(`dur`,`2s`),r.setAttribute(`repeatCount`,`indefinite`),r.setAttribute(`begin`,`${t*.4}s`),r.setAttribute(`path`,a),n.appendChild(r),e.appendChild(n)}if(!document.getElementById(`glow`)){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`defs`);t.innerHTML=`
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        `,e.insertBefore(t,e.firstChild)}document.querySelectorAll(`.wire-disconnected`).forEach(e=>{e.setAttribute(`class`,`wire-connected`),e.setAttribute(`stroke`,`#fbbf24`)});let o=document.getElementById(`return-wire`);o&&(o.setAttribute(`stroke`,`#fbbf24`),o.setAttribute(`opacity`,`0.8`),o.classList.add(`current-flowing`))}resetCircuit(){this.loadChallenge()}testCircuit(){let t=this.challenges[this.currentIndex],n=document.getElementById(`feedback`),r=document.getElementById(`power-indicator`),i=document.getElementById(`circuit-status`);this.placedComponents.size>=t.components.length?(this.score++,this.updateScore(),r&&(r.classList.remove(`bg-red-500`,`shadow-red-500/50`),r.classList.add(`bg-green-500`,`shadow-green-500/50`)),document.querySelectorAll(`.bulb-glass`).forEach(e=>{e.classList.add(`bulb-on`),e.setAttribute(`fill`,`#fef08a`)}),this.animateElectricityFlow(),i&&(i.innerHTML=`<span class="text-green-400 font-mono text-sm animate-pulse">⚡ CURRENT FLOWING ⚡</span>`),n&&(n.innerHTML=`<span class="text-green-400 font-mono">✓ CIRCUIT COMPLETE! Current is flowing!</span>`),e?.playCelebration()):(n&&(n.innerHTML=`<span class="text-red-400 font-mono">✗ Circuit incomplete. Place all components.</span>`),e?.playWrong()),this.currentIndex++,this.updateProgress(),setTimeout(()=>this.loadChallenge(),2500)}updateScore(){let e=document.getElementById(`score`);e&&(e.textContent=`${this.score}/${this.challenges.length}`)}updateProgress(){let e=document.getElementById(`progress-bar`);if(e){let t=this.currentIndex/this.challenges.length*100;e.style.width=`${t}%`}}finish(){let n=document.getElementById(`progress-bar`);n&&(n.style.width=`100%`);let r=this.container.dataset.id;r&&t(r);let i=document.getElementById(`celebration-overlay`);i&&(i.classList.remove(`hidden`),i.classList.add(`flex`)),e?.playCelebration()}},i=()=>{document.querySelectorAll(`.circuit-game`).forEach(e=>{let t=e;t.__init||=(new r(t),!0)})};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,i):i(),document.addEventListener(`astro:page-load`,i);