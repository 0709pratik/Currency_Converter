const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")

for (let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    }

    if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }


        select.append(newOption);
    }

    select.addEventListener("change",(evt) => {
            updateFlag(evt.target)
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc
}

const updateExchange = async () => {
    let amount = document.querySelector(".amount input");
    let amtValue = Number(amount.value);
    if(amtValue === "" || amtValue < 1){
        amtValue = 1;
        amtValue.value = "1";
    }


    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    const newURL = `${URL}/${from}.json`;

    try{
        const response = await fetch(newURL);
        
        if(!response.ok){
            throw new Error(`HTTP Error is: ${response.status}`)
        }

        const data = await response.json();

        console.log("API Data:", data);
        

        const rate = data[from][to];

        if(rate === undefined) {
            throw new Error("Exchange rate Not found")
            
        }

        const finalAmt = amtValue * rate ;

        msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`

    } catch(error){
            console.log("Exchange Rate Error: ",error);
            msg.innerText = "Unable to get exchange rate please try again";
            
    }
};

btn.addEventListener("click",(evt) => {
    evt.preventDefault();
    updateExchange();
})

window.addEventListener("load",() => {
    updateExchange();
})