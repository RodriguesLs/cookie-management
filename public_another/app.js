let element = document.getElementById('cookie-management-eseni');
element.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
element.style.height = "7em";
element.style.textAlign = "center";
element.style.padding = "1em 0";

let l = `<a href="http://google.com">política de privacidade</a>`;
let text_1 = document.createElement("p");

text_1.innerHTML = `Guardamos estatísticas de visitas para melhorar sua experiência de navegação, saiba mais em nossa ${l}.`;

text_1.style.color = 'white';
text_1.style.fontFamily = 'sans-serif';


let btn = document.createElement("button");
btn.innerHTML = "Prosseguir";
btn.style.backgroundColor = "rgb(255, 250, 0)";
btn.style.borderRadius = "5px";
btn.style.padding = '.9em';

let btn_voltar = document.createElement("button");
btn_voltar.innerHTML = "Rejeitar";
btn_voltar.style.backgroundColor = "rgb(255, 173, 0)";
btn_voltar.style.borderRadius = "5px";
btn_voltar.style.padding = '1em';

element.appendChild(text_1);
// element.appendChild(btn_voltar);
element.appendChild(btn);
