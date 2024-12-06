

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
   <p>${new Date().toLocaleString()}</p>
`;
  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// donation for flood affected people in Feni

document.getElementById('flood-feni-btn').addEventListener('click', function(){
    const floodFeniDonation = getInputValue("flood-feni-input");
    const totalDonationForFeni  = getInnerText("donation-for-feni");
    const newTotalForFeni = floodFeniDonation + totalDonationForFeni;
    document.getElementById("donation-for-feni").innerText = newTotalForFeni;
    const totalBl = getInnerText("total-balance");
    const newBl = totalBl - floodFeniDonation;
    document.getElementById("total-balance").innerText = newBl
    
 //    history
 
 const title2 = document.getElementById("title-2").innerText
 console.log(title2)
 
 const historyItem = document.createElement("div");
 historyItem.className = "w-[75%] mx-auto border border-gray-200 rounded-2xl p-8 my-10" ;
 historyItem.innerHTML = `
   <h3 class="font-bold text-2xl">${floodFeniDonation} Taka is Donated ${title2}</h3>
     <p>${new Date().toLocaleString()}</p>
 `;
   const historyContainer = document.getElementById("history-container");
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
 })