customElements.get("quick-add-modal")||customElements.define("quick-add-modal",class extends ModalDialog{constructor(){super(),this.modalContent=this.querySelector('[id^="QuickAddInfo-"]')}hide(preventFocus=!1){const cartNotification=document.querySelector("cart-notification")||document.querySelector("cart-drawer");cartNotification&&cartNotification.setActiveElement(this.openedBy),this.modalContent.innerHTML="",preventFocus&&(this.openedBy=null),super.hide()}show(opener){opener.setAttribute("aria-disabled",!0),opener.classList.add("loading"),opener.querySelector(".loading__spinner").classList.remove("hidden"),fetch(opener.getAttribute("data-product-url")).then(response=>response.text()).then(responseText=>{const responseHTML=new DOMParser().parseFromString(responseText,"text/html");this.productElement=responseHTML.querySelector('section[id^="MainProduct-"]'),this.productElement.classList.forEach(classApplied=>{(classApplied.startsWith("color-")||classApplied==="gradient")&&this.modalContent.classList.add(classApplied)}),this.preventDuplicatedIDs(),this.removeDOMElements(),this.setInnerHTML(this.modalContent,this.productElement.innerHTML),window.Shopify&&Shopify.PaymentButton&&Shopify.PaymentButton.init(),window.ProductModel&&window.ProductModel.loadShopifyXR(),this.removeGalleryListSemantic(),this.updateImageSizes(),this.preventVariantURLSwitching(),super.show(opener)}).finally(()=>{opener.removeAttribute("aria-disabled"),opener.classList.remove("loading"),opener.querySelector(".loading__spinner").classList.add("hidden")})}setInnerHTML(element,html){element.innerHTML=html,element.querySelectorAll("script").forEach(oldScriptTag=>{const newScriptTag=document.createElement("script");Array.from(oldScriptTag.attributes).forEach(attribute=>{newScriptTag.setAttribute(attribute.name,attribute.value)}),newScriptTag.appendChild(document.createTextNode(oldScriptTag.innerHTML)),oldScriptTag.parentNode.replaceChild(newScriptTag,oldScriptTag)})}preventVariantURLSwitching(){const variantPicker=this.modalContent.querySelector("variant-radios,variant-selects");variantPicker&&variantPicker.setAttribute("data-update-url","false")}removeDOMElements(){const pickupAvailability=this.productElement.querySelector("pickup-availability");pickupAvailability&&pickupAvailability.remove();const productModal=this.productElement.querySelector("product-modal");productModal&&productModal.remove();const modalDialog=this.productElement.querySelectorAll("modal-dialog");modalDialog&&modalDialog.forEach(modal=>modal.remove())}preventDuplicatedIDs(){const sectionId=this.productElement.dataset.section;this.productElement.innerHTML=this.productElement.innerHTML.replaceAll(sectionId,`quickadd-${sectionId}`),this.productElement.querySelectorAll("variant-selects, variant-radios, product-info").forEach(element=>{element.dataset.originalSection=sectionId})}removeGalleryListSemantic(){const galleryList=this.modalContent.querySelector('[id^="Slider-Gallery"]');galleryList&&(galleryList.setAttribute("role","presentation"),galleryList.querySelectorAll('[id^="Slide-"]').forEach(li=>li.setAttribute("role","presentation")))}updateImageSizes(){const product=this.modalContent.querySelector(".product");if(!product.classList.contains("product--columns"))return;const mediaImages=product.querySelectorAll(".product__media img");if(!mediaImages.length)return;let mediaImageSizes="(min-width: 1000px) 715px, (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)";product.classList.contains("product--medium")?mediaImageSizes=mediaImageSizes.replace("715px","605px"):product.classList.contains("product--small")&&(mediaImageSizes=mediaImageSizes.replace("715px","495px")),mediaImages.forEach(img=>img.setAttribute("sizes",mediaImageSizes))}}),customElements.get("quick-add-variations")||customElements.define("quick-add-variations",class extends HTMLElement{constructor(){super(),this.cart=document.querySelector("cart-notification")||document.querySelector("cart-drawer");const oButtons=$(this).children("button.option"),sButton=$(this).children("button.quick-add__submit"),tButton=document.querySelector('button[data-trigger-variations="'+this.getAttribute("data-product-id")+'"]'),self=this,popupCartErr=document.querySelector("#cart-popup");tButton&&tButton.addEventListener("click",function(event){event.stopPropagation(),document.querySelectorAll("quick-add-variations").forEach(e=>e.style.display="none"),self.style.display="block"}),document.addEventListener("click",function(event){document.dispatchEvent(new CustomEvent("geoRedirectClosed")),document.querySelectorAll("quick-add-variations").forEach(e=>{self.style.display="none"})}),oButtons.on("click",event=>{event.stopPropagation(),sButton.addClass("button-adding");const config=fetchConfig("javascript");config.headers["X-Requested-With"]="XMLHttpRequest",delete config.headers["Content-Type"];const variantId=event.target.getAttribute("data-variant-id"),formData=new FormData;formData.append("id",variantId),this.cart&&(formData.append("sections",this.cart.getSectionsToRender().map(section=>section.id)),formData.append("sections_url",window.location.pathname),this.cart.setActiveElement(document.activeElement)),config.body=formData,fetch(`${routes.cart_add_url}`,config).then(response=>response.json()).then(response=>{if(response.status){publish(PUB_SUB_EVENTS.cartError,{source:"product-form",productVariantId:variantId,errors:response.errors||response.description,message:response.message}),this.style.display="none",sButton.removeClass("button-adding"),popupCartErr.querySelector("p").innerHTML=response.message,popupCartErr.style.display="block",setTimeout(function(){popupCartErr.style.display="none"},3e3),console.log(response);return}else if(!this.cart){window.location=window.routes.cart_url;return}publish(PUB_SUB_EVENTS.cartUpdate,{source:"product-form",productVariantId:variantId,cartData:response}),this.cart.renderContents(response),this.style.display="none",sButton.removeClass("button-adding")}).catch(error=>console.error(error)).finally(()=>{this.cart&&this.cart.classList.contains("is-empty")&&this.cart.classList.remove("is-empty")})})}});
//# sourceMappingURL=/cdn/shop/t/8/assets/quick-add.js.map?v=106432510759325248831726078031
