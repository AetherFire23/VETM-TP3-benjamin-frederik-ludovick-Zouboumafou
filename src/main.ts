import './style.css'
import {setupCounter} from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center"> 
    <button> Cookie </button>
</section>
<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)