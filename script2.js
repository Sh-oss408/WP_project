let tips = JSON.parse(localStorage.getItem("tips")) || [
 {id:1,title:"Perfect Eggs",category:"cooking",desc:"Cook eggs on low heat for creamy texture"},
 {id:2,title:"Stale Bread Croutons",category:"leftover",desc:"Bake bread cubes with oil for 15 minutes"}
]

let active = "all"

const $ = id => document.getElementById(id)

function save(){ localStorage.setItem("tips",JSON.stringify(tips)) }

function render(search=""){
 let list = tips.filter(t =>
  (active=="all"||t.category==active) &&
  t.title.toLowerCase().includes(search.toLowerCase())
 )
 $("tips").innerHTML = list.map(t=>`
  <div class="card">
   <h3>${t.title}</h3>
   <p>${t.desc}</p>
   <button onclick="del(${t.id})">❌</button>
  </div>`).join("")
 $("empty").style.display = list.length?"none":"block"
}

function del(id){
 tips = tips.filter(t=>t.id!=id)
 save(); render($("search").value)
}

$("search").oninput = e => render(e.target.value)

document.querySelectorAll("#filters button").forEach(b=>{
 b.onclick=()=>{
  document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("active"))
  b.classList.add("active")
  active=b.dataset.cat
  render($("search").value)
 }
})

$("openModal").onclick=()=> $("modal").classList.add("show")
$("close").onclick=()=> $("modal").classList.remove("show")

$("save").onclick=()=>{
 let title=$("title").value.trim()
 let desc=$("desc").value.trim()
 if(!title||desc.length<20){ $("error").innerText="Invalid input"; return }
 tips.push({id:Date.now(),title,category:$("category").value,desc})
 save(); render(); $("modal").classList.remove("show")
}

async function loadRecipes(){
 try{
  let r=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
  let d=await r.json()
  $("loading").style.display="none"
  $("recipes").innerHTML=d.meals.slice(0,4).map(m=>`
   <div class="card">
    <img src="${m.strMealThumb}" width="100%">
    <h3>${m.strMeal}</h3>
   </div>`).join("")
 }catch{
  $("loading").innerText="Failed to load recipes"
 }
}

render(); loadRecipes()
