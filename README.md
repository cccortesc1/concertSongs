# Noche de egresados · Nefrología FUCS

Micrositio móvil para acompañar el concierto de egresados del 10 de septiembre. Reúne el guion y las 16 canciones en un único recorrido vertical: cada canción tiene una intervención de presentación, con momentos de aplauso, dedicatorias y participación del público para dar aire al show. Después aparecen sus acordes y un espacio para la letra de escenario.

## Uso local

No requiere instalación ni proceso de compilación:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador y avanza por el show haciendo scroll, sin pestañas ni cambios de página. La sección **Letra y cifrado en línea** de cada canción permanece siempre expandida y carga la referencia de Cifra Club al acercarse durante el recorrido. El botón **Ver en pantalla completa** amplía el iframe sobre la aplicación, sin abrir otra pestaña.

El encabezado permite cambiar en cualquier momento entre las distintas vistas:

- **Opción actual:** referencias de Cifra Club junto al guion completo.
- **Cifra + discurso (`cifra.html`):** recorrido ligero con todo el discurso intercalado y enlaces directos a Cifra Club que se abren en una pestaña nueva.
- **Opción alterna (`alt.html`):** todo el discurso intercalado con las mismas 16 canciones, en las tres tandas, y enlaces seguros para abrir Ultimate Guitar y La Cuerda en una pestaña nueva. No intenta embeber estos proveedores porque bloquean la carga dentro de otros sitios.
- **PDF + discurso (`pdf.html`):** todo el discurso intercalado con 16 visores locales, uno por canción. Los archivos se añaden en `pdf-canciones/` usando los nombres documentados en `pdf-canciones/README.md`.
- **Cancionero anterior (`cancionero.pdf`):** guía compacta de acordes que se conserva como descarga de respaldo.

Los mapas armónicos están pensados como ayudas rápidas de escenario: antes del concierto se deben confirmar repeticiones, cortes y tonalidades definitivas con el arreglo de la banda.
