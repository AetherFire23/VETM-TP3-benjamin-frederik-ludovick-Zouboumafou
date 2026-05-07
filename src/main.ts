import './style.css'
import "./styles/cookie.css"
/*
On load les scripts simplement a partir du import
 */
import "./buttonClick.ts"

/*
Pour le click handler / observable, il faut sassurer de launcher nos script APRES le script buttonClick pour pas runner no script
apres l'incremation du coutner.
 */

/*
On load le css a partir du import
 */

document.querySelector<HTMLDivElement>('#app')!.innerHTML += `

`;

