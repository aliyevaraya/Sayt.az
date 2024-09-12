const data = {
  costLogo: [
    {
      id: 7,
      name: "Custom",
      price: 200,
      type: "logo_design",
    },
    {
      id: 15,
      name: "No need",
      price: 0,
      type: "logo_design",
    },
    {
      id: 20,
      name: "Simple",
      price: 100,
      type: "logo_design",
    },
  ],
  costAddon: [
    {
      id: 1,
      name: "Blog",
      price: 200,
      type: "website_addons",
    },
    {
      id: 2,
      name: "Member login /‍‍‍ Profiles",
      price: 400,
      type: "website_addons",
    },
    {
      id: 8,
      name: "Responsive",
      price: 100,
      type: "website_addons",
    },
    {
      id: 22,
      name: "Forum",
      price: 400,
      type: "website_addons",
    },
    {
      id: 23,
      name: "Messaging",
      price: 50,
      type: "website_addons",
    },
    {
      id: 24,
      name: "Live Chat",
      price: 50,
      type: "website_addons",
    },
    {
      id: 25,
      name: "Gallery",
      price: 100,
      type: "website_addons",
    },
    {
      id: 26,
      name: "Contact Form",
      price: 100,
      type: "website_addons",
    },
    {
      id: 27,
      name: "On-site Search",
      price: 100,
      type: "website_addons",
    },
    {
      id: 28,
      name: "Map Data / Geolocation",
      price: 100,
      type: "website_addons",
    },
    {
      id: 29,
      name: "Booking",
      price: 400,
      type: "website_addons",
    },
    {
      id: 30,
      name: "Social Media integration",
      price: 50,
      type: "website_addons",
    },
    {
      id: 31,
      name: "Analytics / Tracking",
      price: 50,
      type: "website_addons",
    },
    {
      id: 36,
      name: "Admin Panel",
      price: 300,
      type: "website_addons",
    },
  ],
  costSeo: [
    {
      id: 3,
      name: "Titles & Meta",
      price: 200,
      type: "seo_addons",
    },
    {
      id: 32,
      name: "Keyword research",
      price: 300,
      type: "seo_addons",
    },
    {
      id: 33,
      name: "+20 Advanced techniques",
      price: 300,
      type: "seo_addons",
    },
    {
      id: 34,
      name: "Header Tags",
      price: 100,
      type: "seo_addons",
    },
    {
      id: 35,
      name: "Sitemap",
      price: 100,
      type: "seo_addons",
    },
  ],
  costSetting: [
    {
      id: 18,
      name: "min",
      price: 450,
      type: "setting",
    },
    {
      id: 19,
      name: "page",
      price: 20,
      type: "setting",
    },
  ],
  costEcommerce: [
    {
      id: 38,
      name: "Payment",
      price: 200,
      type: "ecommerce",
    },
    {
      id: 39,
      name: "Add to cart",
      price: 500,
      type: "ecommerce",
    },
    {
      id: 40,
      name: "Products",
      price: 300,
      type: "ecommerce",
    },
    {
      id: 41,
      name: "Favourite",
      price: 300,
      type: "ecommerce",
    },
    {
      id: 42,
      name: "Filter",
      price: 300,
      type: "ecommerce",
    },
    {
      id: 43,
      name: "Description",
      price: 200,
      type: "ecommerce",
    },
  ],
};
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

const elaveler = document.getElementById("elaveler");
const seo = document.getElementById("seo");
const eticaret = document.getElementById("eticaret");
function addElement() {
  data.costAddon.map((item) => {
    elaveler.innerHTML += `
          <label for="${item.name}" class="relative flex justify-between items-center cursor-pointer">
            <p class="w-3/4 text-sm font-medium text-gray-900">${item.name}</p>
            <div class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                <span class="relative">
                    <input onchange="addAddition()" value="${item.price}" id="${item.name}" type="checkbox" class="hidden peer addition">
                    <div class="w-10 h-6 rounded-full shadow-inner peer-checked:bg-violet-600 bg-gray-200"></div>
                    <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
                </span>
            </div>
        </label>
      `;
  });

  data.costSeo.map((item) => {
    seo.innerHTML += `
      <label class="flex items-center gap-3 cursor-pointer">
          <input onchange="addSeo()" class="seoInp h-5 w-5 rounded-md border border-gray-400 accent-[#a271f2] cursor-pointer" value="${item.price}" type="checkbox" />
          ${item.name}
      </label>
    `;
  });

  data.costEcommerce.map((item) => {
    eticaret.innerHTML += `
      <label for="${item.name}" class="relative flex justify-between items-center cursor-pointer">
          <p class="w-3/4 text-sm font-medium text-gray-900">${item.name}</p>
          <div class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
              <span class="relative">
                  <input onchange="addEtrade()" value="${item.price}" id="${item.name}" type="checkbox" class="etrade hidden peer">
                  <div class="w-10 h-6 rounded-full shadow-inner peer-checked:bg-violet-600 bg-gray-200"></div>
                  <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
              </span>
          </div>
      </label>
    `;
  });
}

addElement();

const pagepriceForSeoRange = document.getElementById("pageRange");
const dizaynRange = document.getElementById("dizaynRange");
const logoRange = document.getElementById("logoRange");
const allPrice = document.getElementById("allPrice");

let pagePrice = 400;
let logoPrice = 0;
let addSum = 0;
let seoSum = 0;
let etradeSum = 0;
let legoSum = 0;

const pages = document.getElementById("pages");
const priceForPages = document.querySelectorAll(".priceForPages");
function getPriceForPages() {
  let sum = pageRange.value * dizaynRange.value;
  pages.innerHTML = pageRange.value / 100;
  priceForPages.forEach((item) => (item.innerHTML = sum));
  pagePrice = sum;
  getAllPrice();
}

const priceForLogo = document.querySelectorAll(".priceForLogo");
function getPriceForLogo() {
  priceForLogo.forEach((item) => (item.innerHTML = logoRange.value));
  logoPrice = logoRange.value;
  getAllPrice();
}

const priceForAddition = document.querySelectorAll(".priceForAddition");
const additions = document.querySelectorAll(".addition");
function addAddition() {
  let sum = 0;
  additions.forEach((item) => {
    if (item.checked) sum += +item.value;
  });
  priceForAddition.forEach((item) => (item.innerHTML = sum));
  addSum = sum;
  getAllPrice();
}

const priceForSeo = document.querySelectorAll(".priceForSeo");
const seoInp = document.querySelectorAll(".seoInp");
function addSeo() {
  let sum = 0;
  seoInp.forEach((item) => {
    if (item.checked) sum += +item.value;
  });
  priceForSeo.forEach((item) => (item.innerHTML = sum));
  seoSum = sum;
  getAllPrice();
}

const priceForEtrade = document.querySelectorAll(".priceForEtrade");
const etrade = document.querySelectorAll(".etrade");
function addEtrade() {
  let sum = 0;
  etrade.forEach((item) => {
    if (item.checked) sum += +item.value;
  });
  priceForEtrade.forEach((item) => (item.innerHTML = sum));
  etradeSum = sum;
  getAllPrice();
}

function getAllPrice() {
  let allSum =
    +pagePrice + +logoPrice + +etradeSum + +addSum + +seoSum + +legoSum;
  allPrice.innerHTML = allSum <= 450 ? 450 : allSum;
}

///// POPUP ///////

const bgBlur = document.getElementById("bgBlur");
let flag = true;

function handlePopup() {
  bgBlur.style.display = flag ? "grid" : "none";
  flag = !flag;
}
function closePopup() {
  bgBlur.style.display = "none";
  flag = !flag;
}
function preventClick(e) {
  e.stopPropagation();
}
