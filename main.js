// console.log("connected!")

const products = [
  {
    id: 1,
    name: "Carrot Cake",
    description: "A beautiful cake made with carrots",
    imageUrl: "https://charlotteslivelykitchen.com/wp-content/uploads/2019/11/carrot-cake-3-500x500.jpg",
    availability: "Available",
    specifications: {
      size: '10"',
      weight: "4lbs",
      isValid: true,
      dateValid: "10/01/2023"
    },
    pricing: {
      one: "$5.99",
      two: "$39.99",
      three: "$99.99"
    }
  },
  {
    id: 2,
    name: "Oreos",
    description: "A cookie sandwich with rich creme filling between the bold taste of two chocolate wafers!",
    imageUrl: "https://www.kroger.com/product/images/large/front/0004400004103?banner=harristeeter",
    availability: "Available",
    specifications: {
      size: '4"',
      weight: "3lbs",
      isValid: false,
      dateValid: "09/15/2023"
    },
    pricing: {
      one: "$4.99",
      two: "$10.99",
      three: "$49.99"
    }
  },
  {
    id: 3,
    name: "Plants",
    description: "A lovely way to incorporate style into a bland space!",
    imageUrl: "https://i.ebayimg.com/images/g/TLAAAOSw6E9kIHn2/s-l1600.jpg",
    availability: "Available",
    specifications: {
      size: '6"',
      weight: "2lbs",
      isValid: true,
      dateValid: "01/01/2999"
    },
    pricing: {
      one: "$13.99",
      two: "$29.99",
      three: "$64.99"
    }
  },
  {
    id: 4,
    name: "Box",
    description: "A spacious container for items in case you plan to move!",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/9/PF/BF/DH/28349863/3-ply-corrugated-box-500x500.jpg",
    availability: "Available",
    specifications: {
      size: '8"',
      weight: "1lbs",
      isValid: true,
      dateValid: "07/19/2023"
    },
    pricing: {
      one: "$0.99",
      two: "$9.99",
      three: "$49.99"
    }
  },
  {
    id: 5,
    name: "Cereal Box",
    description: "For when you are running behind in the morning, so you can't cook, but you still want to eat breakfast!",
    imageUrl: "https://images.heb.com/is/image/HEBGrocery/prd-medium/000032021.jpg",
    availability: "Not Available",
    specifications: {
      size: '8"',
      weight: "3lbs",
      isValid: true,
      dateValid: "11/13/2024"
    },
    pricing: {
      one: "$4.99",
      two: "$9.99",
      three: "$39.99"
    }
  },
  {
    id: 6,
    name: "Keyboard",
    description: "Used for typing your dreams onto a page, or a question into your search engine!",
    imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/kb500/global-spi/ng/keyboard-kb500-black-hero-500x500-ng.jpg?fmt=jpg&wid=500&hei=500",
    availability: "Available",
    specifications: {
      size: '9"',
      weight: "5lbs",
      isValid: true,
      dateValid: "05/31/2013"
    },
    pricing: {
      one: "$39.99",
      two: "$79.99",
      three: "$149.99"
    }
  }
]

const targetingApp = document.querySelector("#app");


const renderToDom = (divId, htmlRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlRender;
};

const itemsOnDom = (array) => {
  let domString = "";
  for (const item of array) {
    domString += `<div class="col">
    <section class="product">
      <header class="product-header">
        <h2 class="product-title">${item.name}</h2>
      </header>
      <img class="product-img" src="${item.imageUrl}" alt="A picture of a carrot cake">
      <p class="product-description">${item.description}</p>
      <p class="product-availability">${item.availability}</p>
      <section class="specifications">
        <h4>SPECIFICATIONS</h4>
        <p class="product-size"><strong>${item.specifications.size}</strong></p>
        <p class="product-weight"><strong>${item.specifications.weight}</strong></p>
        <footer class="product-footer">
          <p>Specifications valid until ${item.specifications.dateValid}.</p>
        </footer>
      </section>
      <section class="pricing">
        <h4>Pricing</h4>
        <p class="price1"><strong>${item.pricing.one}</strong></p>
        <p class="price2"><strong>${item.pricing.two}</strong></p>
        <p class="price3"><strong>${item.pricing.three}</strong></p>
      </section>
    </section>
  </div>`;
  }

  renderToDom("#app", domString)
}

itemsOnDom(products);
