const przycisk = document.querySelector('.theme_ch');
const motyw = localStorage.getItem('theme');
const form = document.querySelector('.quizform');
const odp = Array.from(document.querySelectorAll('.odpowiedzi'));
const wszystkie_pyt = document.querySelectorAll('.pytanie');
const wyswietlanie = sessionStorage.getItem('czy_zrobiony');


    


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


if (wyswietlanie == 'tak') {
    var boxq = document.getElementById("usun");
    var tekst = document.createTextNode("Gratulacje! Udalo Ci sie odpowiedziec prawidlowo na wszystkie odpowiedzi! :)");
    boxq.removeChild(boxq.childNodes[1]);
    var odpo = document.createElement("p");
    boxq.appendChild(odpo);
    odpo.appendChild(tekst);
    boxq.removeChild(boxq.childNodes[1]);

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


const fquiz = e => {
    e.preventDefault();
    
    const zaznaczone = odp.filter(odp => odp.checked);

    const istrue = zaznaczone.every(odp => odp.value === 'true');
  
    const czy_wszystkie = zaznaczone.length === wszystkie_pyt.length;
    
    if (czy_wszystkie) {
        if (istrue) {
           
            var boxq = document.getElementById("usun");
            var tekst = document.createTextNode("Gratulacje! Udalo Ci sie odpowiedziec prawidlowo na wszystkie odpowiedzi! :)");
            boxq.removeChild(boxq.childNodes[1]);
            var odpo = document.createElement("p");
            boxq.appendChild(odpo);
            odpo.appendChild(tekst);
            sessionStorage.setItem('czy_zrobiony', 'tak');
            $(function () {
                $("#dialog2").dialog("close");
            });
            $(function () {
                $("#dialog").dialog("close");
            });
        }
        else {
            $(function () {
                $("#dialog2").dialog("open");
            });
        }

    } else {
        
       
            $(function () {
                $("#dialog").dialog("open");
            });
        
    }

   
}


przycisk.addEventListener("click", zmiana_motywu);
form.addEventListener("submit", fquiz);
