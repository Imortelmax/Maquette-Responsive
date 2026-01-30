    const buttonUn = document.getElementById('button-un');
    const navbarBook = document.getElementsByClassName('book');

    const buttonDeux = document.getElementById('button-deux');
    const navbarConst = document.getElementsByClassName('dest');

    buttonUn.addEventListener("click", () => {
        if(getComputedStyle(navbarBook).display != "none"){
            navbarBook.style.display = "none";
        } else {
            navbarBook.style.display = "block";
        }
    })
