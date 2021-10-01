// let addToBag;

// let addBtn = document.getElementById("addto__bag--btn");

// addBtn.onclick = addToBag;

// addToBag = async ()=> {
//     await 
// } 
let userId = JSON.parse(localStorage.getItem('flag'));
async function addtoBag(productId) {
    let user = await fetch(`http://localhost:5555/${userId}`);
    try {
       let product = await fetch(`http://localhost:5555/bags/${productId}/${userId}`)
       await fetch(`http://localhost:5555/bags/${product._id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                quantity: `${+product.quantity + 1}`
            }),
            headers: {"content-type": 'application/json'},
       })
    } catch (err) {
        await fetch(`http//localhost:5555/bags`, {
            method: 'POST',
            body: JSON.stringify ({
                productId,
                userId,
                quantity: 1,
            })
        })
        await fetch(`http//localhost:5555/users/${userId}`, {
            method: 'PATCH',
            body: JSON.stringify ({
                totalItemsInBag: `${user.totalItemsInBag + 1}`
            }),
            headers: {"content-type": 'application/json'}
        })
    }    
}