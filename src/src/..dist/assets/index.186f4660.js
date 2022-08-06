const h=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};h();const L=document.querySelector(".btn-modal"),f=document.querySelector(".modal-container"),v=()=>f.classList.add("active");["touchstart","click"].forEach(e=>{L.addEventListener(e,v)});const u=()=>{f.classList.remove("active"),document.getElementById("name").dataset.index="new",m()};document.querySelector(".close-modal").addEventListener("click",u);const y=document.getElementById("tag-ul"),T=document.getElementById("input-tag"),p=[];T.addEventListener("keydown",e=>{e.code.includes("Enter")&&e.target.value&&(p.push(e.target.value),document.getElementById("input-tag").value="",e.preventDefault(),I())});const I=()=>{y.innerHTML="",p.forEach((e,t)=>{const a=document.createElement("li");a.innerHTML=`
      <div>
        <span>${e}</span>
        <button class="btn-remove-Tag" onclick="removeTag(${t})">x</button>
      </div>
    `,y.appendChild(a)})},S=async e=>{const a=await(await fetch(`http://api.squadmanagementtoll.kinghost.net/wp-json/api/jogadores?q=${e}`)).json();q(a)};document.getElementById("search-Players").addEventListener("keyup",({target:e})=>{e.value.length>3&&S(e.value)});const q=e=>{const t=document.querySelector(".drag-players"),a=e.map(({name:n,age:o,nationality:s,id:i})=>`
      <div class="drag-player" draggable="true" data-player="${i}">
        <li > Nome: <span >${n} </span> </li>
        <li> Nationality: <span>${s} </span></li>
        <li class="age"> Age: <span>${o} </span></li>
      </div>
      `);t.innerHTML=a,document.querySelectorAll(".drag-player").forEach(n=>{n.addEventListener("dragstart",N)})},B=document.querySelectorAll(".drop_position");B.forEach(e=>{e.addEventListener("dragover",M),e.addEventListener("drop",k),e.addEventListener("dragleave",A)});const l=[];function $(e){const a=e.target.innerText.split(`
`).map(n=>n.replace(" :",",").split(":")),r=n=>a.reduce((o,[s,i])=>(o[s]=i,o),{});l.push(r())}const w=()=>l.splice(0,l.length);function N(e){$(e),e.dataTransfer.setData("text/plain",e.target.innerText.split("")[6]),setTimeout(()=>{this.className="invisibol"},0)}function M(e){e.preventDefault(),this.classList.add("enter")}function k(e){e.preventDefault();const t=document.createElement("p");t.className="drop",t.innerHTML=e.dataTransfer.getData("text"),this.append(t),this.classList.remove("enter")}function A(e){e.preventDefault(),this.classList.remove("enter")}const D=document.querySelector("[data-position]");let b="3-4-3";const O=({target:e})=>{D.dataset.position=e.value,b=e.value,console.log(e.value)};document.querySelector(".formation").addEventListener("change",O);const P=document.querySelector(".btn-save"),c=()=>{var e;return(e=JSON.parse(localStorage.getItem("teams")))!=null?e:[]},g=e=>localStorage.setItem("teams",JSON.stringify(e)),E=(e,t)=>{const a=c();a[e]=t,g(a)},x=e=>{const t=c();t.splice(e,1),g(t)},j=e=>{const t=c();t.push(e),g(t)},C=()=>document.getElementById("form").name.value?(document.getElementById("form").name.style.borderColor="#fff",!0):(document.getElementById("form").name.style.borderColor="red",!1),m=()=>{const e=document.querySelectorAll("#form input"),t=document.querySelector("#description");e.forEach(a=>{a.value=""}),t.value=""},H=()=>{if(C()){const e={name:document.getElementById("name").value,description:document.getElementById("description").value,website:document.getElementById("website").value,player:l,tagList:p,formation:b},t=document.getElementById("name").dataset.index;t=="new"?(j(e),d(),m(),u(),w()):(E(t,e),d(),u(),m(),document.getElementById("name").dataset.index="new")}},d=()=>{const t=c().reduce((a,{name:r,description:n},o)=>a+=`
        <tr>
          <td>${r}</td>
          <td>${n}</td>
          <td class="btn-crud">
            <button id="delete-${o}">
                  <img type="button" src="public/image/delete_icon.svg" alt="button delete" id="delet-${o}" />
            </button>
            <button id="share-${o}">
                  <img  type="button" src="public/image/share_icon.svg" alt="button shere" id="share-${o}" />
            </button>
            <button id="edit-${o}">
                  <img type="button" src="public/image/edit_icon.svg" alt="button edit" id="edit-${o}" />
            </button>
          </td>
        </tr>`,"");document.querySelector("tbody").innerHTML=t};d();const _=e=>{document.getElementById("name").value=e.name,document.getElementById("description").value=e.description,document.getElementById("website").value=e.website,document.getElementById("name").dataset.index=e.index,document.querySelector("[data-position]").dataset.position="3-4-3"},F=e=>{const t=c()[e];t.index=e,_(t),v()},J=({target:e})=>{const[t,a]=e.id.split("-");t=="delet"?(x(a),E(),d()):t=="share"?console.log("compartilhar"):t=="edit"&&F(a)};P.addEventListener("click",H);document.querySelector(".records>tbody").addEventListener("click",J);
