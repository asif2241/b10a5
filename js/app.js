

// donation for flood affected people in Noakhali

document.getElementById('flood-noakhali-btn').addEventListener('click', function(){
   const floodNoakhaliDonation = getInputValue("flood-noakhali-input");
   const totalDonationForNoakhali  = getInnerText("donation-for-noakhali");
   const newTotalForNoakhali = floodNoakhaliDonation + totalDonationForNoakhali;
   document.getElementById("donation-for-noakhali").innerText = newTotalForNoakhali;
   const totalBl = getInnerText("total-balance");
   const newBl = totalBl - floodNoakhaliDonation;
   document.getElementById("total-balance").innerText = newBl
   
//    history

const title1 = document.getElementById("title-1").innerText
console.log(title1)

const historyItem = document.createElement("div");
historyItem.className = "w-[75%] mx-auto border border-gray-200 rounded-2xl p-8 my-10" ;
historyItem.innerHTML = `
  <h3 class="font-bold text-2xl">${floodNoakhaliDonation} Taka is Donated ${title1}</h3>
    <p>Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
`;
  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})