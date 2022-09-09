const rangeSlider = document.getElementById("rangeSlider");

const pageviewsOutput = document.querySelector(".pageviews-output");
const priceOutput = document.querySelector(".price-output");

const toggle = document.querySelector(".toggle");

let price = 16;

toggle.addEventListener("click", () => {
  const current = toggle.getAttribute("aria-pressed");

  toggle.setAttribute("aria-pressed", current === "false");

  if (current === "false") {
    let dicountedPrice = price * 0.75;
    priceOutput.innerText = "$" + dicountedPrice.toFixed(2);
  } else {
    priceOutput.innerText = "$" + price.toFixed(2);
  }
});

rangeSlider.addEventListener("input", () => {
  const value = Number(rangeSlider.value);
  let pageviews;

  rangeSlider.style.background = `linear-gradient(to right, var(--clr-primary-soft-cyan) ${value}%, var(--clr-neutral-light-grayish-blue) ${value}%)`;

  switch (value) {
    case 0:
      pageviews = "10K";
      price = 8;
      break;
    case 25:
      pageviews = "50K";
      price = 12;
      break;
    case 50:
      pageviews = "100K";
      price = 16;
      break;
    case 75:
      pageviews = "200K";
      price = 24;
      break;
    case 100:
      pageviews = "1M";
      price = 36;
      break;
  }

  pageviewsOutput.innerText = pageviews + " PAGEVIEWS";
  priceOutput.innerText = "$" + price.toFixed(2);
});
