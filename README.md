# BasicSoundJs
### A basic web javascript Sound library based off of the Web Audio API that allows for overlapping sounds

#### Here's how you use it:
```js
const sound = new BasicSound(<directory to sound>);
// Just like the Web Audio API except it allows for sounds to overlap and returns the `Audio` object spawned for playing the Audio
sound.play();
```

#### Advantages
Not only does this library allow for overlapping sounds, but have the same `new <class>(<directory to sound>)` and `<audio class>.play()` API portions (except for minor differences) as the Web Audio API,
but if you're using something like `p5.js-sound` it also presents the advantage of working from `http://`, `https://`, and `file:///`.
For instance, if you want your web app to be able to be ported to android as static files that can just be referenced via a `file:///` URL via `WebView.loadURL()`, p5.js-sound won't work since it attempts to reference a `blob` URL, while this would.

#### Example

An example is available here: https://github.com/RandomGamingDev/BasicSoundJs/tree/main/example
And you can try it out here: https://randomgamingdev.github.io/BasicSoundJs/example

#### How to import

To import this library you can either manually import it by adding the `sound.js` file to your own website or import it via the cdn: https://cdn.jsdelivr.net/gh/RandomGamingDev/BasicSoundJs/sound.js.
