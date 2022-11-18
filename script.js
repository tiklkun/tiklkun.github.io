"use strict";

function сlickLike(btn) {
    let heart = btn.children[0];
    heart.classList.toggle("fa-solid");
    if (heart.style.color == "rgb(223, 42, 42)"){
        heart.style.color = "rgb(0, 0, 0)";
    }else{
        heart.style.color = "rgb(223, 42, 42)";
    }
}

