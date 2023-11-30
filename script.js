const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas


    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2

    const libraToday = 7.5 // Taxa de conversão para libra
    const bitcoinToday = 50000 // Taxa de conversão para bitcoin

    if (currencySelect.value == 'dolar') {
        // Se o select estiver selecionado o valor de dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(inputCurrencyValue / dolarToday)
      }

      if (currencySelect.value == 'euro') {
        // Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)
      }

      if (currencySelect.value == 'libra') { //adicionando libra 
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputCurrencyValue / libraToday)
    }
    
     if (currencySelect.value == 'bitcoin') { //adicionando bitcoin
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputCurrencyValue / bitcoinToday)
     }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/EUA.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }   
    
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png" // Substitua pelo caminho da imagem da bandeira do Reino Unido
    }
    
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png" // Substitua pelo caminho da imagem do Bitcoin
    }
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
