const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");

for (let select of dropdowns) {
  for (currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "To" && currcode === "INR") {
      newOption.selected ="selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);
  })
}


const updateFlag = (element)=>{
  let currcode = element.value;
  let countryCode = countryList[currcode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src=newSrc;
}


btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
})