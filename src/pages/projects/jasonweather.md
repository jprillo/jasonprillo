---
heading: jasonweather.netlify.com
path: projects/jasonweather
templateKey: project-page
featuredimage: /img/jasonweather.png
title: Jason Weather 
image: /img/jasonweatherthumb.png
description:  is the only site in the world where you can find out what the weather is like where I am.  
projectlink: https://jasonweather.netlify.app
github: https://github.com/jprillo/weather-app

design:
  - GIMP
  - Figma  
code: 
  - Vanilla Javascript 
  - jscolor 
  - CSS 

---

### History:
My weather.com account got stuck on Washington DC for some reason. I would change it and on my next login "Looks like it is going to be super cold tonight." "No, it is telling me the weather in Washington DC.... again."

I made this project because I wanted to find an API to use in a useful way and I wanted to know the weather.

### Goals:
I wanted to use a weather API to find the weather where I am. I do not want to waste any time setting it up so you can find out what the weather is like where you are. I do not care what the weather is like where you are. 

### Solutions:
I used the OPENWEATHERMAP API's all in one call to get all the options I wanted. I used latitude longitude for the most accurate results.  The background and icons render conditionally based on the weather results. If you try to find a way to get your weather you will only find insults.  

### Roadblocks:
I didn't immediately think about API key security when I thought of this vane weather project. I used LAMBDA to do the secret stuff so it doesn't show up in my repository or frontend. 
This was my first attempt at using a JSON API to populate my frontend. 
I have to push changes if I go somewhere. I could probably find a way for it to track me but I am not trying to make it that easy for any potential assassination attempts.