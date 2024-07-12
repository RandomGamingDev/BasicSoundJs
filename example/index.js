// Load files just like with the Web Audio API
const coin_sound = new BasicSound("sounds/coin.ogg");
const hit_sound = new BasicSound("sounds/hit.wav");

/* The code for playing the sounds is in the button's `onclick=`
    <button onclick="coin_sound.play()">Press to play a coin sound!</button>
    <button onclick="hit_sound.play()">Press to play a hit sound!</button>
*/
// As you can see it also works the same as the Web Audio API
// except the sounds can overlap and `.play()` returns the Audio object used to play it