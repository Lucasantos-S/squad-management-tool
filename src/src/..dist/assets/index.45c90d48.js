const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};F();const m=[];function j(e){const o=`${e.target.innerText} 
id:${e.target.dataset.player}`.toLowerCase().split(`
`).map(a=>a.replace(" :",",").split(":")),n=()=>o.reduce((a,[c,i])=>(a[c]=i,a),{});m.push(n()),P()}const q=()=>m.splice(0,m.length),P=()=>m.reduce((t,{age:r})=>(t+=+r/11,t),0).toFixed(1),D=document.querySelector("[data-position]");let B="3-4-3";const C=({target:e})=>{D.dataset.position=e.value,B=e.value,p(),q()};document.querySelector(".formation").addEventListener("change",C);function p(){document.querySelectorAll(".drop_position").forEach(t=>{t.innerHTML=""})}const _=document.querySelector(".btn-modal"),E=document.querySelector(".modal-container"),k=()=>{E.classList.add("active"),p()};E.classList.add("active");_.addEventListener("click",k);const h=()=>{E.classList.remove("active"),document.getElementById("name").dataset.index="new",document.getElementById("name").classList.remove("erro"),b(),p()};document.querySelector(".close-modal").addEventListener("click",h);const $=document.getElementById("tag-ul"),J=document.getElementById("input-tag"),T=[];J.addEventListener("keydown",e=>{e.code.includes("Enter")&&e.target.value&&(T.push(e.target.value),document.getElementById("input-tag").value="",e.preventDefault(),K())});const K=()=>{$.innerHTML="",T.forEach((e,t)=>{const r=document.createElement("li");r.innerHTML=`
      <div>
        <span>${e}</span>
        <button class="btn-remove-Tag" onclick="removeTag(${t})">x</button>
      </div>
    `,$.appendChild(r)})},R="http://api.squadmanagementtoll.kinghost.net/wp-json/api/jogadores?q=",U=async e=>fetch(R+e).then(t=>t.json());function V(e,t=1e3,r){return function(){clearTimeout(r),r=setTimeout(()=>{e(...arguments)},t)}}const z=({target:e})=>U(e.value).then(t=>G(t));document.getElementById("search-Players").addEventListener("keyup",V(z,1e3));const G=e=>{const t=document.querySelector(".drag-players"),r=e.map(({name:n,age:a,nationality:c,id:i})=>`
      <div class="drag-player" draggable="true" data-player="${i}">
        <li > Name: <span >${n} </span> </li>
        <li> Nationality: <span>${c} </span></li>
        <li class="age"> Age: <span>${a} </span></li>
      </div>
      `);t.innerHTML=r,document.querySelectorAll(".drag-player").forEach(n=>{n.addEventListener("dragstart",W)})},Q=document.querySelectorAll(".drop_position");Q.forEach(e=>{e.addEventListener("dragover",X),e.addEventListener("drop",Y),e.addEventListener("dragleave",Z)});function W(e){j(e);const t=e.target.innerText.split(" ")[1].charAt(0),r=e.target.innerText.split(" ")[2].charAt(0);e.dataTransfer.setData("text/plain",t+r),setTimeout(()=>{this.className="invisibol"},0)}function X(e){e.preventDefault(),this.classList.add("enter")}function Y(e){e.preventDefault();const t=document.createElement("p");t.className="drop",t.innerHTML=e.dataTransfer.getData("text"),this.append(t),this.classList.remove("enter")}function Z(e){e.preventDefault(),this.classList.remove("enter")}const L=document.getElementById("name"),w=()=>document.getElementById("form").name.value?(L.classList.remove("erro"),!0):(L.classList.add("erro"),!1);L.addEventListener("change",w);const v=document.querySelector(".highest-age"),M=document.querySelector(".lowest-age"),g=()=>{v.innerHTML="",M.innerHTML="";const e=d(),t=e.map(({teamAge:n})=>+n).sort((n,a)=>n-a).reverse(),r=e.filter(({teamAge:n})=>n>t[5]),o=e.filter(({teamAge:n})=>n<=t[5]);if(e.length<=5){const n=e.reduce((a,{name:c,teamAge:i})=>a+=`<li>${c}<span>${i}</span></li>`,"");v.innerHTML=n}else if(e.length>5||e.length<10){const n=r.reduce((c,{name:i,teamAge:u})=>c+=`<li>${i}<span>${u}</span></li>`,"");v.innerHTML=n;const a=o.reduce((c,{name:i,teamAge:u})=>c+=`<li>${i}<span>${u}</span></li>`,"");M.innerHTML=a}};function y(){const e=d(),t=[],r=e.map(s=>s.player);r.map(s=>s.map(l=>t.push(l.id)));let o={};t.forEach(s=>{o[s]=(o[s]||0)+1});const n=Math.max(...Object.values(o)),a=Math.min(...Object.values(o)),c=Object.keys(o).find(s=>o[s]===n),i=Object.keys(o).find(s=>o[s]===a),u=n*t.length/100,N=a*t.length/100;let A=[];r.map(s=>s.map(l=>A.push(l)));const x=A.filter(s=>s.id===c).reduce((s,l)=>(s=l.name,`
        <p class="most-Name">${s}</p>
        <span class="most-number" >${u}%</span>
        `),"");document.getElementById("most-contend").innerHTML=x;let S=[];r.map(s=>s.map(l=>S.push(l)));const O=S.filter(s=>s.id===i).reduce((s,l)=>(s=l.name,`
        <p class="most-Name">${s}</p>
        <span class="most-number" >${N}%</span>
        `),"");return document.getElementById("less-contend").innerHTML=O}y();g();const ee=document.querySelector(".btn-save");function d(){var e;return(e=JSON.parse(localStorage.getItem("teams")))!=null?e:[]}const I=e=>localStorage.setItem("teams",JSON.stringify(e)),H=(e,t)=>{const r=d();r[e]=t,I(r)},te=e=>{const t=d();t.splice(e,1),I(t)},ne=e=>{const t=d();t.push(e),I(t)},b=()=>{const e=document.querySelectorAll("#form input"),t=document.querySelector("#description");e.forEach(r=>{r.value=""}),t.value=""},ae=()=>{if(w()){const e={name:document.getElementById("name").value,description:document.getElementById("description").value,website:document.getElementById("website").value,player:m,tagList:T,formation:B,teamAge:P()},t=document.getElementById("name").dataset.index;t=="new"?(ne(e),f(),b(),h(),q(),g(),y(),p()):(H(t,e),f(),h(),b(),g(),y(),p(),document.getElementById("name").dataset.index="new")}},f=()=>{const t=d().reduce((r,{name:o,description:n},a)=>r+=`
        <tr>
          <td>${o}</td>
          <td>${n}</td>
          <td class="btn-crud">
            <button id="delete-${a}">
                  <img type="button" src="public/image/delete_icon.svg" alt="button delete" id="delet-${a}" />
            </button>
            <button id="share-${a}">
                  <img  type="button" src="public/image/share_icon.svg" alt="button shere" id="share-${a}" />
            </button>
            <button id="edit-${a}">
                  <img type="button" src="public/image/edit_icon.svg" alt="button edit" id="edit-${a}" />
            </button>
          </td>
        </tr>`,"");document.querySelector("tbody").innerHTML=t};f();const re=e=>{document.getElementById("name").value=e.name,document.getElementById("description").value=e.description,document.getElementById("website").value=e.website,document.getElementById("name").dataset.index=e.index,document.querySelector("[data-position]").dataset.position="3-4-3"},se=e=>{const t=d()[e];t.index=e,re(t),k()},oe=({target:e})=>{const[t,r]=e.id.split("-");t=="delet"?(te(r),H(),f(),g(),y()):t=="share"||t=="edit"&&se(r)};ee.addEventListener("click",ae);document.querySelector(".records>tbody").addEventListener("click",oe);
