var food = ["avocado", "bacon", "bagel", "baguette-bread", "banana", "beans", "bell-pepper", "blueberries", "bread", "broccoli", "butter", "candy", "carrot", "cheese-wedge", "cherries", "chestnut", "chocolate-bar", "coconut", "cooked-rice", "croissant", "cucumber", "cut-of-meat", "ear-of-corn", "egg", "eggplant", "fried-shrimp", "garlic", "glass-of-milk", "grapes", "green-apple", "hot-pepper", "ice", "kiwi-fruit", "leafy-green", "lemon", "lollipop", "mango", "meat-on-bone", "melon", "mushroom", "olive", "onion", "peach", "peanuts", "pear", "pineapple", "potato", "poultry-leg", "red-apple", "salt", "strawberry", "tangerine", "tomato", "watermelon", "honey", "wine", "fish"]
var food_fr = ["avocat", "bacon", "bagel", "baguette", "banane", "haricot", "poivron", "myrtilles", "pain", "broccoli", "beurre", "bonbon", "carotte", "fromage", "cerise", "chataigne", "chocolat", "noix-de-coco", "riz", "croissant", "concombre", "viande", "maïs", "oeuf", "aubergine", "crevette", "Ail", "lait", "raisin", "pomme-verte", "piment", "glace", "kiwi", "salade", "citron", "sucette", "mangue", "viande-osseu", "melon", "champignon", "olive", "oignon", "peche", "cacahuete", "poire", "ananas", "patate", "cuisse_de_poulet", "pomme_rouge", "sel", "fraise", "mandarine", "tomate", "pasteque", "miel", "vin", "poisson"]
var new_reciep = [{ "name": "gateau a la fraise", "first": "strawberry", "first_qty": 3, "seconde": "glass-of-milk", "seconde_qty": 1, "third": "egg", "third_quatity": 2, "img": "./src/gateau_fraise.jpg " }, { "name": "gateau au chocolat", "first": "chocolate-bar", "first_qty": 1, "seconde": "glass-of-milk", "seconde_qty": 1, "third": "egg", "third_quatity": 2, "img": "./src/gateau_chocolat.jpg " }, { "name": "salade", "first": "leafy-green", "first_qty": 3, "seconde": "olive", "seconde_qty": 1, "third": "tomato", "third_quatity": 2, "img": "./src/salade.jpg " }, { "name": "burger maison", "first": "bagel", "first_qty": 1, "seconde": "cut-of-meat", "seconde_qty": 1, "third": "cheese-wedge", "third_quatity": 1, "img": "./src/burger.jpeg " }, { "name": "boeuf bourguignon", "first": "cut-of-meat", "first_qty": 3, "seconde": "potato", "seconde_qty": 1, "third": "wine", "third_quatity": 1, "img": "./src/boeuf_bourguignon.jpg " }, { "name": "creppe", "first": "glass-of-milk", "first_qty": 1, "seconde": "egg", "seconde_qty": 2, "third": "butter", "third_quatity": 1, "img": "./src/creppe.jpg " }, { "name": "croque monsieur", "first": "cut-of-meat", "first_qty": 1, "seconde": "cheese-wedge", "seconde_qty": 1, "third": "bread", "third_quatity": 2, "img": "./src/croque-monsieur.jpeg " }, { "name": "maki", "first": "fish", "first_qty": 1, "seconde": "cooked-rice", "seconde_qty": 1, "third": "leafy-green", "third_quatity": 1, "img": "./src/maki.jpg " }, { "name": "paella", "first": "cooked-rice", "first_qty": 1, "seconde": "fried-shrimp", "seconde_qty": 6, "third": "tomato", "third_quatity": 4, "img": "./src/paella.jpg " }, { "name": "salade de fuit", "first": "strawberry", "first_qty": 4, "seconde": "blueberries", "seconde_qty": 10, "third": "green-apple", "third_quatity": 2, "img": "./src/salade_de_fuit.png " }]

var emoji = document.getElementById("all_emoji")
var receipts = document.getElementById("receipts")
var result = document.getElementById("result")
var preparer = document.getElementById("btn_green")
var Img = document.createElement("img");
var column_right = document.getElementById("column_right")
var submit = document.getElementById("submit")
var url = document.getElementById("url")

var array_receipts = []
var qty = []
var index_result = null
var correct_qty = true

food.forEach(element => {

    // loop add all emoji 

    Img.setAttribute('src', './src/emoji/' + element + '.png');
    Img.setAttribute('alt', element);
    Img.setAttribute("id", element);
    Img.setAttribute("class", "ingredient");
    emoji.appendChild(Img.cloneNode(true));

    // on click add emoji in the liste with limit of 3 and add number of ingrediant below

    document.getElementById(element).addEventListener("click", function () {
        if (array_receipts.includes(element)) {
            receipts.children[array_receipts.indexOf(element)].children[1].innerHTML++
            qty[array_receipts.indexOf(element)]++
        }
        else if (array_receipts.length < 3) {
            Img.setAttribute('src', './src/emoji/' + element + '.png');
            Img.setAttribute("id", element);
            Img.setAttribute("class", "picked_ingredient");
            receipts.children[array_receipts.length].children[0].appendChild(Img.cloneNode(true));
            receipts.children[array_receipts.length].children[1].innerHTML = 1
            array_receipts.push(element)
            qty.push(1)
        }
    })
})

// display result 

preparer.addEventListener("click", function () {

    if (array_receipts.length >= 2) {
        // check if reciepe exist
        new_reciep.forEach((element, index) => {
            if (array_receipts.includes(element.first) && array_receipts.includes(element.seconde) && array_receipts.includes(element.third)) {

                if (element.first == array_receipts[array_receipts.indexOf(element.first)] && qty[array_receipts.indexOf(element.first)] == element.first_qty
                    && element.seconde == array_receipts[array_receipts.indexOf(element.seconde)] && qty[array_receipts.indexOf(element.seconde)] == element.seconde_qty
                    && element.third == array_receipts[array_receipts.indexOf(element.third)] && qty[array_receipts.indexOf(element.third)] == element.third_quatity) {
                    index_result = index
                }
                else (
                    index_result = index,
                    correct_qty = false


                )
            }
        });
        if (index_result >= 0 && correct_qty) {

            console.log(index_result)

            var p = document.createElement("p");
            result.innerHTML = "<h2> bravo <img class=\"ingredient\" src=\" ./src/emoji/party-popper.png \" > vous venez de préparer </h2>"

            var text_p = document.createTextNode(new_reciep[index_result].name);
            p.setAttribute("id", "reciep_name")

            Img.setAttribute('src', new_reciep[index_result].img);
            Img.setAttribute('alt', new_reciep[index_result].name);
            Img.setAttribute("id", "gateau_result");
            Img.setAttribute("class", "ingredient");

            p.appendChild(text_p);
            result.appendChild(p);

            result.appendChild(Img.cloneNode(true));
        }

        else if (!correct_qty) {
            result.innerHTML = "tu essaie de faire " + new_reciep[index_result].name + " mais les quantité ne son pas bonne"
        }



        else {
            result.innerHTML = "cette recette n'existe pas mais tu peut l'ajouter"
        }
    }
    else {
        result.innerHTML = "tu dois choisir au moins deux ingredient !"
    }

})



// display 3 reciepts

var is_displayed = []
for (let index = 0; index < 3; index++) {
    var i = Math.floor(Math.random() * (new_reciep.length));

    if (is_displayed.includes(i)) {
        index--
    } else {
        is_displayed.push(i)


        var div = document.createElement("div")
        div.setAttribute("class", "existing_receipts")
        var left = document.createElement("section")
        left.setAttribute("class", "receipts_section_left")
        var right = document.createElement("section")
        right.setAttribute("class", "receipts_section_right")

        var h2 = document.createElement("h2");
        var text_h2 = document.createTextNode(new_reciep[i].name + "\n");

        left.innerHTML = "<div id=\"the_reciepe\"><img class=\"ingredient\" src=\"./src/emoji/" + new_reciep[i].first + ".png \" >" + "*" + new_reciep[i].first_qty + "+" + "<img class=\"ingredient\" src=\"./src/emoji/" + new_reciep[i].seconde + ".png \" >" + "*" + new_reciep[i].seconde_qty + "+" + "<img class=\"ingredient\" src=\"./src/emoji/" + new_reciep[i].third + ".png \" >" + "*" + new_reciep[i].third_quatity + "</div>"
        left.appendChild(text_h2);

        div.append(left, right)
        column_right.appendChild(div);

        Img.setAttribute('src', new_reciep[i].img);
        Img.setAttribute('alt', "gateau");
        Img.setAttribute("class", "gateau_stocker");
        right.appendChild(Img.cloneNode(true));

    }
}

//display choices

var select_1 = document.getElementById("ingrediant-select_1")
food.forEach((element, key) => {
    var option = document.createElement("option");
    option.setAttribute('value', element)
    option.append(food_fr[key]);
    select_1.appendChild(option.cloneNode(true));
});

var select_2 = document.getElementById("ingrediant-select_2")
food.forEach((element, key) => {
    var option = document.createElement("option");
    option.setAttribute('value', element)
    option.append(food_fr[key]);
    select_2.appendChild(option.cloneNode(true));
});

var select_3 = document.getElementById("ingrediant-select_3")
food.forEach((element, key) => {
    var option = document.createElement("option");
    option.setAttribute('value', element)
    option.append(food_fr[key]);
    select_3.appendChild(option.cloneNode(true));
});

// to add a new reciepe

submit.addEventListener("click", function () {


    var formule = {
        "name": document.getElementById("name_formule").value,
        "first": document.getElementById("ingrediant-select_1").value,
        "first_qty": document.getElementById("nbr_1").value,
        "seconde": document.getElementById("ingrediant-select_2").value,
        "seconde_qty": document.getElementById("nbr_2").value,
        "third": document.getElementById("ingrediant-select_3").value,
        "third_quatity": document.getElementById("nbr_3").value,
        "img": url.value
    }

    new_reciep.push(formule)

    console.log( new_reciep);
})


