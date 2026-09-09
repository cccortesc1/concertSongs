const sets = {
  1: [
    { title: 'Have You Ever Seen the Rain', artist: 'Creedence Clearwater Revival', key: 'Do', url: 'https://www.cifraclub.com/creedence-clearwater-revival/have-you-ever-seen-the-rain/' },
    { title: 'Trátame suavemente', artist: 'Soda Stereo', key: 'Si menor', url: 'https://www.cifraclub.com/soda-stereo/tratame-suavemente/' },
    { title: 'Summer of ’69', artist: 'Bryan Adams', url: 'https://www.cifraclub.com/bryan-adams/summer-of-69/' },
    { title: 'Jump', artist: 'Van Halen', url: 'https://www.cifraclub.com/van-halen/jump/' },
    { title: 'Are You Gonna Go My Way', artist: 'Lenny Kravitz', url: 'https://www.cifraclub.com/lenny-kravitz/are-you-gonna-go-my-way/' },
    { title: 'Y volveré', artist: 'Los Bunkers', url: 'https://www.cifraclub.com/los-bunkers/y-volvere/' }
  ],
  2: [
    { title: 'Hysteria', artist: 'Def Leppard', url: 'https://www.cifraclub.com/def-leppard/hysteria/3.html' },
    { title: 'Hombre al agua', artist: 'Soda Stereo', url: 'https://www.cifraclub.com/soda-stereo/hombre-al-agua/' },
    { title: 'No podrás', artist: 'Cristian Castro', url: 'https://www.cifraclub.com/castro-cristian/no-podras/' },
    { title: 'Gimme tha Power', artist: 'Molotov', key: 'Si menor', url: 'https://www.cifraclub.com/molotov/gimme-the-power/' }
  ],
  3: [
    { title: 'Cosas de la vida', artist: 'Eros Ramazzotti', url: 'https://www.cifraclub.com/eros-ramazzotti/cosas-de-la-vida/' },
    { title: 'Ángel de amor', artist: 'Maná', url: 'https://www.cifraclub.com/mana/angel-de-amor/' },
    { title: 'El puñal', artist: 'La Derecha', url: 'https://www.cifraclub.com/la-derecha/el-punal/' },
    { title: 'Si te pudiera mentir', artist: 'Marco Antonio Solís', url: 'https://www.cifraclub.com/marco-antonio-solis/si-te-pudiera-mentir/' },
    { title: 'En el muelle de San Blas', artist: 'Maná', url: 'https://www.cifraclub.com/mana/en-el-muelle-de-san-blas/' },
    { title: 'De música ligera', artist: 'Soda Stereo', url: 'https://www.cifraclub.com/soda-stereo/de-musica-ligera/' }
  ]
};

const scripts = [
  { label: 'APERTURA · ANTES DE LA TANDA 1', title: 'Bienvenida', text: '¡Muy buenas noches! Qué alegría estar aquí celebrando a una promoción que aprendió a cuidar cada detalle, a resistir turnos imposibles y, sobre todo, a darle vida a la vida.\n\nEsta noche dejamos la bata a un lado. Egresados de Nefrología de la FUCS: este aplauso es para ustedes. ¡Que comience la música!', tip: 'Pausa después de “para ustedes” y deja que llegue el aplauso.' },
  { label: 'DESPUÉS DE HAVE YOU EVER SEEN THE RAIN', title: 'Romper el hielo', text: 'Dicen que después de la lluvia siempre sale el sol… y ustedes saben mejor que nadie que también hay que cuidar muy bien cuánto líquido cayó.\n\n¡Un aplauso para los especialistas que esta noche sí tienen permiso de celebrar sin hacer balance!', tip: 'Sonríe; el guiño médico debe sentirse cómplice, no explicado.' },
  { label: 'ANTES DE SUMMER OF ’69', title: 'Subir la energía', text: 'Esta noche no contamos guardias, no contamos horas y no contamos creatinina. Esta noche contamos historias: las amistades, los maestros y esos momentos que hicieron de esta promoción una familia.\n\nVamos con una canción para recordar los mejores días de nuestra vida.', tip: 'Entra la batería inmediatamente después de “vida”.' },
  { label: 'ANTES DE Y VOLVERÉ', title: 'Cierre de la tanda 1', text: 'FUCS, ¿cómo están esas voces? Porque hay promesas que uno hace con el corazón: volver a los amigos, volver a esta casa y volver a celebrar todo lo que viene.\n\nEsta va para quienes hicieron parte del camino, incluso cuando la distancia se hizo grande.', tip: 'Baja el volumen y deja dos segundos antes de dar la entrada.' },
  { label: 'APERTURA · TANDA 2', title: 'Regreso con fuerza', text: '¡Estamos de vuelta! Ya comprobamos que esta promoción tiene ritmo. Ahora queremos comprobar si también tiene energía para una segunda ronda.\n\nDespués de tantos años tomando decisiones bajo presión, esta es fácil: ¿nos acompañan cantando?', tip: 'Busca una respuesta del público; repite la pregunta si hace falta.' },
  { label: 'ANTES DE GIMME THA POWER', title: 'Pico de energía', text: 'Llegar hasta aquí exigió conocimiento, carácter y una fuerza enorme. Pero el título no solo da poder: da la oportunidad de servir, enseñar y transformar la vida de muchas personas.\n\nEgresados, esta canción es para celebrar ese poder. ¡Arriba esas manos!', tip: 'Cuenta “¡uno, dos, tres!” con la mano antes de arrancar.' },
  { label: 'APERTURA · TANDA 3', title: 'El último viaje', text: 'Llegamos a la última tanda, pero nadie ha dicho que la noche se esté acabando. Esta parte es para cantar sin pena, abrazar a la persona de al lado y guardar un recuerdo que dure mucho más que cualquier guardia.\n\n¿Listos para darlo todo?', tip: 'Mira a distintas zonas del salón mientras hablas.' },
  { label: 'ANTES DE DE MÚSICA LIGERA', title: 'Gran despedida', text: 'Antes de la última canción, queremos felicitar a cada egresado, a sus familias, a sus profesores y a todos los que sostuvieron este sueño. Que nunca les falte humanidad para cuidar, curiosidad para aprender y música para volver a encontrarse.\n\nSomos [NOMBRE DE LA BANDA]. Gracias, Nefrología FUCS. ¡Esta última la cantamos todos!', tip: 'Di el nombre de cada integrante antes de este cierre si el tiempo lo permite.' }
];

const songList = document.querySelector('#songList');
function renderSet(number) {
  songList.innerHTML = sets[number].map((song, index) => `
    <article class="song-row">
      <span class="song-number">${String(index + 1).padStart(2, '0')}</span>
      <div class="song-title">${song.title}<small>${song.artist}</small></div>
      ${song.key ? `<span class="key">${song.key}</span>` : '<span></span>'}
      <a class="chord-link" href="${song.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir letra y acordes de ${song.title}">Letra y acordes <span>↗</span></a>
    </article>`).join('');
}

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  tab.classList.add('active'); tab.setAttribute('aria-selected', 'true'); renderSet(tab.dataset.set);
}));
renderSet(1);

document.querySelector('#scriptCards').innerHTML = scripts.map((script, index) => `
  <article class="script-card">
    <span class="script-index">0${index + 1}</span>
    <div class="script-content"><small>${script.label}</small><h3>${script.title}</h3><p>${script.text.replaceAll('\n', '<br>')}</p><p class="stage-note">↳ ${script.tip}</p></div>
  </article>`).join('');

const menu = document.querySelector('#mainNav');
const menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));

const prompt = document.querySelector('#teleprompter');
let promptIndex = 0;
let promptSize = 42;
function renderPrompt() {
  const item = scripts[promptIndex];
  document.querySelector('#promptLabel').textContent = item.label;
  document.querySelector('#promptText').textContent = item.text;
  document.querySelector('#promptTip').textContent = `Nota: ${item.tip}`;
  document.querySelector('#promptPosition').textContent = `${promptIndex + 1} de ${scripts.length}`;
  document.querySelector('#promptPrev').disabled = promptIndex === 0;
  document.querySelector('#promptNext').textContent = promptIndex === scripts.length - 1 ? 'Volver al inicio ↺' : 'Siguiente →';
  document.querySelector('#promptDots').innerHTML = scripts.map((_, i) => `<i class="${i === promptIndex ? 'active' : ''}"></i>`).join('');
}
document.querySelectorAll('[data-open-teleprompter]').forEach(button => button.addEventListener('click', () => { renderPrompt(); prompt.showModal(); }));
document.querySelector('#closePrompt').addEventListener('click', () => prompt.close());
document.querySelector('#promptPrev').addEventListener('click', () => { if (promptIndex > 0) promptIndex--; renderPrompt(); });
document.querySelector('#promptNext').addEventListener('click', () => { promptIndex = (promptIndex + 1) % scripts.length; renderPrompt(); });
document.querySelector('#fontDown').addEventListener('click', () => { promptSize = Math.max(24, promptSize - 4); document.querySelector('#promptText').style.fontSize = `${promptSize}px`; });
document.querySelector('#fontUp').addEventListener('click', () => { promptSize = Math.min(72, promptSize + 4); document.querySelector('#promptText').style.fontSize = `${promptSize}px`; });
document.addEventListener('keydown', event => {
  if (!prompt.open) return;
  if (event.key === 'ArrowRight' || event.key === ' ') document.querySelector('#promptNext').click();
  if (event.key === 'ArrowLeft') document.querySelector('#promptPrev').click();
});
