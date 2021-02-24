---
heading: ACNH Directory
path: projects/acnh-directory
templateKey: project-page
featuredimage: /img/acnh-directory-screencapture.png
title: ACNH Directory
image: /img/acnh-directory-thumb.png
description:  is a website I made for easily searching Animal Crossing villagers by combining and filtering attributes.  
projectlink: https://acnh-directory.netlify.app
github: https://github.com/jprillo/acnh-directory

design:

  - Figma  
code: 
  - Vanilla Javascript 
  - jscolor 
  - CSS 

---
### History:

I made this project when I got a Nintendo Switch and starting playing Animal Crossing New Horizons. My wife was playing contests online where people would offer treasure hunts and presents on their island to the first person to answer a question about a villager or some other aspect of the game. She would ask me and I would help her guess and we would lose.

### Goals:
My goals were to make an app that would allow me to filter the villagers in a way that would give me the answer super fast so my wife can win. In addition, I wanted to add a way to figure out what items were new every month and where we could find them. 

### Solutions:
I found an API that gave me the information I was looking for. I built a gatsby app that makes calls to it and handles the filtering. I celebrated in the glorious victories until my island got full and now I mostly play Smash Bros. 

### Roadblocks:
A villagers star sign is something that we needed but was not included in the API. I derived it with a snippet I found and applied it to my situation. 
During testing, I found that the larger item lists were loading slow and had a lot of mistakes. Since I built this on Gatsby I decided to copy the JSON and Images for the villagers and leverage the extra speed I get from not having to pull it from the API. 