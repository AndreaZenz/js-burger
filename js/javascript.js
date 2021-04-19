// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
var submitBnt = document.getElementById("button")
var priceField = document.getElementById("price-field")
var nomeBurgerField = document.getElementById("name")
var coupon = document.getElementById("coupon")




submitBnt.addEventListener("click", function () {
    var somma = 50;
    var listaIngredienti = document.querySelectorAll(".ingredient [type='checkbox']")

    console.log(listaIngredienti)

    for (var i = 0; i < listaIngredienti.length; i++) {
        var ingrediente = listaIngredienti[i]
        somma = addToSum(somma, ingrediente);

        var sconto = 0;
        var coupon = document.getElementById("coupon")
        
        if (coupon.value == "BOOLEAN33") {
            sconto = somma * 20 / 100;
        } else if (coupon.value == "BOOLEAN") {
            sconto = somma * 40 / 100;
        } else {
            sconto = 0
        }
    }

    console.log(sconto)
    document.getElementById("price").innerHTML = somma - sconto

    
})





function addToSum(sommaTotale, elementoHtml) {
    if (elementoHtml.checked) {
        sommaTotale += parseInt(elementoHtml.value)
    }
    return sommaTotale
}

