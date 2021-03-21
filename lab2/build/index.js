var channel1 = [];
var clapAudio = document.querySelector('[data-sound="clap"]');
var boomAudio = document.querySelector('[data-sound="boom"]');
var hihatAudio = document.querySelector('[data-sound="hihat"]');
var kickAudio = document.querySelector('[data-sound="kick"]');
var openhatAudio = document.querySelector('[data-sound="openhat"]');
var rideAudio = document.querySelector('[data-sound="ride"]');
var snareAudio = document.querySelector('[data-sound="snare"]');
var tinkAudio = document.querySelector('[data-sound="tink"]');
var tomAudio = document.querySelector('[data-sound="tom"]');
var clap = document.querySelector('#clap');
var boom = document.querySelector('#boom');
var hihat = document.querySelector('#hihat');
var kick = document.querySelector('#kick');
var openhat = document.querySelector('#openhat');
var ride = document.querySelector('#ride');
var snare = document.querySelector('#snare');
var tink = document.querySelector('#tink');
var tom = document.querySelector('#tom');
var playChannel1Btn = document.querySelector('#playChannel1');
var startRecording1Btn = document.querySelector('#startRecording1');
document.body.addEventListener('keypress', onKeyDown);
document.body.addEventListener('transitionend', removeTransition);
playChannel1Btn.addEventListener('click', onPlayChannel);
// startRecording1Btn.addEventListener('click', startRecording);
// function startRecording(): void{
//     const key = klucz;
//     const time = czas;
//     channel1.push({
//         key,
//         time
//     });
// }
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
}
function onKeyDown(ev) {
    var _a;
    var key = ev.key;
    var time = ev.timeStamp;
    //console.log(key);
    // channel1.push({
    //     key,
    //     time
    // });
    (_a = clap.classList) === null || _a === void 0 ? void 0 : _a.remove('playing');
    playSound(key);
    //console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'a':
            clapAudio.currentTime = 0;
            clap.classList.add('playing');
            clapAudio.play();
            break;
        case 's':
            boomAudio.currentTime = 0;
            boom.classList.add('playing');
            boomAudio.play();
            break;
        case 'd':
            hihatAudio.currentTime = 0;
            hihat.classList.add('playing');
            hihatAudio.play();
            break;
        case 'f':
            kickAudio.currentTime = 0;
            kick.classList.add('playing');
            kickAudio.play();
            break;
        case 'g':
            openhatAudio.currentTime = 0;
            openhat.classList.add('playing');
            openhatAudio.play();
            break;
        case 'h':
            rideAudio.currentTime = 0;
            ride.classList.add('playing');
            rideAudio.play();
            break;
        case 'j':
            snareAudio.currentTime = 0;
            snare.classList.add('playing');
            snareAudio.play();
            break;
        case 'k':
            tinkAudio.currentTime = 0;
            tink.classList.add('playing');
            tinkAudio.play();
            break;
        case 'l':
            tomAudio.currentTime = 0;
            tom.classList.add('playing');
            tomAudio.play();
            break;
    }
}
function onPlayChannel() {
    playChannel();
}
function playChannel() {
    var prevTime = 0;
    channel1.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
