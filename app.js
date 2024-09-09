//// Sidebar /////
const sidebar = document.getElementById("sidebar");

function closeSidebar() {
  sidebar.style.right = "-100%";
}

function openSidebar() {
  sidebar.style.right = "0%";
}

const drops = document.querySelectorAll(".drops");
let dropsArr = Array.from(drops);

function openDropDown(list) {
  dropsArr.forEach((item) => {
    if (item.id == list) {
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");
        item.classList.add("block");
      } else {
        item.classList.add("hidden");
        item.classList.remove("block");
      }
    }
    let filtered = dropsArr.filter((item) => item.id != list);
    filtered.forEach((item) => {
      item.classList.add("hidden");
      item.classList.remove("block");
    });
  });
}
///// Calculator //////

const pages = document.getElementById("pages");
const additions = document.querySelectorAll(".addition");
const seo = document.querySelectorAll(".seo");
const etrade = document.querySelectorAll(".etrade");
const pageRange = document.getElementById("pageRange");
const dizaynRange = document.getElementById("dizaynRange");
const logoRange = document.getElementById("logoRange");
const priceForPages = document.getElementById("priceForPages");
const priceForAddition = document.getElementById("priceForAddition");
const priceForSeo = document.getElementById("priceForSeo");
const priceForEtrade = document.getElementById("priceForEtrade");
const priceForLogo = document.getElementById("priceForLogo");
const allPages = document.getElementById("allPages");
const allAdditions = document.getElementById("allAdditions");
const allSeo = document.getElementById("allSeo");
const allEtrade = document.getElementById("allEtrade");
const allLogo = document.getElementById("allLogo");
const allPrice = document.getElementById("allPrice");

let pagePrice = 400;
let logoPrice = 0;
let addSum = 0;
let seoSum = 0;
let etradeSum = 0;
let legoSum = 0;

function getPriceForPages() {
  let sum = 100 * pageRange.value * dizaynRange.value;
  pages.innerHTML = pageRange.value;
  priceForPages.innerHTML = allPages.innerHTML = sum;
  pagePrice = sum;
  getAllPrice();
}
function getPriceForLogo() {
  let sum = 100 * logoRange.value;
  priceForLogo.innerHTML = logoRange.value;
  priceForLogo.innerHTML = allLogo.innerHTML = sum;
  logoPrice = sum;
  getAllPrice();
}

let additionArr = Array.from(additions);
let seoArr = Array.from(seo);
let etradeArr = Array.from(etrade);

function addAddition() {
  let sum = additionArr.reduce(
    (sum, item) => sum + +(item.checked ? item.value : 0),
    0
  );
  priceForAddition.innerHTML = allAdditions.innerHTML = sum;
  addSum = sum;
  getAllPrice();
}

function addSeo() {
  let sum = seoArr.reduce(
    (sum, item) => sum + +(item.checked ? item.value : 0),
    0
  );
  priceForSeo.innerHTML = allSeo.innerHTML = sum;
  seoSum = sum;
  getAllPrice();
}

function addEtrade() {
  let sum = etradeArr.reduce(
    (sum, item) => sum + +(item.checked ? item.value : 0),
    0
  );
  priceForEtrade.innerHTML = allEtrade.innerHTML = sum;
  etradeSum = sum;
  getAllPrice();
}

function getAllPrice() {
  let allSum =
    +pagePrice + +logoPrice + +etradeSum + +addSum + +seoSum + +legoSum;
  allPrice.innerHTML = allSum <= 450 ? 450 : allSum;
}

///// POPUP ///////

const bgBlur = document.getElementById('bgBlur')
let flag = true;

function handlePopup() {
  bgBlur.style.display = flag ? "grid" : "none";
  flag = !flag;
}
function closePopup() {
  bgBlur.style.display = "none"
  flag = !flag;
}
function preventClick(e) {
  e.stopPropagation()
}