let itemContainerElement = document.querySelector('.items-container');

let innerHTML = '';
items.forEach(item=>{
    innerHTML += 
    `<div class="item-container">
                <div class="item">
                    <img class="jhumke" src="${item.item_image}" alt="">
                </div>
                <div class="spon">
                    <span class="Sponsored"><p>Sponsored</p></span>
                    <span ><img class="Sponsored-id" src="/images/spon.png" alt=""></span>
                </div>
                <div class="company-name">
                    ${item.comapny_name}
                </div>
                <div class="quality">
                    ${item.quality}
                </div>
                <div class="rating">
                    
                    <span>${item.rating.stars}K</span>
                    <span><img class="rating-img" src="${item.rating.noOfStats}" alt=""></span>
                    <span><img class="rating-img" src="${item.rating.noOfStats}" alt=""></span>
                    <span><img class="rating-img" src="${item.rating.noOfStars}" alt=""></span>
                    <span><img class="rating-img" src="${item.rating.noOfStats}" alt=""></span>

                </div>

                <div>
                    <span class="price"><sup class="rupee">${item.price_symbol}</sup>${item.current_price}</span>
                    <span class="mrp">M.R.P: <span class="current-price">${item.original_price}</span> </span>
                </div>

                <div class="chhut">
                    ${item.discount_per}
                </div>

                <div class="delivery">
                    FREE delivery <span class="delivery-date">${item.delivery_date}</span>
                </div>

                <div>
                    <button class="card-button">${item.Card_button}</button>
                </div>
            </div>`
})


itemContainerElement.innerHTML = innerHTML;