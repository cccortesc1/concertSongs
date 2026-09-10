const songs = [
  { set: 1, title: 'Have You Ever Seen the Rain', artist: 'Creedence Clearwater Revival', key: 'C', url: 'https://www.cifraclub.com/creedence-clearwater-revival/have-you-ever-seen-the-rain/', parts: [['Intro','Am · F · C · G · C'],['Estrofa','C · C · G · C'],['Pre-coro','C · C7 · F · G'],['Coro','F · G · C · C/B · Am | F · G · C'],['Final','Am · F · C · G · C']] },
  { set: 1, title: 'Trátame suavemente', artist: 'Soda Stereo', key: 'Bm', url: 'https://www.cifraclub.com/soda-stereo/tratame-suavemente/', parts: [['Intro','Bm · A · G · F#m'],['Estrofa','Bm · A · G · F#m'],['Pre-coro','Em · G · D · A'],['Coro','D · A · Em · G | D · A · G'],['Interludio','Bm · A · G · F#m']] },
  { set: 1, title: 'Summer of ’69', artist: 'Bryan Adams', key: 'D', url: 'https://www.cifraclub.com/bryan-adams/summer-of-69/', parts: [['Intro / estrofa','D · A'],['Pre-coro','Bm · A · D · G | Bm · A'],['Coro','D · A · D · A'],['Puente','F · Bb · C · Bb | F · Bb · C'],['Solo','D · A']] },
  { set: 1, title: 'Jump', artist: 'Van Halen', key: 'C', url: 'https://www.cifraclub.com/van-halen/jump/', parts: [['Intro','C · F · G · C'],['Estrofa','C · F · G'],['Pre-coro','F · G · Am · G'],['Coro','C · F · G · C'],['Solo / salida','Am · G · F · G']] },
  { set: 1, title: 'Are You Gonna Go My Way', artist: 'Lenny Kravitz', key: 'E', url: 'https://www.cifraclub.com/lenny-kravitz/are-you-gonna-go-my-way/', parts: [['Riff / estrofa','E7 (riff)'],['Respuesta','G · A · E7'],['Coro','G · A · E7 | G · A · B'],['Solo','E7 (riff)'],['Corte final','G · A · E']] },
  { set: 1, title: 'Y volveré', artist: 'Los Bunkers', key: 'Am', url: 'https://www.cifraclub.com/los-bunkers/y-volvere/', parts: [['Intro','Am · Dm · G · C · F · Dm · E7'],['Estrofa','Am · Dm · G · C | F · Dm · E7'],['Coro','Am · Dm · G · C | F · Dm · E7 · Am'],['Interludio','Am · Dm · E7 · Am']] },
  { set: 2, title: 'Hysteria', artist: 'Def Leppard', key: 'E', url: 'https://www.cifraclub.com/def-leppard/hysteria/3.html', parts: [['Intro','E · Aadd9'],['Estrofa','E · Aadd9 · E · Aadd9'],['Pre-coro','C#m · A · B'],['Coro','E · A · C#m · B | A · B'],['Puente','D · G · A · E']] },
  { set: 2, title: 'Hombre al agua', artist: 'Soda Stereo', key: 'Em', url: 'https://www.cifraclub.com/soda-stereo/hombre-al-agua/', parts: [['Intro','Em · D · C · Bm'],['Estrofa','Em · D · C · Bm'],['Pre-coro','Am · C · G · D'],['Coro','Em · G · D · C'],['Final','Em · D · C']] },
  { set: 2, title: 'No podrás', artist: 'Cristian Castro', key: 'C', url: 'https://www.cifraclub.com/castro-cristian/no-podras/', parts: [['Intro','C · Em · F · G'],['Estrofa','C · Em · F · G'],['Pre-coro','Am · Em · F · Dm · G'],['Coro','C · G/B · Am · Em | F · C/E · Dm · G'],['Final','C · Em · F · G · C']] },
  { set: 2, title: 'Gimme tha Power', artist: 'Molotov', key: 'Bm', url: 'https://www.cifraclub.com/molotov/gimme-the-power/', parts: [['Riff / estrofa','Bm · A · G · F#'],['Pre-coro','Bm · A · G · F#'],['Coro','Bm · D · A · G · F#'],['Corte','Bm (stop)'],['Salida','Bm · A · G · F# · Bm']] },
  { set: 3, title: 'Cosas de la vida', artist: 'Eros Ramazzotti', key: 'E', url: 'https://www.cifraclub.com/eros-ramazzotti/cosas-de-la-vida/', parts: [['Intro','E · B/D# · C#m · A'],['Estrofa','E · B · C#m · G#m | A · E/G# · F#m · B'],['Pre-coro','C#m · G#m · A · E | F#m · B'],['Coro','E · B/D# · C#m · A | E · B · A'],['Final','E · B/D# · C#m · A · E']] },
  { set: 3, title: 'Ángel de amor', artist: 'Maná', key: 'Am', url: 'https://www.cifraclub.com/mana/angel-de-amor/', parts: [['Intro','Am · G · F · E'],['Estrofa','Am · G · F · E'],['Pre-coro','Dm · G · C · E'],['Coro','Am · F · C · G | Dm · Am · E'],['Solo','Am · G · F · E']] },
  { set: 3, title: 'El puñal', artist: 'La Derecha', key: 'Em', url: 'https://www.cifraclub.com/la-derecha/el-punal/', parts: [['Intro / riff','Em · D · C · B7'],['Estrofa','Em · D · C · B7'],['Coro','G · D · Am · Em | C · B7'],['Puente','Am · Em · C · B7'],['Final','Em · D · C · B7 · Em']] },
  { set: 3, title: 'Si te pudiera mentir', artist: 'Marco Antonio Solís', key: 'A', url: 'https://www.cifraclub.com/marco-antonio-solis/si-te-pudiera-mentir/', parts: [['Intro','A · E/G# · F#m · C#m · D · A/C# · Bm · E'],['Estrofa','A · E/G# · F#m · C#m | D · A/C# · Bm · E'],['Pre-coro','D · E · C#m · F#m | Bm · E'],['Coro','A · E/G# · F#m · C#m | D · A/C# · Bm · E'],['Final','D · E · A']] },
  { set: 3, title: 'En el muelle de San Blas', artist: 'Maná', key: 'Dm', url: 'https://www.cifraclub.com/mana/en-el-muelle-de-san-blas/', parts: [['Intro','Dm · C · Bb · A'],['Estrofa','Dm · C · Bb · A'],['Pre-coro','Gm · C · F · Bb | Gm · A'],['Coro','Dm · C · Bb · A'],['Solo / final','Dm · C · Bb · A · Dm']] },
  { set: 3, title: 'De música ligera', artist: 'Soda Stereo', key: 'Bm', url: 'https://www.cifraclub.com/soda-stereo/de-musica-ligera/', parts: [['Toda la canción','Bm · G · D · A'],['Corte final','Bm · G · D · A · Bm']] }
];

const scripts = [
  { label: 'APERTURA · ANTES DE LA TANDA 1', title: 'Bienvenida', text: '¡Muy buenas noches! Qué alegría estar aquí celebrando a una promoción que aprendió a cuidar cada detalle, a resistir turnos imposibles y, sobre todo, a darle vida a la vida.\n\nEsta noche dejamos la bata a un lado. Egresados de Nefrología de la FUCS: este aplauso es para ustedes. ¡Que comience la música!', tip: 'Pausa después de “para ustedes” y deja que llegue el aplauso.' },
  { label: 'DESPUÉS DE HAVE YOU EVER SEEN THE RAIN', title: 'Romper el hielo', text: 'Dicen que después de la lluvia siempre sale el sol… y ustedes saben mejor que nadie que también hay que cuidar muy bien cuánto líquido cayó.\n\n¡Un aplauso para los especialistas que esta noche sí tienen permiso de celebrar sin hacer balance!', tip: 'Sonríe; el guiño médico debe sentirse cómplice, no explicado.' },
  { label: 'ANTES DE SUMMER OF ’69', title: 'Subir la energía', text: 'Esta noche no contamos guardias, no contamos horas y no contamos creatinina. Esta noche contamos historias: las amistades, los maestros y esos momentos que hicieron de esta promoción una familia.\n\nVamos con una canción para recordar los mejores días de nuestra vida.', tip: 'Entra la batería inmediatamente después de “vida”.' },
  { label: 'DESPUÉS DE SUMMER OF ’69', title: 'El salto de la noche', text: 'Hay recuerdos que nos hacen mirar atrás y otros que nos empujan a dar el siguiente paso. Ustedes ya dieron uno enorme: terminar una especialidad que exige cabeza fría, manos firmes y un corazón muy despierto.\n\nAhora queremos ver al salón entero dar un salto con nosotros. Cuando contemos tres, quienes todavía sigan sentados se ponen de pie: ¡uno, dos…!', tip: 'Espera a que la gente se levante, completa el “tres” y marca la entrada de Jump.' },
  { label: 'DESPUÉS DE JUMP', title: 'Que se escuche la promoción', text: '¡Eso era! Ya sabemos que aquí nadie le tiene miedo a subir la energía. Pero una celebración se mide también por cuánto se hace escuchar su gente.\n\nVamos a dividir el salón en dos: este lado grita “¡Nefro!” y este lado responde “¡FUCS!”. Ensayamos una vez… y después dejamos que la guitarra haga el resto.', tip: 'Haz dos rondas del llamado y respuesta; en la segunda pide más volumen.' },
  { label: 'ANTES DE Y VOLVERÉ', title: 'Cierre de la tanda 1', text: 'FUCS, ¿cómo están esas voces? Porque hay promesas que uno hace con el corazón: volver a los amigos, volver a esta casa y volver a celebrar todo lo que viene.\n\nEsta va para quienes hicieron parte del camino, incluso cuando la distancia se hizo grande.', tip: 'Baja el volumen y deja dos segundos antes de dar la entrada.' },
  { label: 'APERTURA · TANDA 2', title: 'Regreso con fuerza', text: '¡Estamos de vuelta! Ya comprobamos que esta promoción tiene ritmo. Ahora queremos comprobar si también tiene energía para una segunda ronda.\n\nDespués de tantos años tomando decisiones bajo presión, esta es fácil: ¿nos acompañan cantando?', tip: 'Busca una respuesta del público; repite la pregunta si hace falta.' },
  { label: 'DESPUÉS DE HYSTERIA', title: 'Una canción para el equipo', text: 'En una noche como esta también celebramos a quienes hicieron más llevadero el camino: el compañero que cubrió una guardia, la profesora que tuvo paciencia y la familia que siempre preguntó “¿ya comiste?”.\n\nBusquen con la mirada a una de esas personas y regálenle un aplauso. Esta siguiente canción va por los equipos que nunca dejan a nadie a la deriva.', tip: 'Deja que el aplauso crezca y señala a la banda para entrar sobre el último golpe.' },
  { label: 'DESPUÉS DE HOMBRE AL AGUA', title: 'Coro de especialistas', text: 'A estas alturas ya está claro que esta promoción sabe mantenerse a flote. Ahora viene una prueba menos complicada que cualquier examen: cantar un coro sin preocuparse por la afinación.\n\nPrimero las familias, ¿están listas? Ahora los profesores. Y finalmente, queremos escuchar a los egresados. Que quede claro que esta noche nadie podrá decir que no cantó.', tip: 'Nombra cada grupo despacio y espera su respuesta antes de continuar.' },
  { label: 'ANTES DE GIMME THA POWER', title: 'Pico de energía', text: 'Llegar hasta aquí exigió conocimiento, carácter y una fuerza enorme. Pero el título no solo da poder: da la oportunidad de servir, enseñar y transformar la vida de muchas personas.\n\nEgresados, esta canción es para celebrar ese poder. ¡Arriba esas manos!', tip: 'Cuenta “¡uno, dos, tres!” con la mano antes de arrancar.' },
  { label: 'APERTURA · TANDA 3', title: 'El último viaje', text: 'Llegamos a la última tanda, pero nadie ha dicho que la noche se esté acabando. Esta parte es para cantar sin pena, abrazar a la persona de al lado y guardar un recuerdo que dure mucho más que cualquier guardia.\n\n¿Listos para darlo todo?', tip: 'Mira a distintas zonas del salón mientras hablas.' },
  { label: 'DESPUÉS DE COSAS DE LA VIDA', title: 'Los que caminaron al lado', text: 'Las cosas de la vida nos trajeron hasta este momento, pero nadie llega solo. Detrás de cada diploma hubo mensajes a deshoras, cafés compartidos, consejos oportunos y abrazos que devolvieron la fuerza.\n\nEgresados: miren por un instante a sus familias y a sus maestros. Este aplauso no se pide para ustedes, sino que nace de ustedes para quienes caminaron a su lado.', tip: 'Invita a los egresados a iniciar el aplauso y espera a que termine por completo.' },
  { label: 'DESPUÉS DE ÁNGEL DE AMOR', title: 'Brindis por lo aprendido', text: 'Que nunca falten esas personas capaces de cuidarnos mientras nosotros aprendemos a cuidar a otros. Y que tampoco falte la alegría de reencontrarnos para contar en qué se convirtió todo este esfuerzo.\n\nLevantemos las copas —o las manos— por lo aprendido, por los pacientes que dejaron una huella y por los nuevos caminos que empiezan hoy. ¡Salud por esta promoción!', tip: 'Da tiempo para que todos levanten algo y cierra con “¡salud!” junto al público.' },
  { label: 'DESPUÉS DE EL PUÑAL', title: 'Momento de dedicar', text: 'Hay canciones que se cantan fuerte y otras que encuentran a una persona en particular. La que viene es de esas que uno termina dedicando, aunque al principio jure que no.\n\nAsí que aprovechen: acerquen a quien quieren, enciendan las luces de sus teléfonos y regálense este minuto sin guardias, sin alarmas y sin mirar el reloj.', tip: 'Espera a que aparezcan las luces; la guitarra puede sostener un fondo suave.' },
  { label: 'DESPUÉS DE SI TE PUDIERA MENTIR', title: 'La postal del recuerdo', text: 'No les vamos a mentir: este momento merece una foto. Junten las mesas, abracen a sus compañeros y miren hacia la cámara; queremos guardar la imagen de la promoción completa celebrando junta.\n\nA la cuenta de tres, todos dicen “¡Nefrología!”. Una seria para las familias… y ahora otra con las manos arriba para nosotros.', tip: 'Haz dos fotos y confirma con producción antes de seguir; la banda sostiene ambiente.' },
  { label: 'ANTES DE DE MÚSICA LIGERA', title: 'Gran despedida', text: 'Estamos llegando al final, pero todavía nos queda voz para una última respuesta. ¿Quiénes sobrevivieron a las madrugadas? ¿Quiénes hicieron de la FUCS una casa? ¿Y quiénes van a celebrar hasta el último acorde?\n\nQueremos felicitar a cada egresado, a sus familias, a sus profesores y a todos los que sostuvieron este sueño. Que nunca les falte humanidad para cuidar, curiosidad para aprender y música para volver a encontrarse.\n\nAntes de nuestra última canción queremos presentarles a quienes hicieron posible esta noche: Pedro Rocha en las congas y el sonido; Rafael Perez en los teclados; Juan Rocha en la guitarra; quien no necesita presentación el día de hoy, Rodolfo Torres en la batería; y quien les habla, su servidor, Camilo Cortes en el bajo.\n\nGracias, Nefrología FUCS. ¡Esta última la cantamos todos!', tip: 'Deja que respondan cada pregunta y presenta a los integrantes de la banda antes del cierre.' }
];

// Cada intervención se inserta justo antes de la canción a la que da entrada.
const scriptBeforeSong = new Map(scripts.map((_, index) => [index, index]));
const showTimeline = document.querySelector('#showTimeline');
const escapeHtml = value => value.replace(/[&<>"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[character]);

function scriptCard(script, index) {
  return `<article class="flow-script">
    <div class="flow-marker"><span>GUION</span><b>${String(index + 1).padStart(2, '0')}</b></div>
    <div class="script-content"><small>${script.label}</small><h3>${script.title}</h3><p>${script.text.replaceAll('\n', '<br>')}</p><p class="stage-note">↳ ${script.tip}</p></div>
  </article>`;
}

function songCard(song, index) {
  return `<article class="flow-song" id="cancion-${index + 1}">
    <header class="song-head">
      <div class="flow-marker"><span>CANCIÓN</span><b>${String(index + 1).padStart(2, '0')}</b></div>
      <div class="song-title">${song.title}<small>${song.artist} · Tanda ${song.set}</small></div>
      <span class="key">Tono ${song.key}</span>
    </header>
    <div class="embedded-material">
      <section class="chord-sheet">
        <div class="sheet-head"><span>ACORDES · CIFRADO AMERICANO</span><span>TONO ${song.key}</span></div>
        <div class="chord-parts">${song.parts.map(([name, chords]) => `<div><small>${name}</small><code>${chords}</code></div>`).join('')}</div>
        <p>Los puntos separan cambios; la barra vertical marca una nueva frase.</p>
      </section>
      <section class="lyrics-sheet">
        <div class="lyrics-heading"><span>LETRA Y CIFRADO EN LÍNEA</span><b>Referencia expandida</b></div>
        <div class="reference-head">
          <p>Referencia de Cifra Club embebida para consultar durante el show.</p>
          <button class="open-reference" type="button" data-reference-url="${song.url}" data-reference-title="${escapeHtml(song.title)}">Ver en pantalla completa <span aria-hidden="true">⛶</span></button>
        </div>
        <iframe class="song-reference" data-src="${song.url}" title="Letra y cifrado de ${escapeHtml(song.title)} en Cifra Club" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p class="iframe-fallback">Si el proveedor impide cargar la referencia, prueba el modo de pantalla completa.</p>
      </section>
    </div>
    ${index < songs.length - 1 ? '<div class="next-cue">SIGUE <span>↓</span></div>' : ''}
  </article>`;
}

showTimeline.innerHTML = songs.map((song, index) => {
  const scriptIndex = scriptBeforeSong.get(index);
  return `${scriptIndex === undefined ? '' : scriptCard(scripts[scriptIndex], scriptIndex)}${songCard(song, index)}`;
}).join('');

function loadSongReference(frame) {
  if (!frame) return;
  frame.src = frame.dataset.src;
  frame.removeAttribute('data-src');
}

const referenceFrames = document.querySelectorAll('.song-reference[data-src]');
if ('IntersectionObserver' in window) {
  const referenceObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      loadSongReference(entry.target);
      referenceObserver.unobserve(entry.target);
    });
  }, { rootMargin: '500px 0px' });
  referenceFrames.forEach(frame => referenceObserver.observe(frame));
} else {
  referenceFrames.forEach(loadSongReference);
}

const referenceViewer = document.querySelector('#referenceViewer');
const fullscreenReference = document.querySelector('#fullscreenReference');
const referenceViewerTitle = document.querySelector('#referenceViewerTitle');

showTimeline.addEventListener('click', async event => {
  const button = event.target.closest('.open-reference');
  if (!button) return;
  referenceViewerTitle.textContent = button.dataset.referenceTitle;
  fullscreenReference.src = button.dataset.referenceUrl;
  referenceViewer.showModal();
  if (referenceViewer.requestFullscreen) {
    try {
      await referenceViewer.requestFullscreen();
    } catch (error) {
      // El diálogo ya ocupa toda la ventana cuando el navegador no autoriza Fullscreen API.
    }
  }
});

async function closeReferenceViewer() {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  }
  referenceViewer.close();
  fullscreenReference.removeAttribute('src');
}

document.querySelector('#closeReferenceViewer').addEventListener('click', closeReferenceViewer);
referenceViewer.addEventListener('cancel', event => {
  event.preventDefault();
  closeReferenceViewer();
});
referenceViewer.addEventListener('click', event => {
  if (event.target === referenceViewer) closeReferenceViewer();
});

const menu = document.querySelector('#mainNav');
const menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
