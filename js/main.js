/**
 * ALHER - BOMBAS DE AGUA
 * Configuración de WhatsApp y navegación
 */

// =============================================================================
// CONFIGURACIÓN: Ingresá aquí el número de WhatsApp oficial de Alher
// Formato: código de país + código de área + número (sin símbolos ni espacios)
// Ejemplo para CABA: '54911' + número (ej: '5491112345678')
// =============================================================================
const ALHER_CONFIG = {
  whatsappNumber: '5491167178528',
  defaultMessage: 'Hola Alher, quisiera consultar por el servicio de bombas de agua.'
};

/**
 * Genera el enlace directo a WhatsApp con el mensaje predeterminado genérico
 */
function getWhatsAppUrl() {
  const text = encodeURIComponent(ALHER_CONFIG.defaultMessage);
  return `https://wa.me/${ALHER_CONFIG.whatsappNumber}?text=${text}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Asignar enlace a todos los botones de WhatsApp de la página
  const whatsappUrl = getWhatsAppUrl();
  const waButtons = document.querySelectorAll('.wa-direct-link');
  waButtons.forEach(btn => {
    btn.href = whatsappUrl;
  });

  // 2. Control de menú móvil (hamburguesa)
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
    });

    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
      });
    });
  }

  // 3. Año dinámico en el footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
