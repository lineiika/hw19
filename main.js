
const btnLink = document.querySelector(".btnLink");
const btnPromtLink = document.querySelector(".btnPrompt");
let link;

btnPromtLink.addEventListener('click', function () {
    link = prompt("Enter your link");
    if (link.startsWith('http') === false && link.startsWith('https') === false) {
        link = `https://${link}`;
    }
    location.href = link;
});

btnLink.addEventListener("click", function (e) {
    let btnUrl = e.target.getAttribute('data-url');

    if (btnUrl.startsWith('http') === false && btnUrl.startsWith('https') === false) {
        btnUrl= `https://${btnUrl}`;
    }
    location.href = btnUrl;
})