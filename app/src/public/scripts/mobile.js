// let express = require('express');
// let router = express.Router();

let mobile = document.getElementById('ph__btn');
mobile.onclick = function () {

    let code = document.getElementById('country__code').value;
    let ph = document.getElementById('mobile__no').value;
    // try {
      fetch(`http://localhost:5555/mobiles/check`, {
            method: "POST",
            body: JSON.stringify({
                code,
                ph
            }),
            headers: {"content-type": 'application/json'}
        }) .then (function (response) {
            return response.json();
        }).then (function (response) {
            console.log(response);
        })

        // mobile ? res.render('pages/login.ejs', {
        //     mobile
        // }) : res.render('pages/signup.ejs', {
        //         mobile
        // });

    // } catch (err) {
    //     res.send(err);
    // }
}

// let mobile = document.getElementById('mobile__info');
// mobile.onsubmit = async function () {

//     let code = document.getElementById('country__code').value;
//     let ph = document.getElementById('mobile__no').value;
//     window.location.href = `http://localhost:5555/mobiles/check/${code}/${ph}`
// }


// if(localStorage.getItem("flag") === null) {
//     localStorage.setItem("flag", JSON.stringify(null));
// }
  
  
// // if(localStorage.getItem("glammUsers") === null) {
// //     localStorage.setItem("glammUsers", JSON.stringify([]));
// // }
  


// // let users = JSON.parse(localStorage.getItem('glammUsers'));


// let Flag = JSON.parse(localStorage.getItem('flag'));


// function checkExistence(tel) {
//     let temp = false;

//     let userData = JSON.parse(localStorage.getItem('glammUsers'));

//     for(let i = 0; i < userData.length; i++) {
//         if(userData[i].mobile == tel) {
//             temp = true;
//             break;
//         }
//     }

//     return temp;
// }

// function submitTel(e) {
//     e.preventDefault();


//     let userPhone = document.getElementById("mobile__no").value;

//     if (userPhone.length == 10 && (userPhone[0] == 9 || userPhone[0] == 8 || userPhone[0] == 7 || userPhone[0] == 6)) {

//         if(users.length < 1) {
            
//             const user_object = {

//                 countryCode: document.getElementById("country__code").value,
//                 mobile: document.getElementById("mobile__no").value,
//                 address: [],
//                 cart: [],
//                 wishlist: [],
//                 name: "",
//                 email: "",
//             }


//             users.push(user_object);
//             localStorage.setItem('glammUsers', JSON.stringify(users));

//             Flag = userPhone;
//             localStorage.setItem('flag', JSON.stringify(Flag));

//             window.location.href = "signup.html";
//         } else if (checkExistence(userPhone) == false) {

//             const user_object = {

//                 countryCode: document.getElementById("country__code").value,
//                 mobile: document.getElementById("mobile__no").value,
//                 address: [],
//                 cart: [],
//                 wishlist: [],
//                 name: "",
//                 email: "",
//             }


//             users.push(user_object);
//             localStorage.setItem('glammUsers', JSON.stringify(users));

//             Flag = userPhone;
//             localStorage.setItem('flag', JSON.stringify(Flag));

//             window.location.href = "signup.html";

//         } else {

//             Flag = userPhone;
//             localStorage.setItem('flag', JSON.stringify(Flag));

//             window.location.href = "login.html";

//         }

//     } else {

//         let msg = document.getElementById("show__alert")

//         msg.innerText = 'Please enter valid mobile number';

//     }
// }