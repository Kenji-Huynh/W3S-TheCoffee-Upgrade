document.querySelectorAll("nav ul li a").forEach((link) => {
      link.addEventListener("click", function () {
        document
          .querySelectorAll("nav ul li a")
          .forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
      });
    });
    const foodData = [
    { img: "/assets/img/food-1.jpg", name: "Croque Monsieur", desc: "Bánh mì nướng kẹp phô mai và thịt nguội.", price: "$12" },
    { img: "/assets/img/food-2.jpg", name: "Quiche Lorraine", desc: "Bánh tart mặn với nhân trứng, kem tươi.", price: "$10" },
    { img: "/assets/img/food-3.jpg", name: "Ratatouille", desc: "Rau hầm Provence: cà tím, bí ngòi.", price: "$15" },
    { img: "/assets/img/food-4.jpg", name: "Boeuf Bourguignon", desc: "Bò hầm rượu vang đỏ Burgundy.", price: "$20" },
    { img: "/assets/img/food-5.jpg", name: "Coq au Vin", desc: "Gà nấu rượu vang đỏ, nấm, hành tây.", price: "$18" },
    { img: "/assets/img/food-6.jpg", name: "Tartiflette", desc: "Khoai tây nướng với phô mai Reblochon.", price: "$14" },
    { img: "/assets/img/food-7.jpg", name: "Soupe à l'Oignon", desc: "Súp hành tây phủ phô mai tan chảy đậm đà mùi vị.", price: "$11" },
    { img: "/assets/img/food-8.jpg", name: "Crêpes Suzette", desc: "Bánh crepe sốt cam tan chảy Grand Marnier.", price: "$9" }
  ];

  const drinkData = [
    { img: "/assets/img/drink-1.jpg", name: "Espresso", desc: "Cà phê đậm đặc nguyên chất.", price: "$5" },
    { img: "/assets/img/drink-2.jpg", name: "Cappuccino", desc: "Cà phê sữa bọt kem mịn màng.", price: "$6" },
    { img: "/assets/img/drink-3.jpg", name: "Latte", desc: "Sự kết hợp hoàn hảo giữa espresso và sữa.", price: "$6" },
    { img: "/assets/img/drink-4.jpg", name: "Mocha", desc: "Espresso, sô cô la và sữa tươi.", price: "$7" },
    { img: "/assets/img/drink-5.jpg", name: "Matcha Latte", desc: "Trà xanh Nhật Bản pha sữa.", price: "$6" },
    { img: "/assets/img/drink-6.jpg", name: "Iced Coffee", desc: "Cà phê sữa đá đậm đà.", price: "$5" },
    { img: "/assets/img/drink-7.jpg", name: "Fruit Tea", desc: "Trà hoa quả tươi mát.", price: "$6" },
    { img: "/assets/img/drink-8.jpg", name: "Smoothie", desc: "Sinh tố trái cây nguyên chất.", price: "$7" }
  ];

  const listContainer = document.querySelector(".list-grid");
  const foodBtn = document.getElementById("food-btn");
  const drinkBtn = document.getElementById("drink-btn");

  function renderMenu(items) {
    listContainer.innerHTML = items.map(item => `
      <div class="list-item">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <span class="price">${item.price}</span>
        <button class="order-btn">Order Now</button>
      </div>
    `).join("");
  }

  foodBtn.addEventListener("click", () => {
    renderMenu(foodData);
    foodBtn.classList.add("active");
    drinkBtn.classList.remove("active");
  });

  drinkBtn.addEventListener("click", () => {
    renderMenu(drinkData);
    drinkBtn.classList.add("active");
    foodBtn.classList.remove("active");
  });

  // Load mặc định là Food
  renderMenu(foodData);

  // hamburger-toggle
  function toggleMenu() {
    document.querySelector('#nav-list').classList.toggle('active');
};

function toggleMenu() {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
}

// Đóng menu khi click vào link
document.querySelectorAll('#nav-list li a').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('nav-list').classList.remove('active');
  });
});

// Đóng menu khi click ra ngoài
document.addEventListener('click', function(event) {
  const navList = document.getElementById('nav-list');
  const hamburger = document.querySelector('.hamburger');
  
  if (!hamburger.contains(event.target) && !navList.contains(event.target) && navList.classList.contains('active')) {
    navList.classList.remove('active');
  }
});


document.querySelectorAll("#nav ul li a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll("#nav ul li a")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});
