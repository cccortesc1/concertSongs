# Noche de egresados · Nefrología FUCS

Micrositio móvil para acompañar el concierto de egresados del 10 de septiembre. Reúne el guion y las 16 canciones en un único recorrido vertical: cada intervención aparece justo antes de la canción correspondiente, seguida por sus acordes y un espacio para la letra de escenario.

## Uso local

No requiere instalación ni proceso de compilación:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador y avanza por el show haciendo scroll, sin pestañas ni cambios de página. En cada canción puedes desplegar **Letra y cifrado en línea** para consultar la referencia de Cifra Club dentro de la página. La referencia se carga solo al abrirla para no ralentizar el cancionero; si el proveedor bloquea la vista embebida, queda disponible el enlace para abrirla en otra pestaña.

Debajo de cada referencia también puedes pegar una letra autorizada o añadir anotaciones de escenario; ese contenido se guarda automáticamente en el almacenamiento local del dispositivo.

Los mapas armónicos están pensados como ayudas rápidas de escenario: antes del concierto se deben confirmar repeticiones, cortes y tonalidades definitivas con el arreglo de la banda.
