const input = require('sync-input');

let currencyExchangeRates = {
    'USD': 1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75,
}

let convertedAmount = 0;

const currencyIsValid = (convertingCurrency) => {
        return Object.keys(currencyExchangeRates).some((currency) => currency === convertingCurrency);
}

let loop = true;

console.log("Welcome to Currency Converter!");

Object.entries(currencyExchangeRates).forEach(([currency, rate]) =>{
    console.log(`1 USD equals ${rate} ${currency}`);
    }
)


while(loop){

    console.log("What do you want to do?");

    let userOption = Number(input("1-Convert currencies 2-Exit program\n"));

    switch(userOption){
        case 1:
            let validInput = false;
            while(!validInput){
                console.log("What do you want to convert?");

                let currencyToConvertFrom = input("From: ").toUpperCase();
                if(!currencyIsValid(currencyToConvertFrom)){
                    console.log("Unknown currency");
                    continue;
                }

                let currencyToConvertTo = input("To:").toUpperCase();
                if(!currencyIsValid(currencyToConvertTo)){
                    console.log("Unknown currency");
                    continue;
                }

                let conversionAmount = Number(input("Amount: "));
                if(conversionAmount < 1){
                    console.log("The amount cannot be less than 1");
                    continue;
                }
                else if(isNaN(conversionAmount)){
                    console.log("The amount has to be a number")
                    continue;
                }

                switch(currencyToConvertTo){
                    case "USD":
                        convertedAmount = conversionAmount / currencyExchangeRates[currencyToConvertFrom] * currencyExchangeRates['USD'];
                        console.log(`Result: ${conversionAmount} ${currencyToConvertFrom} equals ${convertedAmount.toFixed(4)} ${currencyToConvertTo}`)
                        break;

                    case "JPY":
                        convertedAmount = conversionAmount / currencyExchangeRates[currencyToConvertFrom] * currencyExchangeRates['JPY'];
                        console.log(`Result: ${conversionAmount} ${currencyToConvertFrom} equals ${convertedAmount.toFixed(4)} ${currencyToConvertTo}`)
                        break;

                    case "EUR":
                        convertedAmount = conversionAmount / currencyExchangeRates[currencyToConvertFrom] * currencyExchangeRates['EUR'];
                        console.log(`Result: ${conversionAmount} ${currencyToConvertFrom} equals ${convertedAmount.toFixed(4)} ${currencyToConvertTo}`)
                        break;  

                    case "RUB":
                        convertedAmount = conversionAmount / currencyExchangeRates[currencyToConvertFrom] * currencyExchangeRates['RUB'];
                        console.log(`Result: ${conversionAmount} ${currencyToConvertFrom} equals ${convertedAmount.toFixed(4)} ${currencyToConvertTo}}`)
                        break;

                    case "GBP":
                        convertedAmount = conversionAmount / currencyExchangeRates[currencyToConvertFrom] * currencyExchangeRates['GBP'];
                        console.log(`Result: ${conversionAmount} ${currencyToConvertFrom} equals ${convertedAmount.toFixed(4)} ${currencyToConvertTo}`)
                        break;

                    default:
                        console.log("Unknown currency");
                        break;
                }
            }
        break;

        case 2:
            console.log("Have a nice day!");
            loop = false;
            break;
        
        default:
            console.log("Unknown input");
            break;
    }
}
