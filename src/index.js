document.addEventListener("keydown", function(e) {
   if (e.code === "KeyA" || e.code === "KeyS" || e.code === "KeyD" || e.code === "KeyF"
       || e.code === "KeyG" || e.code === "KeyH" || e.code === "KeyJ") {
       let pianoKey = e.key.toUpperCase();
       let audioUrl = `white_keys/${pianoKey}.mp3`;
       let audioElem = new Audio(audioUrl);
       audioElem.play().then();
       console.log("The " + "'" + pianoKey + "'" + " key is pressed.");
   } else if (e.code === "KeyW" || e.code === "KeyE" || e.code === "KeyT"
       || e.code === "KeyY" || e.code === "KeyU") {
       let pianoKey = e.key.toUpperCase();
       let audioUrl = `black_keys/${pianoKey}.mp3`;
       let audioElem = new Audio(audioUrl);
       audioElem.play().then();
       console.log("The " + "'" + pianoKey + "'" + " key is pressed.");
   } else {
       console.log("The key pressed is not a piano key.")
   }
});