(function(){document.documentElement.classList.replace("no-js","js")})(),function(){window.addEventListener("tac.root_available",function(){document.querySelectorAll("#tarteaucitronRoot button").forEach(function(a){a.classList.contains("catToggleBtn")||"tarteaucitronClosePanel"===a.id||(a.classList.contains("tarteaucitronAllow")?a.classList.add("btn","btn-inverse","btn-primary","ms-2"):a.classList.add("btn","btn-inverse","btn-info","ms-2"))})},{once:!0}),window.addEventListener("tac.open_panel",function(){const a=document.getElementById("tarteaucitronServices_api");a.querySelectorAll("button").forEach(function(a){a.classList.contains("tarteaucitronAllow")?a.classList.add("btn","btn-primary","btn-inverse","ms-2"):a.classList.add("btn","btn-info","ms-2")})},{once:!0})}();/* Tab language IOS */function automaticTabPan(){var a={objectivec:{name:"Objective C",class:"item-oc",active:"active show",selected:"aria-selected=\"true\"",classTab:"objc"},swift:{name:"Swift",class:"item-s",active:"",selected:"aria-selected=\"false\"",classTab:"swift"},swiftui:{name:"Swift UI",class:"item-sui",active:"",selected:"aria-selected=\"false\"",classTab:"swiftui"}};document.querySelectorAll(".code-tab-pane").forEach(function(b,c){//console.log(item)
listLanguage=[],b.querySelectorAll("code").forEach(function(b){let c={...a[b.classList[0]],...{html:b.outerHTML}};listLanguage.push(c)}),b.innerHTML=generateTabPan(listLanguage,c)})}function generateTabPan(a,b){return html="<ul class=\"nav nav-tabs languageinfo\" role=\"tablist\">",a.forEach((a,c)=>{uniqueIDTab="tabID-0"+b.toString()+c.toString(),uniqueIDPan="tabID-1"+b.toString()+c.toString(),html+="<li class=\"nav-item "+a.class+"\" role=\"presentation\">",html+="<button class=\"nav-link "+a.active+"\" id=\""+uniqueIDTab+"\" data-bs-toggle=\"tab\" data-bs-target=\"#"+uniqueIDPan+"\" type=\"button\" role=\"tab\" aria-controls=\""+uniqueIDPan+"\" "+a.selected+">"+a.name+"</button>",html+="</li>"}),html+="</ul>",html+="<div class=\"tab-content languageinfotab\">",a.forEach((a,c)=>{uniqueIDTab="tabID-0"+b.toString()+c.toString(),uniqueIDPan="tabID-1"+b.toString()+c.toString(),html+=" <div class=\"tab-pane fade "+a.classTab+" "+a.active+"\" id=\""+uniqueIDPan+"\" role=\"tabpanel\" aria-labelledby=\""+uniqueIDTab+"\">",html+="<pre>",html+=a.html,html+="</pre>",html+=" </div>"}),html+="</div>",html}function manageEventTabPan(){function a(){document.querySelectorAll(".languageinfo li button").forEach(function(a){a.classList.remove("active"),a.setAttribute("aria-selected",!1)}),document.querySelectorAll(".languageinfotab div").forEach(function(a){a.classList.remove("show"),a.classList.remove("active"),a.setAttribute("aria-hidden",!0)})}function b(a,b){document.querySelectorAll("."+a+" button").forEach(function(a){a.classList.add("active"),a.setAttribute("aria-selected",!0)}),document.querySelectorAll("."+b).forEach(function(a){a.classList.add("show"),a.classList.add("active"),a.setAttribute("aria-hidden",!1)})}document.querySelectorAll(".item-oc button").forEach(function(c){c.addEventListener("click",function(){a(),b("item-oc","objc")})}),document.querySelectorAll(".item-s button").forEach(function(c){c.addEventListener("click",function(){a(),b("item-s","swift")})}),document.querySelectorAll(".item-sui button").forEach(function(c){c.addEventListener("click",function(){a(),b("item-sui","swiftui")})})}/* Filter bar */(function(){function a(a){const d=b.querySelector(`[data-tag="${a}"]`);d.classList.add("active"),d.setAttribute("aria-current","true"),c=d.innerText}const b=document.getElementById("filtersbar");let c="";if(!b)return;const d=new URL(window.location).searchParams.get("tag");if(null===d||"all"===d)return void a("all");a(d);const e=document.querySelectorAll("[data-tags]");let f=0;e.forEach(function(a){a.dataset.tags.includes(d)||(a.setAttribute("hidden",""),f++)});const g={en:"Articles for the theme "+c+" - Orange digital accessibility guidelines",fr:"Articles pour la th\xE9matique "+c+" - Recommandations accessibilit\xE9 num\xE9rique Orange"};document.getElementById("filtersbar_counter").innerHTML=`${e.length-f+""}`;let h=`${e.length-f+""}`+" "+g[Application.lang];document.title=h})(),function(){setTimeout(()=>{let a=document.getElementsByClassName("DocSearch-Search-Icon")[0];a.setAttribute("aria-hidden",!0),a.setAttribute("focusable",!1)},"1000")}(),function(){const a=new URL(window.location).searchParams.get("tag");if(searchArticleButton=document.getElementById("search_article"),null!==searchArticleButton){searchArticleButton.onclick=function(){// Declare variables
var b,c,d,e,f,g,h,j;for(b=document.getElementById("search-article-text").value,c=b.toUpperCase(),d=document.getElementById("list_article"),e=d.children,j=0,g=0;g<e.length;g++)"undefined"==typeof e[g].attributes.hidden&&(f=e[g].getElementsByTagName("h2")[0].innerText,h=e[g].getElementsByTagName("p")[0].innerText,-1<f.toUpperCase().indexOf(c)||-1<h.toUpperCase().indexOf(c)?(j++,e[g].style.display=""):e[g].style.display="none");if(document.getElementById("filtersbar_counter").innerText=j,null!==a)var k=document.getElementById("filtersbar").querySelector(`[data-tag="${a}"]`).innerText;const l={en:{h1:"found for research \""+b+"\"",title:j+" Articles"+(a?" for the theme "+k+"":"")+""+(b?" with the search \""+b+"\"":"")+" - Orange digital accessibility guidelines"},fr:{h1:"trouv\xE9s pour la recherche \""+b+"\"",title:j+" Articles"+(a?" pour la th\xE9matique "+k+"":"")+""+(b?" avec la recherche \""+b+"\"":"")+" - Recommandations accessibilit\xE9 num\xE9rique Orange"}};document.title=l[Application.lang].title,document.getElementById("search_title").innerText=""==c?"":l[Application.lang].h1};var b=document.getElementById("search-article-text");// Execute a function when the user presses a key on the keyboard
b.addEventListener("keypress",function(a){"Enter"===a.key&&(a.preventDefault(),document.getElementById("search_article").click())})}}(),function(){function a(){d.style.right="-99999px",d.style.opacity="0"}function b(){d.style.right=null,d.style.opacity="1"}function c(){window.pageYOffset>=e?b():a()}const d=document.getElementById("back-to-top"),e=300;d&&"undefined"!=typeof window.requestAnimationFrame&&(a(),window.addEventListener("scroll",function(){window.requestAnimationFrame(c)}))}();/* Priority nav*/function initPriorityNav(){const a=jQuery("#secondary-navigation");if(a){const b={en:"More",fr:"Plus"};if(!b.hasOwnProperty(Application.lang))throw new Error(`[initPriorityNav()] : lang '${Application.lang}' is not managed by the method's translations`);a.prioritynav(b[Application.lang])}}function highlightCodeBlocks(){if(hljs.initHighlighting(),!0===Application.vendors.highlightTitle){const a=document.querySelectorAll(".hljs");if(!a.length)return;const b={css:"CSS",html:"HTML",java:"Java",javascript:"JavaScript",json:"JSON",kotlin:"Kotlin",objectivec:"Objective-C",swift:"Swift",swiftui:"SwiftUI",xml:"XML"};a.forEach(function(a){const c=a.result.language,d=b[c]||c,e=document.createElement("div");e.classList.add("bg-primary","d-inline-block","p-2","font-weight-bold"),e.textContent=d,a.parentNode.insertBefore(e,a)})}}function tabPanelFocus(a,b){elementTarget=document.getElementById(a),new boosted.Tab(elementTarget).show(),elementTarget.focus(),document.getElementById(b).scrollIntoView({behavior:"smooth",block:"start"})}window.addEventListener("DOMContentLoaded",function(){//initPriorityNav()
automaticTabPan(),manageEventTabPan(),!0===Application.vendors.highlightJS&&highlightCodeBlocks()},{once:!0});