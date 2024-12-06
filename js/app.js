const modal = document.getElementById("my_modal_1");
const donationContainer = document.getElementById("donation-list-container")
const historyListContainer = document.getElementById("history-container");
const showDonationListBtn = document.getElementById("show-donation-list-btn");
const showHistoryBtn = document.getElementById("show-history-btn");

// donation for flood affected people in Noakhali

document.getElementById('flood-noakhali-btn').addEventListener('click', function(){
   const floodNoakhaliDonation = getInputValue("flood-noakhali-input");
   const totalDonationForNoakhali  = getInnerText("donation-for-noakhali");

  // input validation
   if(isNaN(floodNoakhaliDonation) || floodNoakhaliDonation < 0){
    alert("Input amount not valid");
    return
   }

   const newTotalForNoakhali = floodNoakhaliDonation + totalDonationForNoakhali;
   document.getElementById("donation-for-noakhali").innerText = newTotalForNoakhali;
   const totalBl = getInnerText("total-balance");
   const newBl = totalBl - floodNoakhaliDonation;

// clear input field
   document.getElementById("flood-noakhali-input").value = ""

  //  alert for negative balance
   if(newBl < 0){
    alert("You Dont Have Enough Money")
    return
   }
   document.getElementById("total-balance").innerText = newBl

  //  show modal

  modal.showModal()
   
//    history


const historyItem = document.createElement("div");
historyItem.className = "w-[75%] mx-auto border border-gray-200 rounded-2xl p-8 my-10" ;
historyItem.innerHTML = `
  <h3 class="font-bold text-2xl">  You Have Donated ${floodNoakhaliDonation} Taka For Flood Affected People of Noakhali</h3>
   <p>${new Date().toLocaleString()}</p>
`;
  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// donation for flood affected people in Feni

document.getElementById('flood-feni-btn').addEventListener('click', function(){
    const floodFeniDonation = getInputValue("flood-feni-input");
    const totalDonationForFeni  = getInnerText("donation-for-feni");
    
  // input validation
   if(isNaN(floodFeniDonation) || floodFeniDonation < 0){
    alert("Input amount not valid");
    return
   }

    const newTotalForFeni = floodFeniDonation + totalDonationForFeni;
    document.getElementById("donation-for-feni").innerText = newTotalForFeni;
    const totalBl = getInnerText("total-balance");
    const newBl = totalBl - floodFeniDonation;
// clear input field
   document.getElementById("flood-feni-input").value = ""
//  alert for negative balance
    if(newBl < 0){
      alert("You Dont Have Enough Money")
      return
     }
    document.getElementById("total-balance").innerText = newBl
    
      //  show modal

    modal.showModal()
  
 //    history
 

 const historyItem = document.createElement("div");
 historyItem.className = "w-[75%] mx-auto border border-gray-200 rounded-2xl p-8 my-10" ;
 historyItem.innerHTML = `
   <h3 class="font-bold text-2xl">  You Have Donated ${floodFeniDonation} Taka For Flood Affected People of Feni</h3>
     <p>${new Date().toLocaleString()}</p>
 `;
   const historyContainer = document.getElementById("history-container");
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
 })





document.getElementById('quota-btn').addEventListener('click', function(){
    const quotaDonation = getInputValue("quota-input");
    const totalQuotaDonation  = getInnerText("donation-for-quota");
    
  // input validation
   if(isNaN(quotaDonation) || quotaDonation < 0){
    alert("Input amount not valid");
    return
   }

    const newTotal = quotaDonation + totalQuotaDonation;
    document.getElementById("donation-for-quota").innerText = newTotal;
    const totalBl = getInnerText("total-balance");
    const newBl = totalBl - quotaDonation;
    
// clear input field
   document.getElementById("quota-input").value = ""

//  alert for negative balance
    if(newBl < 0){
      alert("You Dont Have Enough Money")
      return
     }
    document.getElementById("total-balance").innerText = newBl
    
      //  show modal

    modal.showModal()
  
 //    history
 

 const historyItem = document.createElement("div");
 historyItem.className = "w-[75%] mx-auto border border-gray-200 rounded-2xl p-8 my-10" ;
 historyItem.innerHTML = `
   <h3 class="font-bold text-2xl">  You Have Donated ${quotaDonation} Taka For Aid for Injured in the Quota Movement</h3>
     <p>${new Date().toLocaleString()}</p>
 `;
   const historyContainer = document.getElementById("history-container");
   historyContainer.insertBefore(historyItem, historyContainer.firstChild)
 })

//  button toggle
showHistoryBtn.addEventListener('click', function(){

   historyListContainer.classList.remove("hidden");
   donationContainer.classList.add("hidden")

   showHistoryBtn.classList.add("btn", "bg-[#B4F461]", "text-2xl", "font-semibold", "px-10")
   showDonationListBtn.classList.remove("btn", "bg-[#B4F461]", "text-2xl", "font-semibold", "px-10")
   showDonationListBtn.classList.add("btn", "text-2xl", "font-semibold", "px-10", "text-[#111111]", "border", "border-gray-300")
})

showDonationListBtn.addEventListener('click', function(){

  historyListContainer.classList.add("hidden");
  donationContainer.classList.remove("hidden")

  showHistoryBtn.classList.remove("btn", "bg-[#B4F461]", "text-2xl", "font-semibold", "px-10")
  showHistoryBtn.classList.add("btn", "text-2xl", "font-semibold", "px-10", "text-[#111111]", "border", "border-gray-300")
  showDonationListBtn.classList.add("btn", "bg-[#B4F461]", "text-2xl", "font-semibold", "px-10")
})