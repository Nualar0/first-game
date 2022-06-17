document.querySelector("#submit").onclick = function randoms() {
    let rand = Math.floor(Math.random() * 5);
    let rand2 = Math.floor(Math.random() * 5);
    let rand3 = Math.floor(Math.random() * 5);
    document.querySelector("#result").innerText = rand;
    document.querySelector("#result2").innerText = rand2;
    document.querySelector("#result3").innerText = rand3;

    //Ноль
    if (rand === 0) {
        document.querySelector("#result").innerHTML = `<img src='./img/0.jpg' alt=''>`
    }
    if (rand2 === 0) {
        document.querySelector("#result2").innerHTML = `<img src='./img/0.jpg' alt=''>`
    }
    if (rand3 === 0) {
        document.querySelector("#result3").innerHTML = `<img src='./img/0.jpg' alt=''>`
    }

    // Первый
    if (rand === 1) {
        document.querySelector("#result").innerHTML = `<img src='./img/1.jpg' alt=''>`
    }
    if (rand2 === 1) {
        document.querySelector("#result2").innerHTML = `<img src='./img/1.jpg' alt=''>`
    }
    if (rand3 === 1) {
        document.querySelector("#result3").innerHTML = `<img src='./img/1.jpg' alt=''>`
    }

    // Второй
    if (rand === 2) {
        document.querySelector("#result").innerHTML = `<img src='./img/2.jpg' alt=''>`
    }
    if (rand2 === 2) {
        document.querySelector("#result2").innerHTML = `<img src='./img/2.jpg' alt=''>`
    }
    if (rand3 === 2) {
        document.querySelector("#result3").innerHTML = `<img src='./img/2.jpg' alt=''>`
    }

    // Третий
    if (rand === 3) {
        document.querySelector("#result").innerHTML = `<img src='./img/3.jpg' alt=''>`
    }
    if (rand2 === 3) {
        document.querySelector("#result2").innerHTML = `<img src='./img/3.jpg' alt=''>`
    }
    if (rand3 === 3) {
        document.querySelector("#result3").innerHTML = `<img src='./img/3.jpg' alt=''>`
    }

    // Четвертый
    if (rand === 4) {
        document.querySelector("#result").innerHTML = `<img src='./img/4.jpg' alt=''>`
    }
    if (rand2 === 4) {
        document.querySelector("#result2").innerHTML = `<img src='./img/4.jpg' alt=''>`
    }
    if (rand3 === 4) {
        document.querySelector("#result3").innerHTML = `<img src='./img/4.jpg' alt=''>`
    }

    // Пятый
    if (rand === 5) {
        document.querySelector("#result").innerHTML = `<img src='./img/5.jpg' alt=''>`
    }
    if (rand2 === 5) {
        document.querySelector("#result2").innerHTML = `<img src='./img/5.jpg' alt=''>`
    }
    if (rand3 === 5) {
        document.querySelector("#result3").innerHTML = `<img src='./img/5.jpg' alt=''>`
    }

    // Выйгрыш
    if ((rand === rand2) && (rand2 === rand3)) {
        // setTimeout(() => {  alert('You WIN!'); }, 5000);
        const win = document.querySelector('.b-popup-vis');
        const btnstart = document.querySelector('#submit');
        btnstart.classList.add('none');
        win.classList.remove('none');
    }

}

document.querySelector('.btn').onclick = function randoms() {
    const win = document.querySelector('.b-popup-vis');
    const btnstart = document.querySelector('#submit');
    btnstart.classList.remove('none');
    win.classList.add('none');
}



