customElements.get("localization-form")||customElements.define("localization-form",class extends HTMLElement{constructor(){super(),this.elements={input:this.querySelector('input[name="locale_code"], input[name="country_code"]'),button:this.querySelector("button"),panel:this.querySelector(".disclosure__list-wrapper")},this.defaultLangs={hk:"zh-TW",mo:"zh-TW",us:"en",uk:"en",eu:"en",jp:"ja",tw:"zh-TW",ap:"en",sa:"en"},this.elements.button.addEventListener("click",this.openSelector.bind(this)),this.elements.panel.classList.contains("country-localization-modal")?this.querySelector('[class$="-modal__close"]').addEventListener("click",this.closeSelector.bind(this)):this.elements.button.addEventListener("focusout",this.closeSelector.bind(this)),this.addEventListener("keyup",this.onContainerKeyUp.bind(this)),this.querySelectorAll("a").forEach(item=>item.addEventListener("click",this.onItemClick.bind(this)))}hidePanel(){this.elements.button.setAttribute("aria-expanded","false"),this.elements.panel.setAttribute("hidden",!0)}onContainerKeyUp(event){event.code.toUpperCase()==="ESCAPE"&&this.elements.button.getAttribute("aria-expanded")!="false"&&(this.hidePanel(),event.stopPropagation(),this.elements.button.focus())}onItemClick(event){if(new URL(event.currentTarget.href).hostname===window.location.hostname){event.preventDefault();const form=this.querySelector("form"),dataMarket=event.currentTarget.dataset.market;this.elements.input.value=event.currentTarget.dataset.value,this.querySelector(".country-localization-modal")&&(this.querySelector('input[name="locale_code"]').value=this.defaultLangs[dataMarket]),form&&form.submit()}}openSelector(){this.elements.button.focus(),this.elements.panel.toggleAttribute("hidden"),this.elements.button.setAttribute("aria-expanded",(this.elements.button.getAttribute("aria-expanded")==="false").toString())}closeSelector(event){const isChild=this.elements.panel.contains(event.relatedTarget)||this.elements.button.contains(event.relatedTarget);(!event.relatedTarget||!isChild)&&this.hidePanel()}});
//# sourceMappingURL=/cdn/shop/t/8/assets/localization-form.js.map?v=59460679592943474051726078031
