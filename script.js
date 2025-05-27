const products = [
{
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    category: "phones",
    image: "https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15+Pro",
    description: "The latest iPhone with amazing camera and performance"
},

{
    id: 2,
    name: "MacBook Air",
    price: 1199,
    category: "laptops",
    image: "https://via.placeholder.com/300x200/10b981/white?text=Macbook+Air",
    description: "Lightweight laptop perfect for work and creativity"
}];

//Step 2; here we are creating a shopping cart via code
let cart =[];

//Step 3; Get references to HTML elements
const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

//step 4; utility function to format prices,this will make price look like "R999" istead of "999"
//price.toFixed(2) this will fix the decimal places
function formatPrice(price) {
    return 'R' + price.toFixed(2)  
}

console.log('JavaScript Loaded successfully!');
console.log('We have', products.length, 'products');
