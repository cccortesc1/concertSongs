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

const repertoire = document.querySelector('#alternateRepertoire');
let songNumber = 0;
repertoire.innerHTML = [1, 2, 3].map(set => {
  const cards = alternateSongs.filter(song => song[0] === set).map(([, title, artist, url]) => {
    songNumber += 1;
    return `<article class="alt-song">
      <header><span>${String(songNumber).padStart(2, '0')}</span><div><h3>${title}</h3><p>${artist}</p></div><a href="${url}" target="_blank" rel="noopener noreferrer">Abrir fuente ↗</a></header>
      <iframe data-src="${url}" title="Letra y acordes alternos de ${title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </article>`;
  }).join('');
  return `<section class="alt-set" id="tanda-${set}"><div class="alt-set-title"><span>TANDA 0${set}</span><h2>${set === 1 ? 'Primer impulso' : set === 2 ? 'Seguimos arriba' : 'Último viaje'}</h2></div>${cards}</section>`;
}).join('');

const frames = document.querySelectorAll('.alt-song iframe[data-src]');
const load = frame => { frame.src = frame.dataset.src; frame.removeAttribute('data-src'); };
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { load(entry.target); observer.unobserve(entry.target); }
  }), { rootMargin: '400px 0px' });
  frames.forEach(frame => observer.observe(frame));
} else {
  frames.forEach(load);
}
