# Portfolio website – Sybil

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## 1. Open it in Visual Studio Code
1. Unzip the folder and choose **File → Open Folder…** → `my-portfolio`.
2. Install the extension **Live Server** (Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
   (Videos and the language switch work best through a local server, not by double-clicking the file.)
4. Fonts (Poppins, Kalam) load from Google Fonts, so you need an internet connection for those.
   On Windows the handwritten accent uses *Segoe Script* automatically; other systems get Kalam.

## 2. Folder structure
```
my-portfolio/
├── index.html            all sections of the main page (Home, My Work, About, Skills, Contact)
├── css/style.css         all styling (colours are variables at the top: --purple, --offwhite, …)
├── js/
│   ├── config.js         YOUR NAME + EMAIL, bubble timing, animation file names
│   ├── i18n.js           all fixed texts, Dutch (nl) and English (en)
│   ├── projects.js       categories, projects, descriptions, which files belong where
│   └── main.js           language switch, navigation, project pages, character animation
└── assets/
    ├── character/        poses (PNG), welcome animation loop (WebM)
    ├── about/            "Foto mezelf_2d character.jpg"
    ├── software/         AI.png, AE.png, Maxon.png
    └── projects/         2d-motion / 3d-design / branding / personal-projects
```
Category and project pages are not separate files: `main.js` builds them from `projects.js`
(addresses like `index.html#/work/2d-motion/lipsync`).

## 3. Change text, email and name
* **Name + email:** `js/config.js`. The email is a placeholder, replace `SybilDeConinck@gmail.com`.
* **Intro, About Me, Skills, Contact texts:** `js/i18n.js` (Dutch block `nl`, English block `en`).
* **Project descriptions, titles, software chips:** `js/projects.js`.
* **Colours:** the `:root` block at the top of `css/style.css`.

## 4. Replace or add images and videos
* **About photo:** overwrite `assets/about/Foto mezelf_2d character.jpg` (same name, no code change).
  Keep the same extension (.jpg).
* **Add a project:** copy a block in `projects.js`, give it a new `id`, `cat`, `thumb` and `media`.
* **Show a hidden project (Cricut, Travel Video):** add the files, fill in `thumb` and `media`,
  and set `hidden: false`. Hidden or empty projects never show on the site.
* **Category squares (My Work):** replace `assets/categories/2d-motion.png`, `3d-design.png`, `branding.png`, `personal.png` (square PNG, transparent corners).
* Project videos should be MP4 (H.264). For the web, compress them:
  `ffmpeg -i in.mp4 -vf "scale='min(iw,1280)':-2" -c:v libx264 -crf 27 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k out.mp4`
  A video poster (thumbnail) has the same name with `.jpg`:
  `ffmpeg -ss 3 -i out.mp4 -frames:v 1 -vf scale=800:-2 -q:v 4 out.jpg`

## 5. Character animations (transparency)
Browsers can't play QuickTime Animation (`.mov`) or TIFF. They were converted:
* `.tif` poses → transparent **PNG**.
* `01_character_welcome_Transparant.mov` → **WebM (VP9 with alpha)** + first/last frame PNG.

Convert a new transparent animation yourself:
```
ffmpeg -i animation.mov -vf scale=1680:-2 -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 34 -an -auto-alt-ref 0 animation.webm
```
The welcome animation now **loops continuously** (no separate idle file needed). The speech bubble appears once, at second 5 of the first pass (`welcomeBubbleAt` in `config.js`), and stays.
To replace the animation, overwrite `assets/character/01_character_welcome_Transparant.webm` (+ first/last frame PNGs).

WebM-with-alpha works in Chrome, Edge, Firefox and current Safari. If an old browser fails, it shows the still frame
and the bubble after 5 s.

## 6. Publish for free
Push the folder to GitHub and enable **GitHub Pages**, or drag it onto Netlify / Cloudflare Pages.
Keep file names exactly as they are (also upper/lower case).

## 7. Accessibility and motion
Visitors with "reduce motion" enabled see a still character, no floating doodles and no scroll effects.
