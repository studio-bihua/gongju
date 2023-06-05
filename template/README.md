# gongju
Bihua tools library &amp; design system  

## Table of Contents

- [Team](#team)
- [Architecture](#architecture)
- [Launch](#launch)
- [Compile](#compile)

## Team 
- Developpeurs : 
    - Donaël Walter [Portfolio](https://www.donaelwalter.com)
    - Arthur Debruille [Github](https://github.com/ADEB21)
    - Emilien Vivier [Github](https://github.com/Emilien-Code)
- Agency : Studio Bihua [Site Web](https://bihua.fr)


## Architecture
this template is using atomic design 
- assets
    - fonts
    - style
        - utils
            - root.scss
            - mixins.scss
            - fonts.scss
            - reset.scss
            - variables.scss
        - pages
        - components
            - atoms
            - mollecules 
            - organisms
            - sections
    - images
        - [page_name]
    - scripts

- components 
    - atoms
    - layouts
    - mollecules 
    - organisms
    - templates
- pages

## Launch

Run the following commands:

```bash
npm install

npx parcel [src_to_inex.html]
```
## Build
```bash
npm install

npx parcel build
```