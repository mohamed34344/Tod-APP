var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r,i,a,o,s,c,l,u=e((()=>{n=document.querySelector(`.DarkThemeToggle`),r=document.querySelector(`.App`),i=document.querySelector(`.TaskSearchBar__input`),a=document.querySelector(`.TaskList__list`),o=document.querySelector(`.TaskList__link`),s=document.querySelector(`.TaskSearchBar__button`),c=()=>document.querySelectorAll(`.TaskList__deleteIcon`),l=()=>document.querySelectorAll(`.TaskList__checkbox`)})),d,f,p,m,h,g,_,v,y,b,x=e((()=>{u(),w(),d=e=>{let t=localStorage.getItem(e);return t?JSON.parse(t):!1},f=()=>{r?.classList.toggle(`App--isDark`),g(`darkModeFlag`,r?.classList.contains(`App--isDark`))},p=e=>{let t=``;e.forEach(e=>{t+=`<li class="TaskList__taskContent${e.isCompleted?` TaskList__taskContent--isActive`:``}">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg' src="/icon-checkmark.svg" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>
          ${e.value}
        </p>
        <img src="/icon-basket.svg"
             class='TaskList__deleteIcon'
             alt="basket-icon"
        />
      </div>
    </li>`}),a.innerHTML=t,i.value=``},m=(e,t)=>{if(confirm(`هل أنت متأكد من حذف المهمة؟`)===!1)return;let n=d(`tasks`);n.splice(t,1),g(`tasks`,n),y(n)},h=e=>{e.preventDefault();let t=i.value;if(!t)return;let n={value:t,isCompleted:!1},r=d(`tasks`)||[];r.push(n),g(`tasks`,r),y(r)},g=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},_=()=>{d(`darkModeFlag`)&&f(),y(d(`tasks`))},v=()=>{a.innerHTML=`<li class='EmptyList'>
      <img class='EmptyList__img' src="./assets/icon-empty.svg" alt="list is empty" />
      <p>قائمة المهام فارغة</p>
    </li>`},y=e=>{e?.length?(p(e),S()):v()},b=(e,t)=>{let n=d(`tasks`);e.currentTarget.parentElement.classList.toggle(`TaskList__taskContent--isActive`),n[t].isCompleted=!n[t].isCompleted,g(`tasks`,n)}})),S,C,w=e((()=>{u(),x(),S=()=>{c().forEach((e,t)=>{e.addEventListener(`click`,e=>m(e,t))}),l().forEach((e,t)=>{e.addEventListener(`click`,e=>b(e,t)),e.addEventListener(`keydown`,e=>e.key===`Enter`&&b(e,t))})},C=()=>{n.addEventListener(`click`,f),s?.addEventListener(`click`,h),o?.addEventListener(`click`,()=>{a?.classList.toggle(`TaskList__list--hideCompleted`),o?.classList.toggle(`TaskList__link--isActive`)})}}));t((()=>{w(),x(),_(),C()}))();