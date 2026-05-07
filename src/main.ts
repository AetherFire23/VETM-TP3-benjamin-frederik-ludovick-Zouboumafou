import './style.css'
/*
On load les scripts simplement a partir du import
 */
import "./buttonClick.ts"
import "./styles/cookie.css"
import "./shop/shopHtml/shopDisplay.ts"
/*
Pour le click handler / observable, il faut sassurer de launcher nos script APRES le script buttonClick pour pas runner no script
apres l'incremation du coutner.
 */

/*
On load le css a partir du import
 */


document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
<section id="center"> 
    <button id="cookie-button" class="cookie-style"> Cookie </button>
</section>
<div id="counter"> 0 </div>
<div id="shop-div"/>
<div class="ticks"></div>
<section id="spacer"></section>
`;

