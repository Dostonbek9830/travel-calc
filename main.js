let elTitle = document.querySelector(".user-greeting");
let elUserMoney = document.querySelector(".user-money");
let elExpenses = document.querySelector(".expenses");
let elResult = document.querySelector(".results")
let userName = prompt("Ismingizni kiriting");
let userMoney = Number(prompt("Sayohat uchun sarflamoqchi bo‘lgan summangizni kiriting"));
let userMoneySeperated = userMoney.toLocaleString('en-US');
let ticketFare = 500;
let hotelFee = 250;
let entertainmentFee = 120;
let USD_CURRENCY = 10900;
let EUR_CURRENCY = 12272;

elTitle.textContent = `Hurmatli ${userName}`
elUserMoney.textContent = `Siz sarflamoqchi bo‘lgan summa: ${userMoneySeperated} so‘m`
elExpenses.textContent = `Samalyot bileti: $${Number(ticketFare)} 
\nMehmonxona xarajatlari: $${Number(hotelFee)}  
\nTurli-xil ko‘ngil ochish uchun: €${Number(entertainmentFee)}`;

let totalMoney = ticketFare * USD_CURRENCY + hotelFee * USD_CURRENCY + entertainmentFee * EUR_CURRENCY;

if(userMoney >= totalMoney) {
   elResult.textContent = `${userName}, sayohatingiz maroqli o‘tsin`
} else {
    elResult.textContent = `${userName}, afsuski, siz sayohatga bora olmaysiz`
}







