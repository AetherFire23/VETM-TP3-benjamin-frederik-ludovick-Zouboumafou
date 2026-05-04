import './style.css'
/*
On load les scripts simplement a partir du import
 */
import "./buttonClick.ts"

/*
On load le css a partir du import
 */
import "./styles/cookie.css"



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center"> 
    <button id="cookie-button" class="cookie-style"> Cookie </button>
</section>
<div id="counter"> 0 </div>
<div class="ticks"></div>
<section id="spacer"></section>
`;

