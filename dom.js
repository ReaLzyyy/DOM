// JavaScript 21.06.21 VLN Nauja užduotis.Duotas išeitinis HTML failas.
// Reikia susikurti atskirą JS failą ir jame atlikti užduotis Pačio HTML failo nekeisti! Užduoties sąlygos apačioje
// https://docs.google.com/document/d/1MnbJ51fnTAwuLvDiJL6ms8J7l-9fGCJVgNpkdgrg0IE/edit?usp=sharing

// a.Atskiri elementai
// 1.Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector("h1").style.color = "darkgreen";
// 2.Tagui i pridėti klasę small;
document.querySelector("i").classList.add("small");
// 3.Iš tago h1 pašalinti klasę main;
document.querySelector("i").classList.remove("main");
// 4.Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;
document.querySelector("h1+h2").classList.replace("main", "first");
// 5.Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector("h2 > span:first-child").style.fontSize = "10px";
document.querySelector("h2 > span:first-child").style.color = "grey";

// b.Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// 1.Suskaičiuoti kiek yra h2 tagų;
console.log("h2 tags in document:", document.querySelectorAll("h2").length);
// 2.Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
console.log(
    'h2 tags in document without class "first":',
    document.querySelectorAll("h2").length -
        document.querySelectorAll("h2.first").length
);
// 3.Visus h2 tagus nuspalvinti šviesiai mėlynai
document
    .querySelectorAll("h2")
    .forEach((element) => (element.style.color = "lightblue"));
// 4.Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
document
    .querySelectorAll("div > prices")
    .forEach((element) => element.classList.add("price-tag"));
// 5.Pabraukti visus tagus su klase new;
document
    .querySelectorAll(".new")
    .forEach((element) => (element.style.textDecoration = "underline"));
// 6.Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
console.log("Animal categories:", document.querySelectorAll("ul").length);
// 7.Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
document.querySelectorAll("ul").forEach((element) => {
    element.style.border = "1px solid pink";
    element.style.padding = "15px 50px";
});
// 8.Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log("New animals:", document.querySelectorAll(".new").length);
// 9.Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
console.log("New girafees", document.querySelectorAll("#zirafos .new").length);
console.log(
    "New predators",
    document.querySelectorAll("#plesrunai .new").length
);
console.log("New snakes", document.querySelectorAll("#gyvates .new").length);
console.log(
    "New herbivores",
    document.querySelectorAll("#zoliaedziai  .new").length
);

// c.Elementų events
// 1.Padaryti tai ką liepia mygtukai Header1 sekcijoje;
document
    .getElementById("h1-color")
    .addEventListener(
        "click",
        () => (document.querySelector("h1").style.color = "green")
    );
document
    .getElementById("h1-font")
    .addEventListener(
        "click",
        () => (document.querySelector("h1").style.fontSize = "10px")
    );
// 2.Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
document
    .querySelector("i")
    .addEventListener(
        "click",
        () => (document.querySelector("i").style.fontWeight = "bold")
    );

// 3.Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const classPrices = document.querySelector(".prices");
classPrices.addEventListener("click", () => {
    if (classPrices.style.backgroundColor === "grey") {
        classPrices.style.backgroundColor = "white";
    } else {
        classPrices.style.backgroundColor = "grey";
    }
});
// 4.Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;
const idContacts = document.getElementById("contacts");
idContacts.addEventListener("click", () => {
    idContacts.style.color = "orange";
});
// 5.Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
document.querySelector("#contacts > u").addEventListener("click", () => {
    idContacts.style.fontSize = "20px";
});
// 6.Padaryti taip, kad paspaudus ant X, esančio tage su id contacts,
//pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element
document.querySelector("#contacts > b").addEventListener("click", () => {
    idContacts.style.color = null;
    idContacts.style.fontSize = null;
});
// 7.Padaryti tai ką liepia mygtukai Header2 sekcijoje;
document
    .getElementById("h1-color-back")
    .addEventListener(
        "click",
        () => (document.querySelector("h1").style.color = null)
    );
document
    .getElementById("h1-font-back")
    .addEventListener(
        "click",
        () => (document.querySelector("h1").style.fontSize = null)
    );

// d.Elementų grupių events
// 1.Padaryti, kad du kartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

// 2.Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

// 3.Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

// f.Dinaminis elementų kūrimas (su createElement);

// 1.Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

// 2.Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

// 3.Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like;

// 4.Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2.
//Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
