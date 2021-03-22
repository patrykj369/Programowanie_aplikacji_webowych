var channel1 = [];
var channel2 = [];
var start = 'stop';
var timeC = 0;
var currentChannel;
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
var myBar = document.querySelector('#myBar');
var playChannel1Btn = document.querySelector('#playChannel1');
var playChannel2Btn = document.querySelector('#playChannel2');
var startRecording1Btn = document.querySelector('#startRecording1');
var startRecording2Btn = document.querySelector('#startRecording2');
var stopRecording1Btn = document.querySelector('#stopRecording1');
var stopRecording2Btn = document.querySelector('#stopRecording2');
var removeRecording1Btn = document.querySelector('#removeRecording1');
document.body.addEventListener('keypress', onKeyDown);
document.body.addEventListener('transitionend', removeTransition);
//myBar.addEventListener('transitioned', removePress);
playChannel1Btn.addEventListener('click', onPlayChannel);
playChannel2Btn.addEventListener('click', onPlayChannel);
startRecording1Btn.addEventListener('click', startRecording);
startRecording2Btn.addEventListener('click', startRecording);
stopRecording1Btn.addEventListener('click', stopRecording);
stopRecording2Btn.addEventListener('click', stopRecording);
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
}
// function removePress(e:any) {
//     if (e.propertyName !== 'width') return;
//     if (myBar.style.width == 100+"%"){
//         playChannel1Btn.classList.remove('keyRecordPress');
//         playChannel2Btn.classList.remove('keyRecordPress');
//     }
// }
function onKeyDown(ev) {
    var key = ev.key;
    var time = ev.timeStamp - timeC;
    switch (currentChannel) {
        case "startRecording1":
            if (start === 'start')
                channel1.push({
                    key: key,
                    time: time
                });
            break;
        case "startRecording2":
            if (start === 'start')
                channel2.push({
                    key: key,
                    time: time
                });
            break;
    }
    //console.log("Kanał2 " + channel2);
    //console.log("Kanał1 " + channel1);
    playSound(key);
}
function playSound(key) {
    switch (key) {
        case 'A':
        case 'a':
            clapAudio.currentTime = 0;
            clap.classList.add('playing');
            clapAudio.play();
            break;
        case 'S':
        case 's':
            boomAudio.currentTime = 0;
            boom.classList.add('playing');
            boomAudio.play();
            break;
        case 'D':
        case 'd':
            hihatAudio.currentTime = 0;
            hihat.classList.add('playing');
            hihatAudio.play();
            break;
        case 'F':
        case 'f':
            kickAudio.currentTime = 0;
            kick.classList.add('playing');
            kickAudio.play();
            break;
        case 'G':
        case 'g':
            openhatAudio.currentTime = 0;
            openhat.classList.add('playing');
            openhatAudio.play();
            break;
        case 'H':
        case 'h':
            rideAudio.currentTime = 0;
            ride.classList.add('playing');
            rideAudio.play();
            break;
        case 'J':
        case 'j':
            snareAudio.currentTime = 0;
            snare.classList.add('playing');
            snareAudio.play();
            break;
        case 'K':
        case 'k':
            tinkAudio.currentTime = 0;
            tink.classList.add('playing');
            tinkAudio.play();
            break;
        case 'L':
        case 'l':
            tomAudio.currentTime = 0;
            tom.classList.add('playing');
            tomAudio.play();
            break;
    }
}
function startRecording(event) {
    //console.log(timeCurrent);
    clearProgressBar();
    currentChannel = event.target.id;
    start = 'start';
    timeC = event.timeStamp;
    switch (currentChannel) {
        case "startRecording1":
            startRecording1Btn.classList.add('keyRecordPress');
            while (channel1.length > 0) {
                channel1.pop();
            }
            ;
            break;
        case "startRecording2":
            startRecording2Btn.classList.add('keyRecordPress');
            while (channel2.length > 0) {
                channel2.pop();
            }
            ;
    }
}
function stopRecording() {
    var _a, _b;
    start = 'stop';
    (_a = startRecording1Btn.classList) === null || _a === void 0 ? void 0 : _a.remove('keyRecordPress');
    (_b = startRecording2Btn.classList) === null || _b === void 0 ? void 0 : _b.remove('keyRecordPress');
}
function onPlayChannel(event) {
    playChannel(event.target.id);
}
function playChannel(channel) {
    var _a, _b;
    var prevTime = 0;
    var lengtMusic1 = channel1.length;
    var timeMusic1 = 0;
    if (lengtMusic1 > 0)
        timeMusic1 = channel1[lengtMusic1 - 1].time;
    var lengtMusic2 = channel2.length;
    var timeMusic2 = 0;
    if (lengtMusic2 > 0)
        timeMusic2 = channel2[lengtMusic2 - 1].time;
    switch (channel) {
        case "playChannel1":
            playChannel1Btn.classList.add('keyRecordPress');
            progressBar();
            (_a = startRecording1Btn.classList) === null || _a === void 0 ? void 0 : _a.remove('keyRecordPress');
            channel1.forEach(function (sound) {
                var timeout = sound.time - prevTime;
                setTimeout(function () { return playSound(sound.key); }, timeout);
                setTimeout(function () { return playChannel1Btn.classList.remove('keyRecordPress'); }, timeMusic1);
            });
            break;
        case "playChannel2":
            playChannel2Btn.classList.add('keyRecordPress');
            progressBar();
            (_b = startRecording2Btn.classList) === null || _b === void 0 ? void 0 : _b.remove('keyRecordPress');
            channel2.forEach(function (sound) {
                var timeout = sound.time - prevTime;
                setTimeout(function () { return playSound(sound.key); }, timeout);
                setTimeout(function () { return playChannel2Btn.classList.remove('keyRecordPress'); }, timeMusic2);
            });
            break;
    }
}
function progressBar() {
    var lengtMusic = channel1.length;
    var timeMusic = channel1[lengtMusic - 1].time;
    var i = 0;
    function move() {
        if (i == 0) {
            i = 1;
            var elem_1 = document.getElementById("myBar");
            var width_1 = 1;
            var id_1 = setInterval(frame, timeMusic / 95);
            function frame() {
                if (width_1 >= 100) {
                    clearInterval(id_1);
                    i = 0;
                }
                else {
                    width_1++;
                    elem_1.style.width = width_1 + "%";
                }
            }
        }
    }
    move();
}
function clearProgressBar() {
    var elem = document.getElementById("myBar");
    elem.style.width = 1 + "%";
}
