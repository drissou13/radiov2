/* ====== RADIOS ====== */
const radios = [
    {
        name: "Melody radio vintage",
        type: "radio",
        stream: "https://n06a-eu.rcs.revma.com/5a05fstup42vv?rj-ttl=5&rj-tok=AAABm2SBsBcAsmmMDAI5TMCQig",
        image: "https://player.sasecom.tv/radios/melody-radio/assets/presentation.jpg"
    },
  
    {
        name: "Melody Soul collection",
        type: "webradio",
        stream: "https://n19a-eu.rcs.revma.com/m59b5ub8203vv?rj-ttl=5&rj-tok=AAABm2R-QVEAvRQ-UTcGFtv5-g",
        image: "https://player.sasecom.tv/radios/melody-soul-collection/assets/presentation.jpg"
    },
    {
        name: "Melody Azur",
        type: "webradio",
        stream: "https://n12a-eu.rcs.revma.com/4ty9verpuf9uv?rj-ttl=5&rj-tok=AAABm2R6gz0A-IrgMdn2ea2Ocg",
        image: "https://www.melody.tv/wp-content/themes/melody/assets/images/radio/melody-azur/fallback.jpg"
    },
    {
        name: "Chante France 80's",
        type: "webradio",
        stream: "http://chantefrance80s.ice.infomaniak.ch/chantefrance80s-128.mp3",
        image: "https://static.mytuner.mobi/media/tvos_radios/sgpeqjtnkzw4.png"
    },
  { name: "Melody douce", type: "webradio", stream: "https://n29a-eu.rcs.revma.com/cvt1twwbyf9uv?rj-ttl=5&rj-tok=AAABm2SEVW8A1ePGHY-uRPKXtQ", image: "https://player.sasecom.tv/radios/melody-douce/assets/presentation.jpg" 
  },
  { name: "Chante france", type: "radio", stream: "http://chantefrance.ice.infomaniak.ch/chantefrance-128.mp3", image: "https://upload.wikimedia.org/wikipedia/fr/0/0d/Chante_France_Logo.png" },
  { name: "Chante France 90-2000's", type: "webradio", stream: "https://chantefrance90-2000.ice.infomaniak.ch/chantefrance90-2000-128.mp3", image: "https://radiomonitor.fr/assets/images/radios/chante-france-90-2000-s.webp" },
  { name: "NRJ Best Hits 2024-2025", type: "webradio", stream: "https://streaming.nrjaudio.fm/ou3crtuizv6i?origine=fluxradios&aw_0_1st.station=NRJ-Best-Hits-2024-2025", image: "data:image/jpeg;base64,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" },
  { name: "NRJ C'Est Marseille Bebe", type: "webradio", stream: "https://streaming.nrjaudio.fm/oupqwvbgddr9?origine=fluxradios&aw_0_1st.station=NRJ-C-Est-Marseille-Bebe", image: "https://www.radio.fr/300/nrjcestmarseillebebe.jpeg?version=3d848bf1fcddde7185916fa6e9b20965b311d4c1" },
  { name: "Nrj", type: "radio", stream: "   https://streaming.nrjaudio.fm/ou8v5wgk7oiu?origine=fluxradios", image: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/ca/Nrj2014.png/250px-Nrj2014.png" },
  { name: "Nostalgie", type: "radio", stream: "https://streaming.nrjaudio.fm/oug7girb92oc?origine=fluxradios", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0-G7rEWo3E4sN16b1x26coAZrO9qD6-E8A&s" },
  { name: "cherie fm", type: "radio", stream: "https://streaming.nrjaudio.fm/ouuku85n3nje?origine=fluxradios", image: "https://www.nomen.fr/wp-content/uploads/2015/01/cherie_rouge.png" },
  { name: "Rire & Chanson", type: "radio", stream: "https://streaming.nrjaudio.fm/oug7girb92oc?origine=fluxradios", image: "https://upload.wikimedia.org/wikipedia/fr/e/e7/Rire_%26_Chansons_logo_2007.png" },
  { name: "Fun radio", type: "radio", stream: "http://icecast.funradio.fr/fun-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg", image: "https://upload.wikimedia.org/wikipedia/fr/e/eb/Fun_Radio.png" },
  { name: "Europe 2", type: "radio", stream: "http://europe2.lmn.fm/europe2.mp3", image: "https://www.lagardere.com/wp-content/uploads/2022/10/europe2_logo-black-rvb-300x150.png" },
  { name: "NRJ Hip Hop RNB Hits", type: "webradio", stream: "https://streaming.nrjaudio.fm/ouw8ansk6j4d?origine=fluxradios&aw_0_1st.station=NRJ-Hip-Hop-Rnb-Hits", image: "https://d371i8ihhgym7w.cloudfront.net/14769843.png" },
  { name: "Rfm", type: "radio", stream: "http://rfm.lmn.fm/rfm.mp3", image: "https://upload.wikimedia.org/wikipedia/fr/1/19/RFM_logo_2011.png" },
  { name: "Mouv", type: "radio", stream: "http://icecast.radiofrance.fr/mouv-hifi.aac", image: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Le_Mouv%27_logo_2008.svg/1200px-Le_Mouv%27_logo_2008.svg.png" },
  { name: "Skyrock", type: "radio", stream: "http://icecast.skyrock.net/s/natio_aac_128k", image: "https://radiosdir.dez.ovh/storage/66/logo-skyrock.png" },
  { name: "M radio", type: "radio", stream: "http://mfm.ice.infomaniak.ch/mfm-128.mp3", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logo_Mradio.png/1200px-Logo_Mradio.png" },
  { name: "Rire & Chansons Sketches", type: "webradio", stream: "https://streaming.nrjaudio.fm/ou8oqegk7oiu?origine=fluxradios&aw_0_1st.station=Rire-Chansons-SKETCHES", image: "https://direct-radio.fr/files/RIRE-et-CHANSONS-SKETCHES.png" },
  { name: "Rire & Chanson humour du sud ", type: "webradio", stream: "https://streaming.nrjaudio.fm/ouqua8yoeo8p?origine=fluxradios&aw_0_1st.station=Rire-Chansons-HUMOUR-DU-SUD", image: "https://www.radio.fr/300/rireetchansonshumourdusud.jpeg?version=2d9e207b22f016bfc276721bbc89e8a5a9422d0e" },
  { name: "Rire & Chanson Nouvelle géneration", type: "webradio", stream: "https://streaming.nrjaudio.fm/out2kr6ubafg?origine=fluxradios&aw_0_1st.station=Rire-Chansons-NOUVELLE-GENERATION", image: "https://static.mytuner.mobi/media/radios-150px/327/rire-et-chansons-nouvelle-generation.0d49a47a.jpg" },
  { name: "Rire & Chansons Stand Up", type: "webradio", stream: "https://streaming.nrjaudio.fm/oua8brw2dqao?origine=fluxradios&aw_0_1st.station=Rire-Chansons-STAND-UP", image: "https://players.nrjaudio.fm/live-metadata/player/img/player-files/rire/logos/173x173/RIRE-WR-Stand-Up.jpg" },
  { name: "FG", type: "radio", stream: "http://radiofg.impek.com/fg", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Radio_FG_logo_2013.png" },
  { name: "OuiFM", type: "radio", stream: "http://ouifm.ice.infomaniak.ch/ouifm-high.mp3", image: "https://upload.wikimedia.org/wikipedia/fr/archive/f/ff/20140511120503%21OUI_FM_2014_logo.png" },
  { name: "oxygene", type: "radio", stream: "https://vps.cbad.fr/oxygene-grenoble", image: "https://radiooxygene.com/wp-content/uploads/2020/06/logo-1.png" },
  {name: "Grenouille",
        type: "radio",
        stream: "https://live.radiogrenouille.com:8443/live",
        image: "https://tourisme-marseille.com/wp-content/uploads/2021/08/grenouille-1024x1005.png"
    },
  {
    name: "Radio Galère",
    type: "radio",
    stream: "http://www.radiogalere.org:8080/galere.mp3",
    image: "https://radiogalere.org/wp-content/uploads/2024/04/Stickers-rond-74mm.png",
},
  {
    name: "France Maghreb2",
    type: "radio",
    stream: "   http://broadcast.infomaniak.ch/francemaghreb2-high.mp3",
    image: "https://api.radio.orange.com/logos/radios/medium/france_maghreb_2.png",
  },
  {
      name: "Ici Provence ",
    type: "radio",
    stream: "https://icecast.radiofrance.fr/fbprovence-midfi.mp3",
    image: "https://www.radio.fr/300/francebleuprovence.png?version=6c4c99554ac5f738d97ab81f01f2e9ee0657ce16",
},
    {
    name: "France Culture",
    type: "radio",
    stream: "http://icecast.radiofrance.fr/franceculture-midfi.mp3",
    image: "https://www.wikiberal.org/images/a/a3/France_culture_logo.jpg",
},
{
    name: "Europe1",
    type: "radio",
    stream: "https://europe1.lmn.fm/europe1.mp3",
    image: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/f1ae94c600107d567063b5c8813e1891",
    },
{
    name: "Europe2",
    type: "radio",
    stream: "https://europe1.lmn.fm/europe2.mp3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CL9okRY3Hzg-S1qDAT7j167rR0w-rNL_Zw&s",
    },
{
    name: "FG Dance",
    type: "radio",
    stream: "http://stream.rcs.revma.com/zfad8vm4srhvv",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEWrjd0R_DbAWUrTWXu49I1FA2QBfOpIjOg&s",
    },
    {
    name: "Radio Vinci cote azur",
    type: "radio",
    stream: "http://sc.creacast.com/rva-escota-est",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CkJuKWWEKIWaXL7-8NU61sP_pMJj1SuIIQ&s",
    },
    {
    name: "Radio 13engagee ",
    type: "webradio",
    stream: "https://manager10.streamradio.fr:1675/stream",
    image: "https://13engagee.com/uploads/6925d98840d94/site/1765385215_d503cb02dfb57e8cc8a1.png",
    },
    {
        name: "Nostalgie 80",
        type: "webradio",
        stream: "https://streaming.nrjaudio.fm/ouo6kg7nfibk?origine=fluxradios&aw_0_1st.station=Nostalgie-100-Francais-80",
        image: "data:image/jpeg;base64,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"
    },
    {
        name: "Nostalgie chanson française",
        type: "webradio",
        stream: "https://streaming.nrjaudio.fm/ou3ci9uizv6i?origine=fluxradios&aw_0_1st.station=Nostalgie-Chansons-Francaises",
        image:  "https://www.radio.fr/300/nostalgiebecf.png?version=8ff2cd8cc1b1207df49dd64750ad8cc12e18d073"
    },
     {
        name: "Nostalgie danse collector ",
        type: "webradio",
        stream: "https://streaming.nrjaudio.fm/oumvgg8fnozc?origine=fluxradios&aw_0_1st.station=Nostalgie-Dance-Collector",
        image:  "https://radoxo.com/images/france/nostalgie-dance-collector.png"
    },
    {
        name: "Nostalgie party 90 ",
        type: "webradio",
        stream: "https://streaming.nrjaudio.fm/ougobwrb92oc?origine=fluxradios&aw_0_1st.station=Nostalgie-Dance-Party-90",
        image:  "https://players.nrjaudio.fm/live-metadata/player/img/player-files/nosta/logos/173x173/NOSTA-WR_DANCE-PARTY-90.jpg"
    },
    {
        name: "Nostalgie Légendes  ",
        type: "webradio",
        stream: "https://streaming.nrjaudio.fm/ou8ouhgk7oiu?origine=fluxradios&aw_0_1st.station=Nostalgie-Legendes",
        image:  "https://players.nrjaudio.fm/live-metadata/player/img/player-files/nosta/logos/173x173/NOSTA-WR-LEGENDES.jpg"
    },
 ];

/* ====== ELEMENTS ====== */
const cardsContainer = document.getElementById("radio-cards")
const player = document.getElementById("player");
const nowPlaying = document.getElementById("now-playing");
const nowTitle = document.getElementById("now-title");
const tabs = document.querySelectorAll(".tab");
const toggleTheme = document.getElementById("theme-toggle");

/* ====== LOAD RADIOS ====== */
function loadRadios(type) {
    cardsContainer.innerHTML = "";

    radios.filter(r => r.type === type).forEach(radio => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${radio.image}">
            <h3>${radio.name}</h3>
        `;

        card.addEventListener("click", () => {
            player.src = radio.stream;
            player.play();

            nowPlaying.textContent = radio.name;
            nowTitle.textContent = "Chargement...";
        });

        cardsContainer.appendChild(card);
    });
}

/* ====== TABS ====== */
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        loadRadios(tab.dataset.type);
    });
});

/* ====== THEME ====== */
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleTheme.textContent =
        document.body.classList.contains("light") ? "🌞" : "🌙";
});

/* ====== AUTO VOLUME JOUR / NUIT ====== */
function setAutoVolume() {
    const hour = new Date().getHours();
    player.volume = (hour >= 22 || hour < 8) ? 0.1 : 0.5;
}

setAutoVolume();
setInterval(setAutoVolume, 60 * 60 * 1000);

/* ====== METADATA (API READY) ====== */
/*
Exemple avec AzuraCast / Icecast API :

fetch("https://radio-url/api/nowplaying")
  .then(res => res.json())
  .then(data => {
      nowTitle.textContent = data.now_playing.song.text;
  });
*/

/* ====== INIT ====== */
loadRadios("radio");
