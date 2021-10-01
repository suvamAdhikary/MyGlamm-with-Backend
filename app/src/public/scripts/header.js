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