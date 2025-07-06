// script.js

// Manejo del carrito
document.addEventListener('DOMContentLoaded', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const cartIcon = document.querySelector('.cart-container');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const checkoutBtn = document.getElementById('checkout-btn');

  function updateCartUI() {
    if (!cartList || !cartTotal || !cartCount) return;
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toLocaleString()}`;
      cartList.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = total.toLocaleString();
    cartCount.textContent = cart.length;
  }

  window.agregaralcarrito = function(nombre, precio) {
    const producto = { name: nombre, price: precio };
    cart.push(producto);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    cartItemsContainer.classList.remove('hidden');
  }

  // Botón para vaciar el carrito (si existe)
  const vaciarBtn = document.querySelector('.carrito button');
  if (vaciarBtn) {
    vaciarBtn.addEventListener('click', () => {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
    });
  }

  // Mostrar/ocultar carrito al hacer clic en el ícono
  if (cartIcon && cartItemsContainer) {
    cartIcon.addEventListener('click', () => {
      cartItemsContainer.classList.toggle('hidden');
    });
  }

  // Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert('Compra finalizada. Gracias por su compra.');
      cart = [];
      localStorage.removeItem('cart');
      updateCartUI();
      cartItemsContainer.classList.add('hidden');
    });
  }

  // Registro de usuario
  const form = document.getElementById('registroform');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('nombre').value;
      const email = document.getElementById('correo').value;
      const password = document.getElementById('contraseña').value;
      const user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Usuario registrado correctamente');
      form.reset();
    });
  }

  updateCartUI();
});
