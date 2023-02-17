const przycisk = document.querySelector('.theme_ch');
const motyw = localStorage.getItem('theme');

if (motyw) {
    if (motyw == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("theme_button").innerHTML = "CIEMNY";
     }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("theme_button").innerHTML = "JASNY";
    }
}
else {
    localStorage.setItem('theme', 'light');
    document.getElementById("theme_button").innerHTML = "CIEMNY";
}




function zmiana_motywu() {
    const motyw = localStorage.getItem('theme');
    if (motyw == 'light') {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("theme_button").innerHTML = "JASNY";
    }
    else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("theme_button").innerHTML = "CIEMNY";
    }
}




przycisk.addEventListener("click", zmiana_motywu);

