// ===== Menú móvil =====
const burger = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

// ===== Animación de aparición al hacer scroll =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Formulario de contacto =====
// Este formulario es solo de ejemplo (no envía datos a ningún servidor).
// Para conectarlo de verdad, hay dos opciones típicas:
//   1) Un servicio como Formspree / Web3Forms: cambiar el "action" del
//      <form> y quitar el preventDefault de abajo.
//   2) Un enlace de WhatsApp: armar la URL con los datos del formulario,
//      como se muestra comentado más abajo.
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !telefono) {
    formNote.textContent = 'Completá tu nombre y teléfono para continuar.';
    return;
  }

  // Ejemplo de integración con WhatsApp (descomentar y poner el número real):
  //
  // const numero = '50257025386';
  // const texto = `Hola, soy ${nombre}. Me interesa: ${servicio}. ${mensaje}`;
  // window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');

  formNote.textContent = `Gracias, ${nombre}. Este es un formulario de ejemplo — conectalo a WhatsApp o a tu correo para recibir solicitudes reales.`;
  contactForm.reset();
});