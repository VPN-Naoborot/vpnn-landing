document.addEventListener("DOMContentLoaded",()=>{console.log("Загрузка скриптов");let e=document.querySelector("#block-e1f8080348ec4d31b682234d150cac72").nextElementSibling;if(window.test){e.innerHTML='\n    <div class="container">\n    <div class="row">\n        <div class="col-12">\n            <div class="custom-select">\n                <div class="custom-select-label">Валюта</div>\n                <div class="select-name" data-value="₽" data-name="Евро">\n                    <span>Рубли</span>\n                    <span class="select-image">\n                        <img src="/assets/images/select.svg" alt=""></span>\n                </div>\n                <div class="select-list " data-select-list>\n                    <div class="select-item" data-item data-value="€" data-name="Евро">Евро</div>\n                    <div class="select-item selected" data-item data-value="₽" data-name="Рубли">Рубли</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id="block-cards-items-list" class="cards row">\n    \n    </div>\n    </div>';const c=[{icon:"🤝",name:"Бесплатный",image:"/assets/images/personal.png",description:"Для документов, ЖКХ, налогов, кадастра и т.п.",price:"Бесплатно",currency:"",period:12,currencies:[],plans:[],tariff:"🤝  Бесплатный",secondary_info:"Будем рады вашим донатам",button:"Подключиться",features:["🐢 1 Мбит/с","✅ Доступ к сайтам","⏳ Ключ придёт в течение суток","🛑 Работает 7 дней","🛑 Нельзя смотреть видео и качать большие файлы"],speed:"~1 Мбит/с",plan_color:"color-yellow",button_color:""},{name:"Для документов",tariff:"📂  Для документов",image:"/assets/images/pro.png",icon:"📂",description:"Как бесплатный, но чуть стабильнее.",price:100,currency:"₽",period:12,currencies:[{currency:"€",price:1,plans:[{period:6,price:1.5,currency:"€"},{period:1,price:2,currency:"€"}]}],plans:[{period:6,price:130,currency:"₽"},{period:1,price:160,currency:"₽"}],secondary_info:"",button:"Подключиться",features:["🚜 2 Мбит/с","✅ Доступ к сайтам","✅ Ключ придёт за пару минут","✅ Работает, пока активна подписка","🛑 Нельзя смотреть видео и качать большие файлы","💙 Заботливая поддержка"],speed:"~2 Мбит/с",plan_color:"color-blue",button_color:""},{icon:"📺",name:"Для видео",tariff:"📺  Для видео",image:"/assets/images/team.png",description:"Для документов, развлечений и удалённой учёбы.",price:250,currency:"₽",period:12,currencies:[{currency:"€",price:3,period:12,plans:[{period:6,price:4,currency:"€"},{period:1,price:5,currency:"€"}]}],plans:[{period:6,price:330,currency:"₽"},{period:1,price:390,currency:"₽"}],secondary_info:"",button:"Подключиться",features:["🏎️ 10 Мбит/с","✅ Доступ к сайтам","✅ Ключ придёт за пару минут","✅ Работает, пока активна подписка","✅ Можно смотреть видео и качать большие файлы","💙 Заботливая поддержка","📶 Высокая скорость и стабильность"],speed:"~10 Мбит/с",plan_color:"color-red",button_color:"bg-blue"},{icon:"😎",tariff:"😎 Персональный",name:"Персональный",image:"/assets/images/enterprise.png",description:"Для документов, развлечений, удалённой учёбы и работы.",price:600,currency:"₽",period:12,currencies:[{currency:"€",price:8,period:12,plans:[{period:6,price:10,currency:"€"},{period:1,price:12,currency:"€"}]}],plans:[{period:6,price:850,currency:"₽"},{period:1,price:1e3,currency:"₽"}],secondary_info:"",button:"Подключиться",features:["🚀 40 Мбит/с","✅ Доступ к сайтам","✅ Ключ придёт за пару минут","✅ Работает, пока активна подписка","✅ Можно смотреть видео и качать большие файлы","💙 Заботливая поддержка","🔥 Максимальная скорость и стабильность","🔒 Выделенный IP","📍Можно выбрать город сервера"],speed:"~40 Мбит/с",plan_color:"color-purple",button_color:""}],r=(e,c)=>{let r=localStorage.getItem("current_currency_position");return r||(r="right"),"string"==typeof e?e:""+("right"===r?`${e} ${c}`:`${c} ${e}`)},n=e=>{let c="";return e.forEach(e=>c+=e),c},s=(e,c)=>{const r=(e=Math.abs(e)%100)%10;return e>10&&e<20?c[2]:r>1&&r<5?c[1]:1==r?c[0]:c[2]},i=e=>`\n     <div class="col-md-6 col-lg-3 col-sm-12 mb-3">\n        <div class="card">\n            <div class="card-header">\n                                           <span class="card-header-icon">${e.icon}</span>\n\n                <h4 class="plan-name ${e.plan_color}">\n                    ${e.name}\n                </h4>\n                <div class="header-secondary">\n                    <p>${e.description}</p>\n                </div>\n            </div>\n            <div class="card-body">\n                <div class="vertical-margin">\n                    <div class="price-wrap">\n                        <div class="card-price">\n                            <h4>${r(e.price,e.currency)}</h4>\n                            ${"string"!=typeof e.price?'<p class="card-price-description" >В месяц при оплате за год</p>':`<p>${e.secondary_info}</p>`}\n\n                            ${n(e.plans.map(e=>`<p class="card-price-description">${r(e.price,e.currency)} при оплате за ${e.period} ${s(e.period,["месяц","месяца","месяцев"])}</p>`))}\n                        </div>\n                    </div>\n                </div>\n                <div class="vertical-margin">\n                    <div class="card-action">\n                        <button class="btn card-btn-buy ${e.button_color}">${e.button}</button>\n                    </div>\n                </div>\n                <div class="vertical-margin">\n                    <ul class="features-list">\n                    ${n(e.features.map(e=>`<li>${e}</li>`))}\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>`,a=e=>{const c=document.querySelector("#block-cards-items-list");if(console.log(c),c){for(;c.firstChild;)c.removeChild(c.lastChild);e.forEach(e=>c.insertAdjacentHTML("beforeend",i(e)))}};a(c);const t=(e,c)=>e.map(e=>{const r=e.currencies.filter(e=>e.currency===c)[0];return r&&(e={...e,...r,currencies:{currency:e.currency,price:e.price,period:12,plans:e.plans}}),e}),o=document.querySelector(".custom-select .select-name");o.addEventListener("click",(function(e){const r=o.closest(".custom-select").querySelector(".select-list");r.classList.toggle("active"),r.addEventListener("click",e=>{const n=e.target.closest(".select-item");if(n){r.querySelectorAll(".select-item").forEach(e=>e.classList.remove("selected")),n.classList.add("selected"),o.textContent=n.dataset.name,o.dataset.name=n.dataset.name,o.dataset.value=n.dataset.value,setTimeout(()=>{r.classList.remove("active")},100);const e=t(c,n.dataset.value);a(e)}})}))}});