# Maquette Responsive

Intégration d'une maquette graphique en site web responsive, en HTML, CSS et JavaScript natifs — sans framework ni bibliothèque.

La maquette de référence est fournie dans `maquette_responsive.pdf`.

---

## Objectif

Reproduire fidèlement une maquette fournie, en respectant :

- la sémantique HTML5 (`header`, `nav`, `main`, `footer`)
- les standards W3C
- une approche responsive couvrant mobile, tablette et desktop

---

## Fonctionnalités

- **Menus déroulants** — ouverture au clic, fermeture au clic extérieur, avec rotation de l'icône
- **Carrousel d'images** — navigation par points indicateurs
- **Mise en page responsive** — 4 points de rupture définis en `@media`

---

## Stack

| Technologie | Usage |
|---|---|
| HTML5 | Structure sémantique |
| CSS3 | Mise en page et responsive |
| JavaScript | Menus déroulants et carrousel |

Aucune dépendance, aucune étape de build.

---

## Lancer le projet

Ouvrir `maquette.html` dans un navigateur.

```bash
open maquette.html          # macOS
xdg-open maquette.html      # Linux
```

Pour servir le site sur un serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir **http://localhost:8000/maquette.html**.

---

## Structure du projet

```text
Maquette-Responsive/
├── maquette.html              # Page unique
├── style.css                  # Styles et media queries
├── script.js                  # Menus déroulants et carrousel
├── maquette_responsive.pdf    # Maquette de référence
└── assets/                    # Images et captures d'écran
```
