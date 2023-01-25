// var imie = 'Michal';
// var nazwisko = 'Jakis';
// var miejsce = 'Krakow';

// // console.log ("mam na imie " + imie + " na nazwisko " + nazwisko + " mieszkam w miejscowosci " + miejsce);

// // najnowszy sposob
// console.log (`mam na imie ${imie} a na nazwisko ${nazwisko}, mieszkam w ${miejsce}`);




// let a = 4
// let b = 5
// let c = 0.5

// let wynik = a * b * c;
// console.log (`Pole trojkata o wymiarach a * b * c to ` + wynik );

// // trzy rozne pola trojkata

// function pole (a, h)  {
    
//     let wynik = a*h/2;
//     console.log ( wynik );
// }

// pole(15, 10);
// pole(25, 1);
// pole(55, 10);
// pole(5, 6);
// pole(5, 10);


// var newObj {

// ` = "grafis"
// }

//this oznacza ten sam obiekt 

// const Czlowiek = {

// imie : "Wojciech",
// nawisko : "Kruczek",
// wzrost : "179",
// miasto : "Krakow",
//     informacje (nowemiasto){

//     console.log(`${this.imie} pochodzi z miasta ${this.miasto},nowym miejscem zamieszkania jest ${nowemiasto}`);


//         }
// }

// tmlp template

const Tmpl = {
    kolor(){

        console.log("dziala");
    }, 
    zmienkolor(){

        jQuery("body").toggleClass("czerwony");
    },
    mobile(){
        jQuery("nav").toggleClass("active");
    }


}

