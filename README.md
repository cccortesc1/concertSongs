# Noche de egresados · Nefrología FUCS

Micrositio móvil para acompañar el concierto de egresados del 10 de septiembre. Reúne el guion y las 16 canciones en un único recorrido vertical: cada canción tiene una intervención de presentación, con momentos de aplauso, dedicatorias y participación del público para dar aire al show. Después aparecen sus acordes y un espacio para la letra de escenario.

## Uso local

No requiere instalación ni proceso de compilación:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador y avanza por el show haciendo scroll, sin pestañas ni cambios de página. La sección **Letra y cifrado en línea** de cada canción permanece siempre expandida y carga la referencia de Cifra Club al acercarse durante el recorrido. El botón **Ver en pantalla completa** amplía el iframe sobre la aplicación, sin abrir otra pestaña.

El encabezado permite cambiar en cualquier momento entre tres respaldos:

- **Opción actual:** referencias de Cifra Club junto al guion completo.
- **Opción alterna (`alt.html`):** las mismas 16 canciones, en las tres tandas, embebidas desde Ultimate Guitar y La Cuerda. Si una fuente no permite mostrarse dentro del sitio, el botón **Abrir fuente** conserva el acceso directo.
- **Solo PDF (`cancionero.pdf`):** guía compacta de acordes que se puede descargar antes del evento y consultar sin conexión.

Los mapas armónicos están pensados como ayudas rápidas de escenario: antes del concierto se deben confirmar repeticiones, cortes y tonalidades definitivas con el arreglo de la banda.
