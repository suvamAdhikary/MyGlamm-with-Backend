let mobile = document.getElementById('mobile__info');
mobile.onsubmit = async function () {

    let code = document.getElementById('country__code').value;
    let ph = document.getElementById('mobile__no').value;

    let check = await fetch(`http://localhost:5555/mobiles/check/${code}/${ph}`)   

}