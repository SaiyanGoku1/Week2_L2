document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      text: "Exquisite Watches",
      subtext1: "Choose Luxury,",
      subtext2: "Choose Us",
      description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      price: "$499.00",
      image: "https://s3-alpha-sig.figma.com/img/2ad3/d5c1/bc7c8b7d2ade47a27798d58559b94505?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Py7-0zo-2ULgybdmw5eLb2E6hSrSqtpVkRn3zFRwkkPs8NhNCw76fEwTrhLzl50AKhxdKKVGisZRaG~wJJ-LcpKrl2SKImEWxyP8pUU5FBCtXCk5EKKafB8cpOds8tks2f9APh6IjTkjxPOiyjTT~PkDKCFyCI9hqRPuZnWl1T6Amfav9o0zofIMjiCNp6tstxMegHCTuMMjVtZkzT9B04GH9Ux6tt-BXrR5a5oZlTVrBIjcF9rGLDpfJPGMnqAlmS3g3girl2tYsD-kAWg-KHuC23tOkLgPwzNvG3HKneefpOyaH9FMe-XW8m4SMRSkJQv3Zp98cZcKyOa5~CXjfw__",
      ambientColor: "linear-gradient(to right, #F4A764 0%, #FFDEC2 100%)"
    },
    {
      text: "Dainty Timepieces",
      subtext1: "Choose Luxury,",
      subtext2: "Choose Us",
      description: "Embrace the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      price: "$469.00",
      image: "https://s3-alpha-sig.figma.com/img/9b03/5859/b3cd59b6e82967a441a89bdb7f113601?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4IsGh9QklY8Lb8NKdCWMi2zvGCz8753OJzU6WxAb8uOWqPv5eivhL1FgFNupav~sEaof6S4laUBAd~DtD~nGc4FnWhYNSicPQPJW3SrSYOeEloJomZnSDjyZUgFI1rxeoRyZh8ATgFUn3y6BX0PZKWZ4fa0IV3cJkNz4pfuwCIjW2euSOWGnSQOPzZ1CsDmNKExB~LiXJfdnBrJHraTGHP9n3B5sGIe9cxjO2m-TktigbOVFuRxN~ZoYRGvtLlSbmbTwVpTpLUABSZtkayviOb2S-5oGeU2Zb04WM55Oj3JenP50OslrzOvkrmYRj1Qd~JSz9otUf2vQH1Agab-lw__",
      ambientColor: "linear-gradient(to right, #b1b3b3 0%, #E1E1E1 100%)"
    },
    {
      text: "Elegant Timepieces",
      subtext1: "Choose Luxury,",
      subtext2: "Choose Us",
      description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      price: "$529.00",
      image: "https://s3-alpha-sig.figma.com/img/1155/92de/a1e0499b541d8505e2a8b346af7f884f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtDtMC~A3zfL37A1ESzLRLv3iMtmHfGmCYf~lIFUUI~djPFI3uxo39UTnp9WvpoQYcqZh0JF4EGmcapT68YAlceulqWubBB9lsyBdS1X0UmCdNhx6v0kXaIMGicZ8gflQPmtdsqpp4XV7WwpG~IkO4Cdc9KCvAW-uEjwKDELbnpwyx3veZ-rbbp~RU8LFWpGwTxAt4NM4MB5ZerL2ya-9we83pUkhmKtwQQRoZ20YJavZWzzW~4-ghjm26dgwUuOkkLxm~BT0~djjrR1D3aa2AMbXP8de~n5PX6XtVgp2WJS4EpgUlTUvze6nlUuWjvNqOZ2D7y5xBfBMQNfz6UENw__",
      ambientColor: "linear-gradient(to right, #30A357 0%, #75E39A 100%)"
    },
    {
      text: "Refined Timepieces",
      subtext1: "Choose Luxury,",
      subtext2: "Choose Us",
      description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      price: "$599.00",
      image: "https://s3-alpha-sig.figma.com/img/c62f/050a/5112960cf7b3fd65ba1ed29d826e710a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ6wKk0KGbYps-0kGuXg0hpOzr9sECM0k-QqzyQrYgVgR5b0Kp~ZHLx0oGtTVH-aFLPm93HKloN6j9Ke~5-mKYqdYJc3wSlymedqrk3t56Jzw8Jf-pRI-3BheEdl1RjCY0SZ5hAso~ysII9zUNgxTKe8KNz1pVCTwJn57XM-Ba34vHxY0rtd0lMnBdQLFa0n4hFzeT~CRCvjJaguI-0KlMO2zA0oo2rO0PCnbfeQBt8bXtfOm~-08mAPyZAyoUucTpnm8UxbihmZL1WjOrJNlzOII-7RkRd6jJ3IkwwzHkymQefmpOPSPRgDYWO-h44uszVzD5K6uB0sL9jRK1ed1A__",
      ambientColor: "linear-gradient(to right, #F24F4F 0%, #FFA895 100%)"
    }
  ];

  const splideList = document.querySelector(".splide__list");
  const body = document.body;

  // Populate slides dynamically
  products.forEach(product => {
    const slide = document.createElement("li");
    slide.className = "splide__slide";
    slide.style.background = product.ambientColor;

    slide.innerHTML = `
      <div class="product-info">
        <h1 class="product-title">${product.text}</h1>
        <h3 class="product-subtitle"><span>${product.subtext1}</span>${product.subtext2}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">${product.price}</div>
        <div class="footer-image"><img src="Frame 6.png" alt=""></div>
      </div>
      <div class="product-image-container">
        <img src="${product.image}" alt="Image of ${product.text}" class="product-image">
      </div>
    `;
    splideList.appendChild(slide);
  });

  // Initialize Splide.js
  const splide = new Splide("#splide", {
    type: "fade",
    perPage: 1,
    pagination: false,
    arrows: true,
    height: "100vh"
  });

  // Update body background color on slide change
  splide.on("move", (index) => {
    const activeProduct = products[index];
    body.style.background = activeProduct.ambientColor;
  });

  // Set the initial background color
  body.style.background = products[0].ambientColor;

  splide.mount();
});
