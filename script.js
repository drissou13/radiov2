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
    name: "WebRadio Chill",
    type: "radio",
    stream: "  http://rfm.lmn.fm/rfm.mp3",
    image: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/ac/Rfm-2011.svg/1200px-Rfm-2011.svg.png",
},
  {
    name: "Ici Provence ",
    type: "radio",
    stream: "https://icecast.radiofrance.fr/fbprovence-midfi.mp3",
    image: "https://www.radio.fr/300/francebleuprovence.png?version=6c4c99554ac5f738d97ab81f01f2e9ee0657ce16",
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
