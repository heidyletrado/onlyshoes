// Mostrar solo la sección activa al hacer clic en el menú
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1);

    document.querySelectorAll('.seccion').forEach(sec => {
      sec.classList.remove('activa');
    });

    const targetSection = document.getElementById(target);
    if (targetSection) {
      targetSection.classList.add('activa');
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Carrito de compras
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const total = document.getElementById('carrito-total');
  lista.innerHTML = '';

  let suma = 0;
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio.toLocaleString()}`;
    lista.appendChild(li);
    suma += item.precio;
  });

  total.textContent = `Total: $${suma.toLocaleString()}`;
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

// Filtrar productos por categoría
function filtrarCategoria(categoria) {
  const productos = document.querySelectorAll('.product-card');

  productos.forEach(producto => {
    if (categoria === 'todos') {
      producto.style.display = 'block';
    } else {
      producto.style.display = producto.classList.contains(categoria) ? 'block' : 'none';
    }
  });
}

// Registro (opcionalmente puedes capturar datos)
document.getElementById('form-registro').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  alert(`Gracias por registrarte, ${nombre}!`);
  this.reset();
});
