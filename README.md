# Credit Card Validator

This is a simple JavaScript validator program for credit card numbers of various card types, including Visa, MasterCard, American Express and Verve. The validation is performed using regular expressions (regex) to ensure that the card numbers conform to the expected formats.

## Features

- Validates Visa, MasterCard, American Express, and Verve card numbers.
- Removes spaces and hyphens from the input card number before validation.
- Returns an object indicating whether the card is valid and its type.

## Regex Patterns

The following regex patterns are used for validation:

1. **Visa**: `^4[0-9]{12}(?:[0-9]{3})?$`
   - Matches Visa card numbers that start with `4` and have 13 or 16 digits.

2. **MasterCard**: `^5[1-5][0-9]{14}$`
   - Matches MasterCard numbers that start with `51` to `55` and have 16 digits.

3. **American Express**: `^3[47][0-9]{13}$`
   - Matches American Express card numbers that start with `34` or `37` and have 15 digits.

4. **Verve**: `^(506|507|508|509|650)[0-9]{13}$`
   - Matches Verve card numbers that start with `506`, `507`, `508`, `509`, or `650` and have 16 digits.

## Usage

To validate a credit card number, call the `validateCreditCard` function with the card number as a string. The function will return an object indicating whether the card is valid and its type.

## example
```javascript
validateCreditCard("4111111111111111"); // returns { valid: true, type: "number" }
