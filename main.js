import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'

async function fetchAllProducts() {
  const products = await fetch('/api/notion_fetchProducts')
    .then((res) => res.json().then((data) => data.results));
    // const results = []
    // products.map((api) => results.push(api.properties));
    console.log(products);

    document.querySelector('.products').innerHTML = products.map(
      (item) => ` 
          <div class="ui card product__card round-4">
            <div class="ui slide masked reveal image">
              <img src="${item.properties.Image1.url}" class="visible content">
              <img src="${item.properties.Image2.url}" class="hidden content">
            </div>
            <div class="content">
              <a class="header">${item.properties.Title.title[0].plain_text}</a>
              <div class="meta">
                <div class="product__content">
                  ${item.properties.Describe.rich_text[0].plain_text}
                </div>
                <div class="product__price">${item.properties.Price.number}</div>
              </div>
            </div>
            <div class="extra content">
              <div class="ui vertical animated secondary button round-4 color-primary" tabindex="0">
                <div class="hidden content">Order</div>
                <div class="visible content">${item.properties.Stock.number} items left <i class="shop icon"></i>
                </div>
              </div>
            </div>
          </div>
        `).join('');
}


fetchAllProducts();

