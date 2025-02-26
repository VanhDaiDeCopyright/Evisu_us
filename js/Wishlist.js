var wPage=document.querySelector(".wishlist-page"),bodyPage=document.querySelector("body");wPage&&window.location.pathname.includes("wishlist")&&(wPage.classList.add("loading-page"),bodyPage.style.overflow="hidden"),document.addEventListener("DOMContentLoaded",function(){var link=document.createElement("link");link.href=window.customAccountCSSUrl,link.rel="stylesheet",link.type="text/css",link.media="all",document.head.appendChild(link);var wishlistContent=document.createElement("div");if(wishlistContent.className="row",wishlistContent.innerHTML=`
    <div class="column main col-lg-9 col-md-9 col-sm-12 col-xs-12 pull-right">
    </div>
    <div class="sidebar sidebar-main col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <div class="block account-nav">
        <div class="block-title account-nav-title">
          <h3 class="title">Account Navigation<i class="pe-7s-angle-down"></i>
          </h3>
        </div>
        <div class="content account-nav-content" id="account-nav">
          <ul class="nav items">
            <li class="nav item current">
            <a href="/account">My Account</a>
            </li>
            <li class="nav item">
              <a href="/pages/orders">My Orders</a>
            </li>
            <li class="nav item">
              <strong>My Favorite</strong>
            </li>
            <li class="nav item">
              <span class="delimiter"></span>
            </li>
            <li class="nav item">
              <a href="/account/addresses/">Address Book</a>
            </li>
            <li class="nav item">
              <a href="/pages/edit-account">Account Information</a>
            </li>
            <li class="nav item">
              <span class="delimiter"></span>
            </li>
            <li class="nav item">
              <a href="/pages/newsletter-subscription/">Newsletter Subscriptions</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebars sidebar-additional">
        <div class="block block-wishlist" data-bind="scope: 'wishlist'">
          <div class="block-title">
            <strong class="title">
              My Favorite
              <span class="counter">(<span class="number  wishlist-total-count"></span> <span>items</span>)</span>
            </strong>
          </div>
          <div class="block-content">
            <div class="wishlist-sidebar">
              <div sidebar-wishlist=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,!document.querySelector(".customer.account,.customer.order,.customer.addresses,.storecredit-container,.page-orders,.tmp-account ")){let addHead2=function(){const newDiv=document.createElement("div");let transMyFavoriteText=document.getElementById("trans-my-favorite").innerText;newDiv.innerHTML=`
        <h1 class="page-header" style="padding-left: 16px; margin-bottom:0">
          <span class="base" data-ui-id="page-title-wrapper">${transMyFavoriteText}</span>
        </h1>
      `;const mainContent=document.getElementById("MainContent");mainContent&&mainContent.insertBefore(newDiv,mainContent.firstChild)};var addHead=addHead2,intervalId=setInterval(function(){var transQuickShop=document.getElementById("trans-my-favorite-quick-shop").innerText,wishlistPage=document.querySelector(".wishlist-page"),wishlistPageContain=document.querySelector("#wishlist-page-contain"),wishlistRow=document.querySelector(".wishlist-row"),wishlistSidebar=document.querySelector(".wishlist-sidebar"),countI=document.querySelector(".sidebar-additional .counter .number");if(wishlistPageContain&&document.querySelector(".wishlist-page")){let updateItemCount2=function(){let itemCount=document.querySelectorAll("#wishlist-page-contain .wishlist-column").length,counterElement=document.querySelector(".block-title .number");counterElement&&(counterElement.innerText=itemCount)},addEventListenersToWishlistRow2=function(row){row.querySelectorAll("button.wishlist-cart").forEach(addToCartButton=>{addToCartButton&&(addToCartButton.innerText=document.getElementById("trans-add-to-cart").innerText,addToCartButton.addEventListener("click",function(event){event.stopPropagation();const productId=this.getAttribute("data-product_id"),variantId=this.getAttribute("data-variant_id"),quantity=this.getAttribute("data-quntity");document.querySelector(`#wishlist-page-contain .wishlist-cart[data-product_id='${productId}']`).click(),console.log(`Add to cart clicked for product ${productId} with variant ${variantId}, quantity ${quantity}`),setTimeout(()=>{this.closest(".wishlist-column").remove(),updateItemCount2()},1700)}))})};var updateItemCount=updateItemCount2,addEventListenersToWishlistRow=addEventListenersToWishlistRow2,wishlistRows=document.querySelectorAll(".wishlist-column");document.querySelectorAll(".wh-grid-layout .wishlist_page_remove_product").forEach(button=>{button.addEventListener("click",function(){const parentId=this.closest(".wishlist-column").id;console.log(parentId),setTimeout(()=>{document.querySelector(`.wishlist-sidebar #${parentId}`).remove()},1e3)})}),wishlistRows.forEach(function(row){if(!row.querySelector(".quickshop-button")){var wishlistTopDiv=row.querySelector(".wishlist-top");if(wishlistTopDiv){var infoInnerDiv=document.createElement("div");infoInnerDiv.className="info-inner";var button=document.createElement("button");button.innerText=transQuickShop,button.className="quickshop-button",button.addEventListener("click",function(){var handle=getHandleFromHref(row);handle&&setupGrid(handle)}),infoInnerDiv.appendChild(button),wishlistTopDiv.appendChild(infoInnerDiv)}}});var quickshopContainer=document.querySelector(".quickshop-container");if(!quickshopContainer&&document.querySelector(".wh-grid-layout")){var div=document.createElement("div");div.className="quickshop-container",document.querySelector(".wh-grid-layout").appendChild(div)}document.querySelector(".wishlist-page").appendChild(wishlistContent);let itemN=document.querySelectorAll(".wishlistajaxLoad .wishlist-column").length;countI&&(countI.innerHTML=itemN),wishlistPage.classList.add("customer","account"),document.querySelector(".column.main").appendChild(wishlistPageContain);var clonedWishlistRow=wishlistRow.cloneNode(!0);wishlistSidebar.appendChild(clonedWishlistRow),addHead2(),wPage.classList.remove("loading-page"),bodyPage.style.overflow="auto",addEventListenersToWishlistRow2(clonedWishlistRow),clearInterval(intervalId)}},1e3)}});function scrollToQuickshop(){const quickshopContainer=document.querySelector(".quickshop-container");if(quickshopContainer){const offsetPosition=quickshopContainer.getBoundingClientRect().top+window.scrollY-170;window.scrollTo({top:offsetPosition,behavior:"smooth"})}else console.error("Element .quickshop-container not found.")}function addQuickshopRemove(){var div=document.querySelector(".quickshop-container"),removeButton=document.createElement("button");removeButton.className="quickshop-remove",removeButton.id="quickshop-remove",removeButton.innerHTML='<svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M2.276.39L12 10.115 21.724.391c.486-.486 1.254-.519 1.777-.098l.108.098c.521.52.521 1.364 0 1.885L13.886 12l9.723 9.724c.521.52.521 1.365 0 1.885-.52.521-1.364.521-1.885 0L12 13.886l-9.724 9.723c-.486.486-1.254.519-1.777.098l-.108-.098c-.521-.52-.521-1.364 0-1.885L10.114 12 .391 2.276C-.13 1.756-.13.911.39.391.91-.13 1.755-.13 2.276.39z" id="close__a"></path></defs><use xlink:href="#close__a" fill-rule="evenodd"></use></svg>',removeButton.addEventListener("click",function(){div.innerHTML=""}),div.appendChild(removeButton)}function getHandleFromHref(row){var anchor=row.querySelector("a[href*='/products/']");if(anchor){var url=new URL(anchor.href),handle=url.pathname;return handle?handle.split("?")[0]:null}return null}var setupGrid=function(handle){let grid=document.querySelector(".quickshop-container");const requests=function(handle2){var productTileTemplateUrl=handle2;return console.log(productTileTemplateUrl,"productTileTemplateUrl"),fetch(productTileTemplateUrl).then(function(res){return res.text()})};console.log(requests,"requests"),document.body.classList.add("loading"),Promise.all([requests(handle)]).then(function(responses){var wishlistProductCards=responses.join("");if(grid){let template=document.createElement("div");template.innerHTML=wishlistProductCards;let productTemplate=Array.from(template.querySelectorAll('[id^="MainProduct-template--"]')).find(el=>el.id.endsWith("__main"));if(productTemplate){grid.innerHTML=productTemplate.outerHTML;let moreDetailsDiv=document.createElement("div"),transMoreDetailText=document.getElementById("trans-more-detail").innerText;moreDetailsDiv.className="box-more-details",moreDetailsDiv.innerHTML=`
          <a target="_parent" title="${transMoreDetailText}" href="${handle}">
            <span>${transMoreDetailText}<i class="icon-arrow_down"></i></span>
          </a>
        `;let productInfo=grid.querySelector("product-info");console.log(11,productInfo),productInfo&&productInfo.appendChild(moreDetailsDiv)}else grid.innerHTML=wishlistProductCards;grid.style.width="100%",grid.style.height="100%",addQuickshopRemove(),setTimeout(()=>{scrollToQuickshop()},300),grid.querySelectorAll("script").forEach(script=>{let newScript;script.type==="application/json"?(newScript=document.createElement("script"),newScript.type=script.type,newScript.innerHTML=script.innerHTML,newScript.id=script.id,newScript.dataset=script.dataset,grid.querySelector("variant-radios").appendChild(newScript)):(newScript=document.createElement("script"),script.src?(newScript.src=script.src,newScript.defer=script.defer):newScript.innerHTML=script.innerHTML,document.body.appendChild(newScript)),script.remove()})}document.body.classList.remove("loading")}).catch(function(error){console.error("Error loading product data:",error)})};const observer=new MutationObserver(()=>{document.querySelector(".pswp--open")?bodyPage.style.overflow="hidden":bodyPage.style.overflow="auto"});observer.observe(bodyPage,{childList:!0,subtree:!0});
//# sourceMappingURL=/cdn/shop/t/8/assets/Wishlist.js.map?v=41986989145671234981727342712
