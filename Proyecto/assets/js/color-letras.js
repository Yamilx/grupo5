// Detectar cambios en el tema
document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const theme = toggle.getAttribute('data-bs-theme-value');
      document.documentElement.setAttribute('data-bs-theme', theme);

      // Ajustar el color del texto según el tema
      adjustTextColor(theme);
    });
  });

  // Función para ajustar el color del texto
  function adjustTextColor(theme) {
    const textColor = theme === 'dark' ? 'white' : 'black';
    document.body.style.color = textColor;
  }

  // Aplicar el tema inicial
  const initialTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
  adjustTextColor(initialTheme);
