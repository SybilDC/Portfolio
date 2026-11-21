/* ============================================================
   projects.js  –  alle categorieën en projecten
   - Wil je een project toevoegen? Kopieer een blok en pas het aan.
   - Wil je een project verbergen? Zet  hidden: true  of verwijder het blok.
   - Elke tekst heeft een nl- en en-versie.
   ============================================================ */
(function () {
  const A = "assets/projects/";
  const vid = (cat, name, label) => ({ type: "video", src: `${A}${cat}/${name}.mp4`, poster: `${A}${cat}/${name}.jpg`, label });
  const img = (cat, file, label, pos) => ({ type: "image", src: `${A}${cat}/${file}`, label, pos });

  const categories = [
    { id: "2d-motion", title: { nl: "2D & Motion", en: "2D & Motion" },
      intro: { nl: "Karakteranimatie, lipsync, parallax en meer, vooral gemaakt in Illustrator en After Effects.",
               en: "Character animation, lipsync, parallax and more, mostly made in Illustrator and After Effects." } },
    { id: "3d-design", title: { nl: "3D Design", en: "3D Design" },
      intro: { nl: "Van Cinema 4D-experimenten tot mijn eerste stappen in Unreal Engine.",
               en: "From Cinema 4D experiments to my first steps in Unreal Engine." } },
    { id: "branding", title: { nl: "Branding & Grafisch Ontwerp", en: "Branding & Graphic Design" },
      intro: { nl: "Verpakkingen, logo’s en visuele identiteiten.",
               en: "Packaging, logos and visual identities." } },
    { id: "personal", title: { nl: "Persoonlijke projecten", en: "Personal Projects" },
      intro: { nl: "Projecten die ik buiten school maak.",
               en: "Projects I make outside of school." } }
  ];

  const projects = [
    /* ---------------- 2D & MOTION ---------------- */
    { id: "character-animation", cat: "2d-motion", title: "Character Animation",
      thumb: { src: `${A}2d-motion/01_characterAnimation.jpg` },
      tools: ["Adobe Illustrator", "Adobe After Effects"],
      desc: {
        nl: ["A Walk in the Park",
            "Voor de Dag van het Park maakte ik een korte animatie rond het  idee dat een park er voor iedereen is. Ik ontwierp mijn eigen personage en bracht het tot leven met een walk cycle, een draai van het hoofd en een vrolijke soundtrack.",],
        en: ["A Walk in the Park",
            "For Park Day, I created a short animation based on the idea that a park is for everyone. I designed my own character and brought it to life with a walk cycle, a head turn and a cheerful soundtrack.",] },
      media: [ vid("2d-motion", "01_characterAnimation") ] },

    { id: "lipsync", cat: "2d-motion", title: "Lipsync",
      thumb: { src: `${A}2d-motion/02_Lypsinc.jpg` },
      tools: ["Adobe Illustrator", "Adobe After Effects"],
      desc: {
        nl: ["Lipsync",
             "Voor deze lipsync koos ik een grappige uitspraak over iemand die alweer zijn wachtwoord vergeten is. Ik ontwierp een oudere dame in de stijl van Selexion en animeerde haar mondbewegingen zodat ze perfect bij de gesproken tekst passen."],
        en: ["Lipsync",
             "For this lipsync project, I chose a funny line about someone who has forgotten their password once again. I designed an older woman in the Selexion style and animated her mouth movements to match the spoken audio."] },
      media: [ vid("2d-motion", "02_Lypsinc") ] },

    { id: "parallax", cat: "2d-motion", title: "Parallax",
      thumb: { src: `${A}2d-motion/03_Paralax_25sec.jpg` },
      tools: ["Adobe Photoshop", "Adobe After Effects"],
      desc: {
        nl: ["Apollo 11",
             "Voor een fictieve tentoonstelling over Apollo 11 maakte ik een promo met authentieke NASA-beelden. Door de beelden in lagen op te bouwen en met parallax te animeren, creëerde ik diepte en beweging. Ik maakte zowel een versie van 25 als 10 seconden."],
        en: ["Apollo 11",
             "For a fictional Apollo 11 exhibition, I created a promotional video using authentic NASA images. By layering the images and animating them with parallax, I added depth and movement. I made both a 25-second and a 10-second version."] },
      media: [ vid("2d-motion", "03_Paralax_25sec", { nl: "Versie van 25 seconden", en: "25-second version" }),
               vid("2d-motion", "03_Paralax_10sec", { nl: "Versie van 10 seconden", en: "10-second version" }) ] },

    { id: "logo-animation", cat: "2d-motion", title: "Logo Animation",
      thumb: { src: `${A}2d-motion/04_Logo_introaniamtie.jpg` },
      tools: ["Adobe After Effects"],
      role: { nl: "Animatie van het logo en de visuele identiteit", en: "Animating the logo and visual identity" },
      desc: {
        nl: ["Video Experience Day 2026",
             "Voor Video Experience Day animeerde ik het logo dat mijn brandpartner ontwierp. Daarnaast maakte ik verschillende logoanimaties, motion ornaments en een introvideo. Alles werd uitgewerkt tot één samenhangende visuele stijl."],
        en: ["Video Experience Day 2026",
             "For Video Experience Day, I animated the logo designed by my branding partner. I also created different logo animations, motion ornaments and an intro video. Together, they form one consistent visual style."] },
      media: [ vid("2d-motion", "04_Logo_introaniamtie", { nl: "Intro-animatie", en: "Intro animation" }),
               vid("2d-motion", "04_Logo_InAnimatie", { nl: "In-animatie", en: "In-animation" }),
               vid("2d-motion", "04_Logo_UiitAnimatie", { nl: "Outro-animatie", en: "Outro animation" }) ] },

    { id: "explainer", cat: "2d-motion", title: "Explainer",
      thumb: { src: `${A}2d-motion/05_explainer.jpg` },
      tools: ["Adobe Illustrator", "Adobe After Effects"],
      desc: {
        nl: ["Telefoon & Slaap",
             "Waarom leg je je gsm beter weg voor het slapengaan? Dat legde ik uit in deze korte animatie. Ik ontwierp een herkenbaar personage en gaf ook melatonine een eigen karakter om het verhaal op een eenvoudige manier te vertellen."],
        en: ["Phone & Sleep",
             "Why is it better to put your phone away before going to sleep? That’s what I explain in this short animation. I designed a relatable character and gave melatonin its own personality to make the story easier to understand."] },
      media: [ vid("2d-motion", "05_explainer"),
               vid("2d-motion", "05_explainer_storyboaard", { nl: "Storyboard", en: "Storyboard" }) ] },

    /* ---------------- 3D DESIGN ---------------- */
    { id: "loop-x-procreate", cat: "3d-design", title: "Loop x Procreate",
      thumb: { src: `${A}3d-design/01_loopXProcreate.jpg` },
      tools: ["Cinema 4D", "Adobe After Effects"],
      desc: {
        nl: ["Loop x Procreate",
             "In dit concept combineerde ik 2D en 3D. We volgen iemand die probeert te tekenen in een drukke omgeving, tot Loop-oordopjes voor rust zorgen. Ik maakte de animatie en modelleerde de oordopjes zelf in Cinema 4D."],
        en: ["Loop x Procreate",
             "In this concept, I combined 2D and 3D. We follow someone trying to draw in a noisy environment, until Loop earplugs bring some peace and quiet. I created the animation and modelled the earplugs in Cinema 4D."] },
      media: [ vid("3d-design", "01_loopXProcreate") ] },

    { id: "dynamics", cat: "3d-design", title: "Dynamics",
      thumb: { src: `${A}3d-design/02_Dynamics.jpg` },
      tools: ["Cinema 4D"],
      desc: {
        nl: ["TruFru",
             "Voor deze opdracht ontwierp ik een dynamische machine geïnspireerd op TruFru, een merk dat fruit met chocolade combineert. In Cinema 4D experimenteerde ik met zwaartekracht en wind om de verschillende onderdelen in beweging te brengen."],
        en: ["TruFru",
             "For this project, I designed a dynamic machine inspired by TruFru, a brand that combines fruit and chocolate. In Cinema 4D, I experimented with gravity and wind to bring the different elements to life."] },
      media: [ vid("3d-design", "02_Dynamics") ] },

    { id: "auto-unreal", cat: "3d-design", title: "Car Unreal",
      thumb: { src: `${A}3d-design/03_Auto_Unreal.jpg` },
      tools: ["Unreal Engine"],
      desc: { 
        nl: ["Auto Unreal Engine",
            "Voor deze opdracht maakte ik een cinematische autoreclame in Unreal Engine. Ik gebruikte 3D-modellen van Sketchfab en animeerde de auto en camera vanuit verschillende standpunten. Met muziek, voice-over en geluidseffecten werkte ik de video verder af."], 
        en: ["Car Unreal Engine",
            "For this project, I created a cinematic car commercial in Unreal Engine. I used 3D models from Sketchfab and animated the car and camera from different angles. I finished the video with music, a voice-over and sound effects." ] },
      media: [ vid("3d-design", "03_Auto_Unreal") ] },

    { id: "dopper-unreal", cat: "3d-design", title: "Dopper Unreal",
      thumb: { src: `${A}3d-design/04_Dopper_Unreal.jpg` },
      tools: ["Unreal Engine"],
      desc: { 
          nl: ["Dopper Unreal Engine",
            "Voor deze productanimatie zette ik een Dopper-fles in de kijker. Ik koos voor een rustige omgeving met water, stenen en planten, zodat de fles centraal bleef staan. In Unreal Engine experimenteerde ik met camerastandpunten, belichting en animatie."
          ], 
          en: ["Dopper Unreal Engine",
            "For this product animation, I put a Dopper bottle in the spotlight. I created a calm setting with water, stones and plants to keep the focus on the product. In Unreal Engine, I experimented with camera angles, lighting and animation."
          ] },
      media: [ vid("3d-design", "04_Dopper_Unreal") ] },

    { id: "eastpak", cat: "3d-design", title: "Eastpak",
      thumb: { src: `${A}3d-design/06_Eastpack.jpg` },
      tools: ["Cinema 4D"],
      desc: {
        nl: ["Eastpak",
            "Voor dit project werkte ik verder op een bestaand 3D-model van een Eastpak-rugzak. Ik experimenteerde met materialen en prints en maakte een decoratieve scène om het eindresultaat op een leuke manier te presenteren."
        ],
        en: ["Eastpak",
             "For this project, I worked with an existing 3D model of an Eastpak backpack. I experimented with materials and prints, then created a decorative scene to present the final design in a fun way."] },
      media: [ img("3d-design", "06_Eastpack.jpg") ] },

    { id: "pyro", cat: "3d-design", title: "Pyro",
      thumb: { src: `${A}3d-design/07_pyro.jpg` },
      tools: ["Cinema 4D", "After Effects"],
      desc: {
        nl: ["Pyro",
            "Voor deze opdracht liet ik rook een S-vorm volgen. Ik maakte de simulatie volledig zelf in Cinema 4D en experimenteerde met de mogelijkheden van Pyro om de rook mooi binnen de vorm te houden."
        ],
        en: ["Pyro",
             "For this project, I created smoke that follows an S-shaped curve. I built the simulation from scratch in Cinema 4D and experimented with Pyro to keep the smoke within the shape."] },
      media: [ vid("3d-design", "07_pyro") ] },

    /* ---------------- BRANDING & GRAPHIC DESIGN ---------------- */
    { id: "praline-packaging", cat: "branding", title: "Praline Packaging",
      thumb: { src: `${A}branding/01_01_Pralinneverpakking.jpg` },
      tools: ["Illustrator", "Cricut"],
      desc: {
        nl: ["Verpakking voor pralines",
            "Voor de Kunsthal Rotterdam ontwierp ik een reeks van drie pralinedozen. Geïnspireerd door een spiegel met golvende lijnen maakte ik drie verpakkingen met een eigen lijnpatroon en metallic accenten. Ik sneed en assembleerde de dozen zelf met mijn Cricut."
        ],
        en: ["Praline Packaging",
             "For Kunsthal Rotterdam, I designed a series of three praline boxes. Inspired by a mirror with wavy lines, I created three packages with their own line patterns and metallic details. I cut and assembled the boxes myself using my Cricut."] },
      media: [ img("branding", "01_01_Pralinneverpakking.jpg"), img("branding", "01_02_Pralinneverpakking.jpg"),
               img("branding", "01_03_Pralinneverpakking.jpg"), img("branding", "01_04_Pralinneverpakking.jpg") ] },

    { id: "serena", cat: "branding", title: "Serena – Smoothie Can & Branding",
      thumb: { src: `${A}branding/02_can_Serena.jpg` },
      tools: ["Illustrator", "After Effects", "Photoshop"],
      desc: {
        nl: ["Serena Smoothie branding",
             "Voor deze brandingopdracht bedacht ik Serena, een smoothieconcept met adaptogenen als ingrediënten. Ik ontwikkelde de huisstijl, het logo en de verpakking voor een blikje van 330 ml. Als extra maakte ik ook een korte logoanimatie."],
        en: ["Serena Smoothie Branding",
             "For this branding project, I created Serena, a smoothie concept featuring adaptogens as ingredients. I developed the visual identity, logo and packaging for a 330 ml can. I also created a short logo animation."] },
      media: [ img("branding", "02_can_Serena.jpg"), img("branding", "02_Can\u0027s_Serena.jpg"),
               vid("branding", "02_LogoAnimatie_Serena", { nl: "Logo-animatie", en: "Logo animation" }) ] },

    { id: "carla", cat: "branding", title: "Carla – Logo Design",
      thumb: { src: `${A}branding/03_LogoCala_MockUp_1.jpg` },
      tools: ["Illustrator", "Photoshop"],
      desc: {
        nl: ["Carla Logo-ontwerp",
             "Carla heeft haar eigen keramiekzaak en zocht een logo dat ze ook als stempel op haar werk kon gebruiken. Ik werkte verschillende ideeën uit en maakte mock-ups om te tonen hoe het logo op haar keramiek zou staan."],
        en: ["Carla Logo Design",
             "Carla has her own ceramics shop and wanted a logo she could also use as a stamp on her work. I explored different ideas and created mock-ups to show how the logo would look on her ceramics."] },
      media: [ img("branding", "03_Logo_Carla.jpg"), img("branding", "03_LogoCala_MockUp_1.jpg"), img("branding", "03LogoCala_MockUp_2.jpg") ] },

    /* ---------------- PERSONAL PROJECTS ---------------- */
    { id: "funko-pop", cat: "personal", title: "My Funko Pop",
      thumb: { src: `${A}personal-projects/05_Funko.png`, bg: true },
      tools: ["Cinema 4D"],
      desc: {
        nl: ["Mijn eigen Funko Pop",
             "Ik wilde mezelf eens als Funko Pop zien, dus maakte ik mijn eigen 3D-versie. Ik modelleerde verschillende onderdelen zelf en gebr"],
        en: ["My Own Funko Pop",
             "I wanted to see myself as a Funko Pop, so I created my own 3D version. I modelled several parts myself and used a few existing models to complete the look. Then I had the figure 3D-printed."] },
      media: [ img("personal-projects", "05_Funko.png", null, "center") /* 05_Funko_360.mov ontbreekt: zie README */ ] },

    { id: "cricut", cat: "personal", title: "Cricut Creations", hidden: true,
      /* Wordt zichtbaar zodra je foto’s toevoegt: zet hidden op false en vul thumb + media in */
      desc: { nl: ["Persoonlijke projecten met mijn Cricut: T-shirts, tassen, kaartjes en handgemaakte cadeaus."],
              en: ["1. The concept",
             "...”",
             "2. my approach",
             "...",
             "3. The process",
              "...",
              "4. The result",
              "..."] },
      media: [] },

    { id: "travel-video", cat: "personal", title: "Travel Video", hidden: true, media: [] }
  ];


  /* ---------- Franse vertaling (fr) ----------
     Projectnamen en softwarenamen worden niet vertaald. Hier staan alleen de teksten. */
  const FR = {
    categories: {
      "2d-motion": { title: "2D & Motion", intro: "Animation de personnages, lipsync, parallaxe et plus encore, surtout réalisés dans Illustrator et After Effects." },
      "3d-design": { title: "Design 3D", intro: "Des expériences Cinema 4D à mes premiers pas dans Unreal Engine." },
      "branding":  { title: "Branding & Design graphique", intro: "Emballages, logos et identités visuelles." },
      "personal":  { title: "Projets personnels", intro: "Des projets que je réalise en dehors de l’école." }
    },
    projects: {
      "character-animation": { desc: [
        "Animation de personnages – Une promenade dans le parc",
        "Pour la Journée du Parc, j’ai créé une courte animation autour de l’idée qu’un parc est un endroit pour tout le monde. J’ai conçu mon propre personnage et lui ai donné vie avec un cycle de marche, un mouvement de tête et une musique joyeuse."] },
      "lipsync": { desc: 
        ["Lipsync",
         "Pour ce projet de lipsync, j’ai choisi une phrase amusante sur une personne qui a encore oublié son mot de passe. J’ai créé une dame âgée dans le style de Selexion et animé ses mouvements de bouche pour les synchroniser avec la voix."] },
      "parallax": { desc: 
        ["Apollo 11",
           "Pour une exposition fictive sur Apollo 11, j’ai réalisé une vidéo promotionnelle à partir d’images authentiques de la NASA. En travaillant avec des calques et un effet de parallaxe, j’ai créé de la profondeur et du mouvement. J’ai réalisé une version de 25 et une de 10 secondes."],
        labels: ["Version de 25 secondes", "Version de 10 secondes"] },
      "logo-animation": { desc: 
        ["Video Experience Day 2026",
         "Pour Video Experience Day, j’ai animé le logo créé par ma partenaire en branding. J’ai également réalisé plusieurs animations du logo, des éléments graphiques animés et une vidéo d’introduction. L’ensemble forme un style visuel cohérent."],
        labels: ["Animation d’intro", "Animation d’entrée", "Animation de sortie"] },
      "explainer": { desc: 
        ["Téléphone et sommeil",
         "Pourquoi vaut-il mieux poser son téléphone avant de dormir ? C’est ce que j’explique dans cette courte animation. J’ai créé un personnage auquel on peut s’identifier et donné une forme à la mélatonine pour rendre le sujet plus facile à comprendre."],
        labels: [null, "Storyboard"] },
      "loop-x-procreate": { desc: [
        "Loop x Procreate",
        "Dans ce concept, j’ai combiné la 2D et la 3D. On suit une personne qui essaie de dessiner dans un environnement bruyant, jusqu’à ce que les bouchons d’oreilles Loop apportent le calme. J’ai réalisé l’animation et modélisé les bouchons dans Cinema 4D.",] },
      "dynamics": { desc: [
        "TruFru",
        "Pour ce projet, j’ai conçu une machine dynamique inspirée de TruFru, une marque qui associe les fruits et le chocolat. Dans Cinema 4D, j’ai expérimenté avec la gravité et le vent pour mettre les différents éléments en mouvement."] },
      "auto-unreal": { desc: 
        ["voiture Unreal Engine",
          "Pour ce projet, j’ai réalisé une publicité automobile cinématique dans Unreal Engine. J’ai utilisé des modèles 3D de Sketchfab et animé la voiture ainsi que la caméra sous différents angles. J’ai ensuite ajouté de la musique, une voix off et des effets sonores."
        ] },
      "dopper-unreal": { desc: 
        ["Dopper Unreal Engine",
          "Pour cette animation produit, j’ai mis en valeur une bouteille Dopper. J’ai choisi un environnement calme avec de l’eau, des pierres et des plantes pour garder l’attention sur le produit. Dans Unreal Engine, j’ai expérimenté les angles de caméra, l’éclairage et l’animation."
        ] },
      "eastpak": { desc: 
        ["Eastpak",
          "Pour ce projet, j’ai retravaillé un modèle 3D existant d’un sac à dos Eastpak. J’ai expérimenté avec les matériaux et les motifs, puis créé une scène décorative pour présenter le résultat de manière originale."
        ] },
      "pyro": { desc: 
        ["Pyro",
          "Pour ce projet, j’ai créé de la fumée qui suit une forme en S. J’ai réalisé toute la simulation dans Cinema 4D et expérimenté avec Pyro pour maintenir la fumée à l’intérieur de la forme."
        ] },
      "praline-packaging": { desc: 
        ["Emballage pour pralines",
          "Pour la Kunsthal Rotterdam, j’ai conçu une série de trois boîtes à pralines. Inspirée par un miroir aux lignes ondulées, j’ai créé trois emballages avec leurs propres motifs et des accents métallisés. J’ai découpé et assemblé les boîtes moi-même avec ma Cricut."
        ] },
      "serena": { desc: [
        "Serena Stratégie de marque smoothies",
        "Pour ce projet de branding, j’ai imaginé Serena, un concept de smoothie contenant des adaptogènes. J’ai développé l’identité visuelle, le logo et l’emballage d’une canette de 330 ml. J’ai également créé une courte animation du logo."],
        },
      "carla": { desc: [
        "Carla Conception de logo",
        "Carla possède sa propre boutique de céramique et cherchait un logo qu’elle pourrait également utiliser comme tampon sur ses créations. J’ai développé plusieurs idées et créé des mock-ups pour montrer le rendu du logo sur ses pièces."] },
      "funko-pop": { desc: [
        "Ma propre figurine Funko Pop",
        "Je voulais me voir en version Funko Pop, alors j’ai créé mon propre modèle 3D. J’ai modélisé plusieurs éléments moi-même et utilisé quelques modèles existants pour obtenir le résultat souhaité. J’ai ensuite fait imprimer la figurine en 3D."] },
      "cricut": { desc: ["Des projets personnels réalisés avec ma Cricut : T-shirts, sacs, cartes et cadeaux faits main."] }
    }
  };
  categories.forEach((c) => { const f = FR.categories[c.id]; if (f) { c.title.fr = f.title; c.intro.fr = f.intro; } });
  projects.forEach((p) => {
    const f = FR.projects[p.id]; if (!f) return;
    if (f.desc && p.desc) p.desc.fr = f.desc;
    if (f.role && p.role) p.role.fr = f.role;
    if (f.labels) f.labels.forEach((l, i) => { if (l && p.media[i] && p.media[i].label) p.media[i].label.fr = l; });
  });

  window.PORTFOLIO = { categories, projects, assetBase: A };
})();
