
let bagItem1;
let bagItemObject;
let bagItems;
let arr,count = 0;
let TotalMRPPrice = 0;
let TotalPrice = 0;
onLoad();
function onLoad() {

    bagItem1 = localStorage.getItem('bagItems');
    bagItem1 = JSON.parse(bagItem1);
    loadbagItemObject();
    dispalyBagItem();
}
function loadbagItemObject() {
    console.log(bagItem1);
}
function cross(key) {

    console.log(bagItems);
    if (typeof (bagItem1 == String)) {

        // arr = bagItem1.split(",");
        console.log("string string")
        let index = bagItem1.indexOf(key);
        bagItem1.splice(index, 1);
        // localStorage.setItem('bagItems',bagItem1);
        // bagItem1 = localStorage.getItem('bagItems');
        console.log("cross this:" + key);
    } else {
        let index = bagItem1.indexOf(key);
        bagItem1.splice(index, 1);
        // localStorage.setItem('bagItems',bagItem1);
        // bagItem1 = localStorage.getItem('bagItems');
        console.log("cross this:" + key);
    }



    dispalyBagItem();
}
function dispalyBagItem() {
    let ContainerElement = document.querySelector('.SelectedItem');
    let innerHTML = '';
    if (bagItem1[0] == items[0].id) {
        console.log(true);
    } else {
        console.log("vlaue of arr:" + bagItem1[0]);
        console.log("vlaue of item:" + items[0].id);
        console.log(false);
    }


    for (let i = 0; i < items.length; i++) {
        items.forEach(product => {

            if (bagItem1[i] == product.id) {


                innerHTML += `<div class="NoOfSelectedItems">

                    
                    <span class="ItemPic">
                        <img class="Item" src="${product.item_image}" alt="itemPic">
                    </span>
                    <span class="ItemDetails">
                        <div class="CompanyName">${product.comapny_name}</div>
                        <div class="itemName">${product.Item_name}</div>
                        <div class="Price">${product.current_price}</div>
                        <div class="returnPolicy">${product.return_Policy}</div>
                        <div class="deliveryDate">${product.delivery_date}</div>
                    </span>
                    
                    <div class="cross">
                        <i class="fa fa-cloud"></i>
                        <i class="material-icons"><img src="/images/cross.png" class="cros" alt="cross" onclick = "cross(${product.id});" ></i>
                    </div>

                    </div>`;
                i++;

                count++;

                TotalMRPPrice = parseInt(TotalMRPPrice) + parseInt(product.current_price);
                TotalPrice = TotalMRPPrice + 99*count - 123*count;
                

            }
        });
    }
    document.querySelector(".TotalMRPPrice").innerHTML = TotalMRPPrice; 
    document.querySelector(".TotalPrice").innerHTML = TotalPrice;
    document.querySelector(".noOfItems").innerHTML = count;
    ContainerElement.innerHTML = innerHTML;




}



