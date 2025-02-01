// cards to test details
const cardListNumbers = [
    {
        cardNumber: '4111 1111 1111 1111',
        type: 'Visa'
    },
    {
        cardNumber: '5500 0000 0000 0004',
        type: 'MasterCard'
    },
    {
        cardNumber: '3400 0000 0000 009',
        type: 'American Express'
    },
    {
        cardNumber: '5060 0000 0000 0004',
        type: 'Verve'
    },
    {
        cardNumber: '1234 5678 9012 3456',
        type: 'Unknown'
    }
]

// function to validate credit card number
function validateCreditCard(cardNumber) {

    cardNumber = cardNumber.replace(/[\s-]/g, '');

    //card patterns
    const visaPatternRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

    const masterCardPatternRegex = /^5[1-5][0-9]{14}$/;

    const amexPatternRegex = /^3[47][0-9]{13}$/;

    const discoverPatternRegex = /^6(?:011|22[2-9]|[4-9][0-9])[0-9]{12}$/;

    const vervePatternRegex = /^(506|507|508|509|650)[0-9]{13}$/;


    if (visaPatternRegex.test(cardNumber)) {

        return { valid: true, type: 'Visa' };

    } else if (masterCardPatternRegex.test(cardNumber)) {

        return { valid: true, type: 'MasterCard' };

    } else if (amexPatternRegex.test(cardNumber)) {

        return { valid: true, type: 'American Express' };

    } else if (discoverPatternRegex.test(cardNumber)) {

        return { valid: true, type: 'Discover' };

    } else if (vervePatternRegex.test(cardNumber)) {

        return { valid: true, type: 'Verve' };

    } else {

        return { valid: false, type: 'invalid card' };
    }
}


// Test the function
const result = validateCreditCard(cardListNumbers[4].cardNumber);

console.log(result)