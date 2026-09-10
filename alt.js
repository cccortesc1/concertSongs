const alternateSongs = [
  [1, 'Have You Ever Seen the Rain', 'Creedence Clearwater Revival', 'https://es.ultimate-guitar.com/tab/creedence-clearwater-revival/have-you-ever-seen-the-rain-chords-56479'],
  [1, 'Trátame suavemente', 'Soda Stereo', 'https://tabs.ultimate-guitar.com/tab/1549312'],
  [1, 'Summer of ’69', 'Bryan Adams', 'https://tabs.ultimate-guitar.com/tab/bryan-adams/summer-of-69-chords-843137'],
  [1, 'Jump', 'Van Halen', 'https://tabs.ultimate-guitar.com/tab/van-halen/jump-chords-797197'],
  [1, 'Are You Gonna Go My Way', 'Lenny Kravitz', 'https://tabs.ultimate-guitar.com/tab/lenny-kravitz/are-you-gonna-go-my-way-chords-1805867'],
  [1, 'Y volveré', 'Los Bunkers', 'https://tabs.ultimate-guitar.com/tab/los-bunkers/y-volvere-chords-1077695'],
  [2, 'Hysteria', 'Def Leppard', 'https://tabs.ultimate-guitar.com/tab/def-leppard/hysteria-chords-323049'],
  [2, 'Hombre al agua', 'Soda Stereo', 'https://tabs.ultimate-guitar.com/tab/soda-stereo/hombre-al-agua-chords-550101'],
  [2, 'No podrás', 'Cristian Castro', 'https://tabs.ultimate-guitar.com/tab/4257787'],
  [2, 'Gimme tha Power', 'Molotov · Si menor', 'https://es.ultimate-guitar.com/tab/molotov/gimme-tha-power-chords-411065'],
  [3, 'Cosas de la vida', 'Eros Ramazzotti', 'https://acordes.lacuerda.net/eros_ramazotti/cosas_de_la_vida.shtml'],
  [3, 'Ángel de amor', 'Maná', 'https://tabs.ultimate-guitar.com/tab/39292'],
  [3, 'El puñal', 'La Derecha', 'https://tabs.ultimate-guitar.com/tab/1538134'],
  [3, 'Si te pudiera mentir', 'Marco Antonio Solís', 'https://tabs.ultimate-guitar.com/tab/1562144'],
  [3, 'En el muelle de San Blas', 'Maná', 'https://tabs.ultimate-guitar.com/tab/7545'],
  [3, 'De música ligera', 'Soda Stereo', 'https://tabs.ultimate-guitar.com/tab/85042']
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

const repertoire = document.querySelector('#alternateRepertoire');
const escapeHtml = value => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const allowedSources = new Map([
  ['tabs.ultimate-guitar.com', 'Ultimate Guitar'],
  ['es.ultimate-guitar.com', 'Ultimate Guitar'],
  ['acordes.lacuerda.net', 'La Cuerda']
]);

function sourceDetails(url) {
  try {
    const parsedUrl = new URL(url);
    const provider = parsedUrl.protocol === 'https:' && allowedSources.get(parsedUrl.hostname);
    return provider ? { url: parsedUrl.href, provider } : null;
  } catch {
    return null;
  }
}

function alternateScriptCard(script, index) {
  return `<article class="cifra-script alternate-script">
    <div class="flow-marker"><span>GUION</span><b>${String(index + 1).padStart(2, '0')}</b></div>
    <div class="script-content"><small>${escapeHtml(script.label)}</small><h3>${escapeHtml(script.title)}</h3><p>${escapeHtml(script.text).replaceAll('\n', '<br>')}</p><p class="stage-note">↳ ${escapeHtml(script.tip)}</p></div>
  </article>`;
}

let songNumber = 0;
repertoire.innerHTML = [1, 2, 3].map(set => {
  const cards = alternateSongs.reduce((html, song) => {
    if (song[0] !== set) return html;
    const [, title, artist, url] = song;
    const scriptIndex = songNumber;
    songNumber += 1;
    const source = sourceDetails(url);
    const sourceAction = source
      ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" aria-label="Abrir la fuente de ${escapeHtml(title)} en ${source.provider} (pestaña nueva)">Abrir fuente <span aria-hidden="true">↗</span></a>`
      : '<span class="source-unavailable">Fuente no disponible</span>';
    return `${html}${alternateScriptCard(scripts[scriptIndex], scriptIndex)}<article class="alt-song alternate-song">
      <header><span>${String(songNumber).padStart(2, '0')}</span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(artist)}</p></div>${sourceAction}</header>
      <div class="source-access"><span>${source ? source.provider : 'Referencia externa'}</span><p>Consulta la letra y los acordes directamente en la fuente; el discurso seguirá abierto aquí.</p></div>
    </article>`;
  }, '');
  return `<section class="alt-set" id="tanda-${set}"><div class="alt-set-title"><span>TANDA 0${set}</span><h2>${set === 1 ? 'Primer impulso' : set === 2 ? 'Seguimos arriba' : 'Último viaje'}</h2></div>${cards}</section>`;
}).join('');
