// const header = document.querySelector('header');

// let addDiv = document.createElement('div');
// addDiv.setAttribute('id', 'add__div');

// let middleDiv = document.createElement('div');
// middleDiv.setAttribute('id', 'middle__div');

// let mainNavbar = document.createElement('nav');

// below is the function for the navigation bar


// function showNavbar() {

// let makeup = document.createElement('a');
// makeup.setAttribute('id', 'makeup__link')
// makeup.innerText = "MAKEUP";
// makeup.href = 'makeup.html';

// let hairCare = document.createElement('a');
// hairCare.setAttribute('id', 'hair__care');
// hairCare.innerText = "HAIR CARE";
// hairCare.href = 'hairCare.html';

// let skinCare = document.createElement('a');
// skinCare.setAttribute('id', 'skin__care');
// skinCare.innerText = "SKINCARE";
// skinCare.href = 'skinCare.html';

// let sanitizingCare = document.createElement('a');
// sanitizingCare.setAttribute('id', 'sanitizing__care');
// sanitizingCare.innerText = "SANITIZING CARE";
// sanitizingCare.href = 'sanitizingCare.html';

// let collection = document.createElement('a');
// collection.setAttribute('id', 'collection');
// collection.innerText = "TERMS & CONDITION";
// collection.href = 'termsAndConditions.html';

// let rewards = document.createElement('a');
// rewards.setAttribute('id', 'rewards');
// rewards.innerText = "REWARDS";
// rewards.href = 'referandearn.html';

// let aboutNav = document.createElement('a');
// aboutNav.setAttribute('id', 'about');
// aboutNav.innerText = "ABOUT";
// aboutNav.href = 'about.html';


// mainNavbar.append(makeup, hairCare, skinCare, sanitizingCare, collection, rewards, aboutNav);

// header.append(mainNavbar);

// }

// showNavbar()

// below is the function for middle div of header

// function showMiddleDiv() {

//     let mainLogo = document.createElement('a');
//     mainLogo.setAttribute('id', 'main__logo');
//     mainLogo.href = 'index.html';
//     mainLogo.innerHTML = `<img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="myglamm logo">`;

//     let searchBar = document.createElement('input');
//     searchBar.setAttribute('id', 'search__bar')
//     searchBar.type = 'search';
//     searchBar.placeholder = 'Find Lipstick, Eyeliner, Makeup Tutorial, etc';
//     searchBar.setAttribute('autocomplete', 'on');
//     searchBar.oninput = searchFunction;

//     let refer = document.createElement('a');
//     refer.setAttribute('id', 'refer__earn');
//     refer.innerText = 'Refer & Earn';
//     refer.href = `referandearn.html`;

//     let bagLink = document.createElement('a');
//     bagLink.setAttribute('id', 'bag__link');
//     bagLink.href = 'cart.html';
//     bagLink.innerHTML = `<span class="material-icons-outlined">shopping_cart<span id=bag__count></span></span>`;


//     // profile button start

//     let profile = document.createElement('a');
//     profile.setAttribute('id', 'profile');

//     Flag = JSON.parse(localStorage.getItem('flag'));

//     if (Flag == null) {
//         profile.innerText = 'Signup / Login';
//         profile.href = `user_tel.html`;
//     } else {
//         profile.innerText = 'Logout';
//         profile.href = `index.html`;
//     }

//     profile.onclick = function () {
//         if(profile.innerText == 'Logout'){
//             Flag = null;
//             localStorage.setItem('flag', JSON.stringify(Flag));
//             location.reload();
//         }
//     }


//     // profile.onclick = profileFunction;
//     // profile.innerHTML = `Profile`;

//     // profile btn end

//     middleDiv.append(mainLogo, searchBar, refer, bagLink, profile);
//     header.append(middleDiv);
//     header.insertBefore(middleDiv, mainNavbar);
// }
// showMiddleDiv();


// below is the function for advertising div

// function showAddDiv() {

//     let topLeft = document.createElement("a");
//     topLeft.setAttribute("id", "shop__now");
//     topLeft.href = 'comingsoon.html';
//     topLeft.innerHTML = `SHOP NOW`;

//     let topRight = document.createElement("a");
//     topRight.setAttribute("id", "myglamm__store");
//     topRight.href = 'myglammStoreLocator.html';
//     topRight.innerHTML = `MyGlamm Store`;

//     addDiv.append(topLeft, topRight);
//     header.append(addDiv);
//     header.insertBefore(addDiv, middleDiv);
// }
// showAddDiv();


// below is the function for search input

// function searchFunction() {

//     let products = JSON.parse(localStorage.getItem("glamm_products"))
//     let searchEntry = document.getElementById("search__bar").value;

//     products.forEach(function(ele, n) {

//         if(ele.name == searchEntry) {
//             window.location.href = `products/${n}.html`;
//         }
//     })
// }

// below is the function for profile button
function profile() {
    let profile = document.getElementById('profile');

    Flag = JSON.parse(localStorage.getItem('flag'));

    if (Flag == null) {
        profile.innerHTML = `<span class="material-icons-outlined">
            person_outline
        </span>`;
        profile.href = `mobiles`;
    } else {
        profile.innerHTML = `Logout`;
        profile.href = `myglamm`;
    }

        profile.onclick = function () {
            if(profile.innerText == 'Logout'){
                Flag = null;
                localStorage.setItem('flag', JSON.stringify(Flag));
                location.reload();
            }
        }

}
profile();



// function profileFunction() {

//     let profile = document.getElementById('profile').innerText;

//     Flag = JSON.parse(localStorage.getItem('flag'));

//     if(profile == 'Logout') {

//         profile.textContent = 'Signup / Login';
//         profile.href = `user_tel.html`;

//         localStorage.setItem('flag', JSON.stringify('null'));

//     }
// }
// profileFunction();


// Below is the show bag count function for

// function showBagCount() {
    
//     let div = document.getElementById("bag__count");
//     let Flag = JSON.parse(localStorage.getItem('flag'));
//     var currentCart;

//     if (Flag != null) {

//         currentCart = JSON.parse(localStorage.getItem('glammUsers'))

//         var count;

//         currentCart.forEach(({mobile, cart}) => {

//             if(Flag == mobile) {
//                 let temp = 0;
//                 cart.forEach(({quantity}) => {
//                     temp+=quantity;
//                 })
//                 if(temp > 0) {
//                     count = temp;
//                 }
//             }

//         })

//     } else {
//         currentCart = JSON.parse(localStorage.getItem('glammBag'))

//         let temp = 0;
//         currentCart.forEach(({quantity}) => {
//             temp+=quantity;
//         })
//         if(temp > 0) {
//             count = temp;
//         }
//     }

//     if (count > 0) {
//         div.innerHTML = count;
//     }
// }
// showBagCount();




// Rajat



let divD = document.createElement("div");
    divD.setAttribute("id","divElement");
    let a = document.getElementById("container");
 
    let makeUp = document.getElementById("makeup__link");
    let hairCare = document.getElementById("hair__care");
    let skinCare = document.getElementById("skin__care");
    let sanitize = document.getElementById("sanitizing__care");
    let tC = document.getElementById("terms__conditions");
    hairCare.addEventListener("mouseover",function(){
            divD.classList.add("active");
           divD.innerHTML = "";
            let table = document.createElement("table");
            let head = document.createElement("th");
            head.setAttribute("id","modalHead");
            head.innerHTML = "Hair Care";
            divD.append(head);
            let row = document.createElement("tr");
            let data = document.createElement("td");
            data.innerHTML = "Shampoo";
            let row2 = document.createElement("tr");
            row2.innerHTML = "conditioner";
            let row3 = document.createElement("tr");
            row3.innerHTML = "Hair Oil";
             
            let row4 = document.createElement("tr");
            row4.innerHTML = "Serum";
            let row5 = document.createElement("tr");
            row5.innerHTML = "Combos";
            
            row.append(data);
            
            table.append(row);
            table.append(row2);
            table.append(row3);
            table.append(row4);
            table.append(row5);
            divD.append(table);
            a.append(divD); 
            
    });
   
    skinCare.addEventListener("mouseover",function(){
            divD.classList.add("active");
            divD.innerHTML = "";
            let table = document.createElement("table");
            let head = document.createElement("th");
            head.setAttribute("id","modalHead");
            head.innerHTML = "Cleanser";
            divD.append(head);
            let row = document.createElement("tr");
            let data = document.createElement("td");
            data.innerHTML = "Toner";
            let row2 = document.createElement("tr");
            row2.innerHTML = "Moistureiser";
            let row3 = document.createElement("tr");
            row3.innerHTML = "Body Lotion";
             
            let row4 = document.createElement("tr");
            row4.innerHTML = "Sheet Mask";
            let row5 = document.createElement("tr");
            row5.innerHTML = "Lip Balms & Treatments";
            
            let row6 = document.createElement("tr");
            row6.innerHTML = "Face Sunscreen";
            
            let row7 = document.createElement("tr");
            row7.innerHTML = "Eye Cream";
            let row8 = document.createElement("tr");
           row8.innerHTML = "Face Scrub & Exfoliators";
            
            row.append(data);
            
            table.append(row);
            table.append(row2);
            table.append(row3);
            table.append(row4);
            table.append(row5);
            table.append(row6);
            table.append(row7);
            table.append(row8);
            divD.append(table);
            a.append(divD); 
            
    });
    
    sanitize.addEventListener("mouseover",function(){
            divD.classList.add("active");
           divD.innerHTML = "";
             
            let table = document.createElement("table");
            let head = document.createElement("th");
            head.setAttribute("id","modalHead");
            head.innerHTML = "SANITIZING CARE";
            divD.append(head);
            let row = document.createElement("tr");
            let data = document.createElement("td");
            data.innerHTML = "Sanitizing Wipes";
            let row2 = document.createElement("tr");
            row2.innerHTML = "Hand Sanitizer";
            let row3 = document.createElement("tr");
            row3.innerHTML = "Shower Gel";
             
            let row4 = document.createElement("tr");
            row4.innerHTML = "Body Moisuturizer";
            let row5 = document.createElement("tr");
            row5.innerHTML = "Soaps";
            
            let row6 = document.createElement("tr");
            row6.innerHTML = "Hand Care";
            let row7 = document.createElement("tr");
            row7.innerHTML = "FootCare";
            let row8 = document.createElement("tr");
            row8.innerHTML = "Surface Spray";
            
            let row9 = document.createElement("tr");
            row9.innerHTML = "Sanitizing Kits";
            let row10 = document.createElement("tr");
            row10.innerHTML = "Body Spray & Mists";
            
            let row11 = document.createElement("tr");
            row11.innerHTML = "Sanitizing Sprays";
            
            row.append(data);
            
            table.append(row);
            table.append(row2);
            table.append(row3);
            table.append(row4);
            table.append(row5);
            table.append(row6);
            table.append(row7);
            table.append(row8);
            table.append(row9);
            table.append(row10);
            table.append(row11);
            divD.append(table);
            
            a.append(divD); 
            
    });
    
    
    
    makeUp.addEventListener("mouseover",function(){
            divD.classList.add("active");
            divD.innerHTML = "";
            let table = document.createElement("table");
            table.cellSpacing = "60";
            let trow = document.createElement("tr");
            let head = document.createElement("th");
            let head2 = document.createElement("th");
            let head3 = document.createElement("th");
            let head4 = document.createElement("th");
            head.setAttribute("class","modalHead");
            head2.setAttribute("class","modalHead");
            head3.setAttribute("class","modalHead");
            head4.setAttribute("class","modalHead");
            head.innerHTML = "Lips";
            head2.innerHTML = "Face";
            head3.innerHTML = "Eyes";
            head4.innerHTML = "Nails";
            trow.append(head);
            trow.append(head2);
            trow.append(head3);
            trow.append(head4);
            let trow2 = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
             td1.innerHTML = "Lipstick   ";
             td2.innerHTML = "Fixing Powder   ";
             td3.innerHTML = "Eye Shadow   ";
             td4.innerHTML = "Gel   ";
           trow2.append(td1);
           trow2.append(td2);
           trow2.append(td3);
           trow2.append(td4);
    
           let trow3 = document.createElement("tr");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");
            let td8 = document.createElement("td");
             td5.innerHTML = "Liquid Lipstick   ";
             td6.innerHTML = "Primer";
             td7.innerHTML = "Eye Liner";
             td8.innerHTML = "Matte Nail Enamel";
           trow3.append(td5);
           trow3.append(td6);
           trow3.append(td7);
           trow3.append(td8);
    
            
            
           let trow4 = document.createElement("tr");
            let td9 = document.createElement("td");
            let td10 = document.createElement("td");
            let td11 = document.createElement("td");
            let td12 = document.createElement("td");
             td9.innerHTML = "Hi--Shine Lipistick   ";
             td10.innerHTML = "Concealer";
             td11.innerHTML = "Eyebrows";
             td12.innerHTML = "Matte Nail Polish";
           trow4.append(td9);
           trow4.append(td10);
           trow4.append(td11);
           trow4.append(td12);
           let trow5 = document.createElement("tr");
            let td13 = document.createElement("td");
            let td14 = document.createElement("td");
            let td15 = document.createElement("td");
            let td16 = document.createElement("td");
             td13.innerHTML = "Mattalic Lipstick   ";
             td14.innerHTML = "Foundation";
             td15.innerHTML = "Eye Sparkle ";
             td16.innerHTML = "Glossy Nail Enamel";
           trow5.append(td13);
           trow5.append(td14);
           trow5.append(td15);
           trow5.append(td16);
      
           let trow6 = document.createElement("tr");
            let td17 = document.createElement("td");
            let td18 = document.createElement("td");
            let td19 = document.createElement("td");
            let td20 = document.createElement("td");
             td17.innerHTML = "Matte Lipstick   ";
             td18.innerHTML = "Compact Powder";
             td19.innerHTML = "Eye Chalks ";
             td20.innerHTML = "Kits And Combos";
           trow6.append(td17);
           trow6.append(td18);
           trow6.append(td19);
           trow6.append(td20);
      
           let trow7 = document.createElement("tr");
            let td21 = document.createElement("td");
            let td22 = document.createElement("td");
            let td23 = document.createElement("td");
            let td24 = document.createElement("td");
             td21.innerHTML = "Lip Gloss   ";
             td22.innerHTML = "Setting Powder";
             td23.innerHTML = "Mascara ";
             td24.innerHTML = "Makeup Kits";
           trow7.append(td21);
           trow7.append(td22);
           trow7.append(td23);
           trow7.append(td24);
           let trow8 = document.createElement("tr");
            let td25 = document.createElement("td");
            let td26 = document.createElement("td");
            let td27 = document.createElement("td");
            let td28 = document.createElement("td");
             td25.innerHTML = "Lip Liners   ";
             td26.innerHTML = "Banana Powder";
             td27.innerHTML = "Kajal ";
             td28.innerHTML = "";
           trow8.append(td25);
           trow8.append(td26);
           trow8.append(td27);
           trow8.append(td28);
            table.append(trow);
            table.append(trow2);
            table.append(trow3);
            table.append(trow4);
            table.append(trow5);
            table.append(trow6);
            table.append(trow7);
            table.append(trow8);
            
            divD.append(table);
            a.append(divD); 
            
    });
    divD.addEventListener("mouseleave",function(){
           divD.classList.remove("active");
           divD.innerHTML = "";
            
    });