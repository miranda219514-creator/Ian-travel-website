'use strict';
// All content is local. Replace image paths and demo copy here with Ian’s real trips.
const JOURNALS = [
  { id:'forest', region:'central', area:'南投・山林', date:'2026.10.18', image:'assets/ian-hero.png', alt:'範例白柴伊恩在山林湖畔的木棧道上', tag:'山林散步', title:'山裡的風，和一隻不想回家的柴', excerpt:'把步調放慢，沿著湖邊散散步。對伊恩來說，每一棵樹都有值得認真聞一聞的故事。', body:['清晨的山還蓋著薄薄的霧，我們就已經在路上。車窗外是一路往後跑的樹，伊恩把下巴輕輕靠在窗邊，像是在確認今天的冒險方向。','抵達湖畔時，先找一處陰涼的地方喝水，再沿著平緩的木棧道慢慢走。這一趟沒有趕著收集景點，只想把時間留給風、樹影，還有腳邊快樂的小白柴。','午餐前回到休息區。人類喝咖啡，伊恩享用自己的飼料與小點心。旅行的好日子，大概就是這樣：安排得少一點，相處得多一點。'], tip:'帶足飲水、全程繫牽繩，並事先確認步道是否開放寵物通行。' },
  { id:'coast', region:'east', area:'花蓮・海邊', date:'2026.09.27', image:'assets/coast.svg', alt:'範例插畫：白柴在東海岸看海與層疊山景', tag:'海邊放空', title:'往東走，把煩惱交給海', excerpt:'追著海風跑一小段，再坐下來看浪。一人一柴，練習什麼都不做的美好。', body:['一路往東，空氣慢慢多了一點鹹鹹的味道。停好車後先摸摸地面的溫度，確定不燙腳，才讓伊恩開始今天的海邊巡邏。','我們沒有靠近浪大的地方，只在安全的步道上看海。伊恩對漂流木的興趣，比對遠方的美景還要大。每走三步就停一下，也算是一種很認真的旅行。','傍晚的光線變得柔軟。回車上前用清水擦乾淨腳掌，補充飲水，讓伊恩舒服地睡完回程。海風帶不回家，但這段一起放空的時間可以。'], tip:'避開烈日與強浪，留意尖銳石頭；不讓毛孩飲用海水。' },
  { id:'cafe', region:'north', area:'宜蘭・小旅行', date:'2026.09.12', image:'assets/cafe.svg', alt:'範例插畫：森林咖啡小屋前的白柴與暖色窗景', tag:'咖啡小歇', title:'一杯咖啡的時間，陪你發呆', excerpt:'找一間有樹蔭的小店，讓午後慢一點。人類補咖啡，伊恩補充被稱讚的能量。', body:['這次的行程很簡單：走一段安靜的小路，再找個能讓伊恩一起休息的地方。出發前先詢問店家規範，確認戶外座位與牽繩要求。','我們在角落鋪好熟悉的小墊子，放上隨行水碗。伊恩安穩地趴著，我們才開始享受咖啡香與窗外的樹影。原來舒服的旅行，是讓每個同行的夥伴都自在。','離開之前收好自己的垃圾，也把椅子旁的小毛整理乾淨。希望下一位帶毛孩來旅行的人，也能被溫柔歡迎。'], tip:'先確認寵物入店條件，自備墊子、水碗，勿讓毛孩食用咖啡與人類甜點。' }
];
const PLACES = [
  { type:'nature', icon:'mountain', en:'FOREST WALK', name:'湖畔森林步道', description:'平緩步道與林間樹蔭，適合安排一段不趕時間的散步。', location:'南投・自然散步', rule:'牽繩散步', note:'出發前確認寵物入園規範' },
  { type:'cafe', icon:'sun', en:'COFFEE BREAK', name:'樹下的咖啡小屋', description:'找個通風、安靜的戶外角落，陪毛孩一起歇歇腳。', location:'宜蘭・咖啡時光', rule:'戶外座位', note:'先詢問座位與寵物落地規定' },
  { type:'nature', icon:'pin', en:'BY THE SEA', name:'海風散步小徑', description:'沿著海岸慢慢走，把看海的時間留在清晨或傍晚。', location:'花蓮・自然散步', rule:'留意地面溫度', note:'避開高溫、強風與浪大區域' },
  { type:'stay', icon:'heart', en:'A COZY STAY', name:'山腳下的小旅宿', description:'熟悉的小毯子與安穩的角落，是旅途中最安心的休息站。', location:'宜蘭・安心住宿', rule:'事先預約確認', note:'確認體型限制、清潔費與押金' }
];
const PHOTOS = [
  { image:'assets/ian-hero.png', title:'山林裡的小隊長', description:'AI 範例圖片・白柴與湖畔的早晨' },
  { image:'assets/coast.svg', title:'今天，想住在海風裡', description:'範例插畫・東海岸的散步時光' },
  { image:'assets/forest.svg', title:'樹影下的小小冒險', description:'範例插畫・山林與白柴' },
  { image:'assets/cafe.svg', title:'一杯咖啡的午後', description:'範例插畫・森林咖啡小屋' },
  { image:'assets/camp.svg', title:'把日子過成喜歡的樣子', description:'範例插畫・星空下的小旅行' }
];
const DEFAULT_PLAN = [
  {id:'p1', day:1, time:'09:00', title:'出發！前往宜蘭', note:'出發前先散步上廁所，中途安排休息與喝水。'},
  {id:'p2', day:1, time:'11:00', title:'林間步道，慢慢散步', note:'全程繫牽繩，依伊恩的體力調整步行時間。'},
  {id:'p3', day:1, time:'13:00', title:'咖啡小屋，午餐與休息', note:'提前確認寵物規範，帶好水碗與熟悉的小墊子。'},
  {id:'p4', day:1, time:'16:00', title:'入住旅宿，今天就放空吧', note:'確認房間安全、補充飲水，讓伊恩好好休息。'},
  {id:'p5', day:2, time:'08:30', title:'早安，吃飽再出門', note:'照平常時間餵食，餐後先休息一下。'},
  {id:'p6', day:2, time:'10:00', title:'海邊小徑，聞聞海風', note:'先確認天氣與地面溫度，不靠近強浪。'},
  {id:'p7', day:2, time:'12:00', title:'午餐與回程小休息', note:'擦乾淨腳掌，整理行李，帶走所有垃圾。'},
  {id:'p8', day:2, time:'14:00', title:'回家，收藏這次的小旅行', note:'途中休息喝水，到家後留一點安靜的恢復時間。'}
];
const DEFAULT_EXPENSES = [
  {id:'e1',name:'來回油資與停車',category:'交通',amount:1200},
  {id:'e2',name:'一晚寵物友善住宿',category:'住宿',amount:3200},
  {id:'e3',name:'兩天的餐飲與咖啡',category:'餐飲',amount:1500},
  {id:'e4',name:'伊恩的零食補給',category:'毛孩',amount:300}
];
const KEY = 'ian-travel-journal-v1';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = name => `<svg class="icon"><use href="#i-${name}"/></svg>`;
const money = value => 'NT$ ' + value.toLocaleString('zh-TW',{maximumFractionDigits:2});
const clone = value => JSON.parse(JSON.stringify(value));
const categories = ['交通','住宿','餐飲','門票','毛孩','其他'];
let activeDay = 1, activePhoto = 0, toastTimer, storageWarned = false;
function freshState(){return {schema:1, plan:clone(DEFAULT_PLAN),expenses:clone(DEFAULT_EXPENSES),budget:8000,people:2,packing:{}};}
function validState(value){
  return value && value.schema===1 && Array.isArray(value.plan) && value.plan.length<=200 && value.plan.every(x=>x && typeof x.id==='string' && x.id.length<100 && [1,2].includes(x.day) && /^([01]\d|2[0-3]):[0-5]\d$/.test(x.time) && typeof x.title==='string' && x.title.trim().length>0 && x.title.length<=80 && typeof x.note==='string' && x.note.length<=200) && new Set(value.plan.map(x=>x.id)).size===value.plan.length && Array.isArray(value.expenses) && value.expenses.length<=1000 && value.expenses.every(x=>x && typeof x.id==='string' && x.id.length<100 && typeof x.name==='string' && x.name.trim().length>0 && x.name.length<=60 && categories.includes(x.category) && typeof x.amount==='number' && Number.isFinite(x.amount) && x.amount>0 && x.amount<=10000000) && new Set(value.expenses.map(x=>x.id)).size===value.expenses.length && Number.isFinite(value.budget) && value.budget>=0 && value.budget<=100000000 && Number.isInteger(value.people) && value.people>=1 && value.people<=99 && value.packing && typeof value.packing==='object' && !Array.isArray(value.packing) && ['water','lead','bags','food'].every(k=>value.packing[k]===undefined || typeof value.packing[k]==='boolean');
}
let state;
try{const raw=localStorage.getItem(KEY);const saved=raw?JSON.parse(raw):null;state=validState(saved)?saved:freshState();if(raw&&!validState(saved))setTimeout(()=>toast('原有資料格式不符，已載入範例。'),100);}catch{state=freshState();setTimeout(()=>toast('無法讀取本機儲存，請使用「儲存手帳」備份。'),100);}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{if(!storageWarned){toast('瀏覽器無法儲存，請匯出手帳備份。');storageWarned=true;}}}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3500);}
function uid(){return Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9);}
function renderJournals(region='all'){
  $('#journal-grid').innerHTML=JOURNALS.filter(j=>region==='all'||j.region===region).map(j=>`<article class="journal-card"><button class="card-photo" data-article="${j.id}" aria-label="閱讀日記：${j.title}"><img src="${j.image}" alt="${j.alt}" loading="lazy" width="600" height="400"><span class="tag">${j.tag}</span></button><div class="card-meta"><time>${j.date}</time><span>${icon('pin')} ${j.area}</span></div><h3>${j.title}</h3><p>${j.excerpt}</p><button class="read-button" data-article="${j.id}">閱讀這段旅程 ${icon('arrow')}</button></article>`).join('');
}
function renderPlaces(type='all'){
  $('#places-grid').innerHTML=PLACES.filter(p=>type==='all'||p.type===type).map(p=>`<article class="place-card">${icon(p.icon)}<span class="place-type">${p.en}</span><h3>${p.name}</h3><span class="badge">${p.rule}</span><p>${p.description}</p><span class="place-meta">${p.location} · 範例<br>${p.note}</span></article>`).join('');
}
function openArticle(id){const j=JOURNALS.find(x=>x.id===id);if(!j)return;$('#article-content').innerHTML=`<img class="article-cover" src="${j.image}" alt="${j.alt}"><div class="article-body"><div class="eyebrow">${j.date} · ${j.area} · 範例日記</div><h2>${j.title}</h2>${j.body.map(p=>`<p>${p}</p>`).join('')}<p class="info-note">旅行小提醒：${j.tip}</p></div>`;$('#article-dialog').showModal();}
function renderPlan(){
  const rows=state.plan.filter(p=>p.day===activeDay).sort((a,b)=>a.time.localeCompare(b.time));
  $('#timeline').innerHTML=rows.length?rows.map(p=>`<li><time>${p.time}</time><div class="timeline-content"><h4>${escapeHTML(p.title)}</h4><p>${escapeHTML(p.note)}</p></div><div class="row-actions"><button data-edit-plan="${escapeHTML(p.id)}" aria-label="編輯 ${escapeHTML(p.title)}">編輯</button><button data-delete-plan="${escapeHTML(p.id)}" aria-label="刪除 ${escapeHTML(p.title)}">刪除</button></div></li>`).join(''):'<li class="empty-state">今天還沒有行程，新增一個想去的地方吧。</li>';
}
function openPlan(id){const p=state.plan.find(x=>x.id===id);$('#plan-dialog-title').textContent=p?'編輯行程':'新增行程';$('#plan-id').value=p?.id||'';$('#plan-time').value=p?.time||'09:00';$('#plan-title').value=p?.title||'';$('#plan-note').value=p?.note||'';$('#plan-dialog').showModal();}
function renderExpenses(){
  $('#expense-rows').innerHTML=state.expenses.length?state.expenses.map(e=>`<tr><td>${escapeHTML(e.name)}</td><td><span class="category-tag">${e.category}</span></td><td class="amount">${money(e.amount)}</td><td><button class="delete-expense" data-delete-expense="${escapeHTML(e.id)}" aria-label="刪除 ${escapeHTML(e.name)}">×</button></td></tr>`).join(''):'<tr><td colspan="4" class="empty-state">還沒有花費，從上方加入第一筆吧。</td></tr>';
  updateSummary();
}
function updateSummary(){
  const cents=state.expenses.reduce((sum,x)=>sum+Math.round(x.amount*100),0),total=cents/100;
  $('#expense-total').textContent=money(total);$('#per-person').textContent=money(Math.round(cents/state.people)/100);
  const remaining=Math.round((state.budget-total)*100)/100;
  $('#budget-status').textContent=state.budget===0?'尚未設定預算':remaining>=0?`預算還有 ${money(remaining)}`:`已超出預算 ${money(Math.abs(remaining))}`;
  $('#budget-progress').style.width=state.budget>0?Math.min(100,total/state.budget*100)+'%':'0%';$('.budget-card').classList.toggle('over-budget',state.budget>0&&remaining<0);
}
function renderSettings(){$('#budget').value=state.budget;$('#people').value=state.people;$$('[data-pack]').forEach(x=>x.checked=Boolean(state.packing[x.dataset.pack]));}
function showPhoto(index){activePhoto=(index+PHOTOS.length)%PHOTOS.length;const p=PHOTOS[activePhoto];$('#lightbox-image').src=p.image;$('#lightbox-image').alt=p.description;$('#lightbox-caption').textContent=`${activePhoto+1} / ${PHOTOS.length}　${p.title}｜${p.description}`;}
function download(name,content,type){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportBook(){download('伊恩旅行手帳備份.json',JSON.stringify(state,null,2),'application/json;charset=utf-8');toast('已匯出手帳備份，可從行程區載入。');}
renderJournals();renderPlaces();renderPlan();renderSettings();renderExpenses();
$('#year').textContent=new Date().getFullYear();
$('#gallery-grid').innerHTML=PHOTOS.map((p,i)=>`<button class="gallery-item" data-photo="${i}" aria-label="放大：${p.title}"><img src="${p.image}" alt="${p.description}" loading="lazy" width="600" height="400"><span>${p.title}</span><i class="zoom-plus" aria-hidden="true">＋</i></button>`).join('');
$$('[data-region]').forEach(b=>b.addEventListener('click',()=>{$$('[data-region]').forEach(x=>{const selected=x===b;x.classList.toggle('selected',selected);x.setAttribute('aria-pressed',String(selected));});renderJournals(b.dataset.region);}));
$('#place-filter').addEventListener('change',e=>renderPlaces(e.target.value));
$$('[data-day]').forEach(b=>b.addEventListener('click',()=>{activeDay=Number(b.dataset.day);$$('[data-day]').forEach(x=>{const selected=x===b;x.classList.toggle('selected',selected);x.setAttribute('aria-pressed',String(selected));});renderPlan();}));
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.article)openArticle(b.dataset.article);
  if(b.hasAttribute('data-photo')){showPhoto(Number(b.dataset.photo));$('#photo-dialog').showModal();}
  if(b.hasAttribute('data-close'))b.closest('dialog').close();
  if(b.hasAttribute('data-export'))exportBook();
  if(b.dataset.editPlan)openPlan(b.dataset.editPlan);
  if(b.dataset.deletePlan){state.plan=state.plan.filter(p=>p.id!==b.dataset.deletePlan);save();renderPlan();toast('已刪除行程。');}
  if(b.dataset.deleteExpense){state.expenses=state.expenses.filter(x=>x.id!==b.dataset.deleteExpense);save();renderExpenses();toast('已刪除花費。');}
});
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
$('#add-plan').addEventListener('click',()=>openPlan());
$('#plan-form').addEventListener('submit',e=>{e.preventDefault();const title=$('#plan-title').value.trim();if(!title){toast('請填寫行程名稱。');$('#plan-title').focus();return;}const id=$('#plan-id').value;const existing=state.plan.find(p=>p.id===id);if(!existing&&state.plan.length>=200){toast('最多可儲存 200 筆行程。');return;}const row={id:id||uid(),day:existing?.day||activeDay,time:$('#plan-time').value,title,note:$('#plan-note').value.trim()};if(existing)state.plan[state.plan.indexOf(existing)]=row;else state.plan.push(row);save();renderPlan();$('#plan-dialog').close();toast('行程已儲存。');});
$('#reset-plan').addEventListener('click',()=>$('#confirm-dialog').showModal());
$('#confirm-reset').addEventListener('click',()=>{state.plan=clone(DEFAULT_PLAN);save();renderPlan();$('#confirm-dialog').close();toast('已還原兩天的範例行程。');});
$$('[data-pack]').forEach(x=>x.addEventListener('change',()=>{state.packing[x.dataset.pack]=x.checked;save();}));
$('#expense-form').addEventListener('submit',e=>{e.preventDefault();const name=$('#expense-name').value.trim(),amount=Number($('#expense-amount').value);if(!name){toast('請填寫花費項目。');$('#expense-name').focus();return;}if(!(amount>0&&amount<=10000000)){toast('請輸入有效金額。');return;}if(state.expenses.length>=1000){toast('最多可儲存 1,000 筆花費。');return;}state.expenses.push({id:uid(),name,category:$('#expense-category').value,amount:Math.round(amount*100)/100});save();renderExpenses();$('#expense-name').value='';$('#expense-amount').value='';$('#expense-name').focus();toast('已加入這筆花費。');});
for(const [id,key] of [['budget','budget'],['people','people']]){
  $('#'+id).addEventListener('input',e=>{const input=e.target;if(!input.value||!input.validity.valid)return;state[key]=Number(input.value);save();updateSummary();});
  $('#'+id).addEventListener('change',e=>{if(!e.target.value||!e.target.validity.valid){e.target.value=state[key];toast(key==='people'?'分攤人數請填 1 至 99 的整數。':'預算請填 0 至 100,000,000 的整數。');}});
}
$('#export-csv').addEventListener('click',()=>{const safeCell=value=>'"'+String(value).replace(/^[=+\-@\t\r]/,"'$&").replace(/"/g,'""')+'"';const rows=[['花費項目','分類','金額（新臺幣）'],...state.expenses.map(x=>[x.name,x.category,x.amount]),['總計','',Math.round(state.expenses.reduce((s,x)=>s+Math.round(x.amount*100),0))/100]];download('伊恩旅行花費.csv','\uFEFF'+rows.map(r=>r.map(safeCell).join(',')).join('\r\n'),'text/csv;charset=utf-8');toast('已下載花費 CSV，可用試算表開啟。');});
$('#import-file').addEventListener('change',async e=>{const input=e.target,file=input.files[0];if(!file)return;try{if(file.size>2000000)throw Error();const value=JSON.parse(await file.text());if(!validState(value))throw Error();const accepted=window.confirm('載入備份會取代目前的行程、花費與出門清單。確定載入嗎？');if(!accepted)return;state={schema:1,plan:value.plan.map(p=>({id:p.id,day:p.day,time:p.time,title:p.title,note:p.note})),expenses:value.expenses.map(x=>({id:x.id,name:x.name,category:x.category,amount:Math.round(x.amount*100)/100})),budget:value.budget,people:value.people,packing:Object.fromEntries(['water','lead','bags','food'].map(k=>[k,Boolean(value.packing[k])]))};save();renderPlan();renderSettings();renderExpenses();toast('手帳已載入。');}catch{toast('無法載入，請選擇有效的伊恩手帳 JSON 備份。');}finally{input.value='';}});
$('#prev-photo').addEventListener('click',()=>showPhoto(activePhoto-1));$('#next-photo').addEventListener('click',()=>showPhoto(activePhoto+1));
document.addEventListener('keydown',e=>{if(!$('#photo-dialog').open)return;if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(activePhoto-1);}if(e.key==='ArrowRight'){e.preventDefault();showPhoto(activePhoto+1);}});
$('#menu-toggle').addEventListener('click',()=>{const open=$('#menu-toggle').getAttribute('aria-expanded')!=='true';$('#menu-toggle').setAttribute('aria-expanded',String(open));$('#menu-toggle').setAttribute('aria-label',open?'關閉選單':'開啟選單');$('#navigation').classList.toggle('open',open);});
function closeMenu(){$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label','開啟選單');$('#navigation').classList.remove('open');}
$$('#navigation a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){$$('#navigation a').forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px',threshold:0});
$$('main section[id]').forEach(s=>observer.observe(s));
