
(function(){
"use strict";

const profiles = document.getElementById("profiles");
const overallPct = document.getElementById("overallPct");
const overallCount = document.getElementById("overallCount");
const overallFill = document.getElementById("overallFill");

function dataRoot(){
  if(Array.isArray(window.universes)) return window.universes;
  if(Array.isArray(window.UNIVERSES)) return window.UNIVERSES;
  return [];
}
function groupsOf(u){
  return u.groups || u.sections || u.categories || [];
}
function itemsOf(u){
  return groupsOf(u).flatMap(g => g.items || g.movies || g.titles || []);
}
function allItems(){ return dataRoot().flatMap(itemsOf); }
function status(id){ return localStorage.getItem("watchlist-status-"+id) || "not-watched"; }

function legacyState(){
  try { return JSON.parse(localStorage.getItem("watchlist-progress") || "{}"); }
  catch(e){ return {}; }
}
const oldState=legacyState();
function currentStatus(id){ return status(id)!=="not-watched" ? status(id) : (oldState[id] || "not-watched"); }

const icons={
  marvel:"⚡",dc:"🦇",transformers:"🤖","john-wick":"♠","mission-impossible":"🎯",
  horror:"👻","wizard-world":"🪄",wizard:"🪄",anime:"☯","sci-fi-fantasy":"✦",
  monsterverse:"🦖",invincible:"★",jurassic:"🦕",pirates:"☠",narnia:"🦁",
  "fast-furious":"🏎","terminator":"🤖",avatar:"🌊","planet-of-the-apes":"🦍",
  conjuring:"🕯",insidious:"🚪",scream:"🔪","james-bond":"007"
};
const colors=["#ef3340","#2e86ff","#b34cff","#e7a91a","#19c6d6","#ff7a18","#52d273"];

function artFor(u){
  return u.profileImage || u.image || u.background || u.hero || "";
}
function safe(s){
  return String(s ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
function createCard(u,index){
  const items=itemsOf(u);
  const watched=items.filter(i=>currentStatus(i.id)==="watched").length;
  const pct=items.length?Math.round(watched/items.length*100):0;
  const id=String(u.id||"").toLowerCase();
  const accent=u.accent || colors[index%colors.length];
  const card=document.createElement("article");
  card.className="profile";
  card.style.setProperty("--accent",accent);
  const art=artFor(u);
  if(art) card.querySelector; // placeholder before innerHTML
  card.innerHTML=`
    <div class="profile-art" ${art?`style="--art:url('${String(art).replace(/'/g,"\\'")}')"`:""}></div>
    <div class="profile-icon">${icons[id]||"🎬"}</div>
    <div class="profile-content">
      <h3>${safe(u.name||u.title||u.id||"Universe")}</h3>
      <p>${safe(u.tagline||u.description||"Your cinematic universe awaits.")}</p>
      <div class="meta"><span>${items.length} titles</span><strong>${pct}%</strong></div>
      <div class="mini"><div style="width:${pct}%"></div></div>
    </div>`;
  card.addEventListener("click",()=>location.href="universe.html?universe="+encodeURIComponent(u.id));
  return card;
}
function render(){
  const data=dataRoot();
  profiles.innerHTML="";
  if(!data.length){
    profiles.innerHTML='<div class="empty">No universes found. Make sure data.js is beside index.html.</div>';
    updateOverall();
    return;
  }
  data.forEach((u,i)=>profiles.appendChild(createCard(u,i)));
  updateOverall();
}
function updateOverall(){
  const items=allItems();
  const watched=items.filter(i=>currentStatus(i.id)==="watched").length;
  const pct=items.length?Math.round(watched/items.length*100):0;
  overallPct.textContent=pct+"%";
  overallCount.textContent=watched+" / "+items.length+" titles watched";
  overallFill.style.width=pct+"%";
}
document.getElementById("prevBtn").onclick=()=>profiles.scrollBy({left:-550,behavior:"smooth"});
document.getElementById("nextBtn").onclick=()=>profiles.scrollBy({left:550,behavior:"smooth"});

let down=false,startX=0,scroll=0;
profiles.addEventListener("pointerdown",e=>{down=true;startX=e.clientX;scroll=profiles.scrollLeft;profiles.classList.add("dragging")});
window.addEventListener("pointerup",()=>{down=false;profiles.classList.remove("dragging")});
window.addEventListener("pointermove",e=>{if(!down)return;profiles.scrollLeft=scroll-(e.clientX-startX)*1.15});

window.addEventListener("storage",render);
render();
})();
