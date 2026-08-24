# Currency Converter

A lightweight currency conversion app built with HTML, CSS, and JavaScript.

## Overview

This project allows users to:

- enter an amount
- select a source currency and target currency
- fetch the current exchange rate
- display the converted amount
- show the relevant country flag for each selected currency

## Files

- `index.html` — main page layout
- `style.css` — styling for the app
- `app.js` — app logic, dropdown population, flag updates, and fetch flow
- `codes.js` — mappings between currency codes and country codes

## API Used

The app uses the public currency API from Fawaz Ahmed:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies
```

## Notes

- Internet access is required for live exchange rate data.
- The flag images are loaded from the Flags API.
- This is a frontend project and does not require a backend.
