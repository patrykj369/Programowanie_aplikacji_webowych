var start = 'stop';
var timeC = 0;
var currentChannel;
var channel1 = [];
var channel2 = [];
var channel3 = [];
var channel4 = [];
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
var myBar = document.querySelector('.myBar');
var playChannel1Btn = document.querySelector('#playChannel1');
var playChannel2Btn = document.querySelector('#playChannel2');
var playChannel3Btn = document.querySelector('#playChannel3');
var playChannel4Btn = document.querySelector('#playChannel4');
var startRecording1Btn = document.querySelector('#startRecording1');
var startRecording2Btn = document.querySelector('#startRecording2');
var startRecording3Btn = document.querySelector('#startRecording3');
var startRecording4Btn = document.querySelector('#startRecording4');
var stopRecording1Btn = document.querySelector('#stopRecording1');
var stopRecording2Btn = document.querySelector('#stopRecording2');
var stopRecording3Btn = document.querySelector('#stopRecording3');
var stopRecording4Btn = document.querySelector('#stopRecording4');
document.body.addEventListener('keypress', onKeyDown);
document.body.addEventListener('transitionend', removeTransition);
playChannel1Btn.addEventListener('click', onPlayChannel);
playChannel2Btn.addEventListener('click', onPlayChannel);
playChannel3Btn.addEventListener('click', onPlayChannel);
playChannel4Btn.addEventListener('click', onPlayChannel);
startRecording1Btn.addEventListener('click', startRecording);
startRecording2Btn.addEventListener('click', startRecording);
startRecording3Btn.addEventListener('click', startRecording);
startRecording4Btn.addEventListener('click', startRecording);
stopRecording1Btn.addEventListener('click', stopRecording);
stopRecording2Btn.addEventListener('click', stopRecording);
stopRecording3Btn.addEventListener('click', stopRecording);
stopRecording4Btn.addEventListener('click', stopRecording);
blockButton(playChannel1Btn);
blockButton(playChannel2Btn);
blockButton(playChannel3Btn);
blockButton(playChannel4Btn);
function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
    e.target.classList.remove('blockButtonAnimation');
    e.target.classList.remove('stopButtonAnimation');
    e.target.classList.remove('startButtonAnimation');
}
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
        case "startRecording3":
            if (start === 'start')
                channel3.push({
                    key: key,
                    time: time
                });
            break;
        case "startRecording4":
            if (start === 'start')
                channel4.push({
                    key: key,
                    time: time
                });
            break;
    }
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
    currentChannel = event.target.id;
    start = 'start';
    timeC = event.timeStamp;
    switch (currentChannel) {
        case "startRecording1":
            startButtonAnimation(startRecording1Btn);
            unBlockAnimation(playChannel1Btn);
            startRecording1Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel1Btn);
            while (channel1.length > 0) {
                channel1.pop();
            }
            ;
            break;
        case "startRecording2":
            startButtonAnimation(startRecording2Btn);
            unBlockAnimation(playChannel2Btn);
            startRecording2Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel2Btn);
            while (channel2.length > 0) {
                channel2.pop();
            }
            ;
            break;
        case "startRecording3":
            startButtonAnimation(startRecording3Btn);
            unBlockAnimation(playChannel3Btn);
            startRecording3Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel3Btn);
            while (channel3.length > 0) {
                channel3.pop();
            }
            ;
            break;
        case "startRecording4":
            startButtonAnimation(startRecording4Btn);
            unBlockAnimation(playChannel4Btn);
            startRecording4Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel4Btn);
            while (channel4.length > 0) {
                channel4.pop();
            }
            ;
            break;
    }
}
function stopRecording(event) {
    start = 'stop';
    switch (event.target.id) {
        case "stopRecording1":
            stopButtonAnimation(stopRecording1Btn);
            unKeyRecordPress(startRecording1Btn);
            break;
        case "stopRecording2":
            stopButtonAnimation(stopRecording2Btn);
            unKeyRecordPress(startRecording2Btn);
            break;
        case "stopRecording3":
            stopButtonAnimation(stopRecording3Btn);
            unKeyRecordPress(startRecording3Btn);
            break;
        case "stopRecording4":
            stopButtonAnimation(stopRecording4Btn);
            unKeyRecordPress(startRecording4Btn);
            break;
    }
}
function onPlayChannel(event) {
    playChannel(event.target.id);
}
function playChannel(kanal) {
    playMe(kanal);
}
function playMe(kanal) {
    var _a, _b, _c, _d;
    var prevTime = 0;
    var lengtMusic1 = channel1.length;
    var timeMusic1 = 0;
    if (lengtMusic1 > 0)
        timeMusic1 = channel1[lengtMusic1 - 1].time + 100;
    var lengtMusic2 = channel2.length;
    var timeMusic2 = 0;
    if (lengtMusic2 > 0)
        timeMusic2 = channel2[lengtMusic2 - 1].time + 100;
    var lengtMusic3 = channel3.length;
    var timeMusic3 = 0;
    if (lengtMusic3 > 0)
        timeMusic3 = channel3[lengtMusic3 - 1].time + 100;
    var lengtMusic4 = channel4.length;
    var timeMusic4 = 0;
    if (lengtMusic4 > 0)
        timeMusic4 = channel4[lengtMusic4 - 1].time + 100;
    switch (kanal) {
        case "playChannel1":
            if (channel1.length > 0) {
                playChannel1Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                (_a = startRecording1Btn.classList) === null || _a === void 0 ? void 0 : _a.remove('keyPlayPress');
                channel1.forEach(function (sound) {
                    var timeout = sound.time - prevTime;
                    setTimeout(function () { return playSound(sound.key); }, timeout);
                    setTimeout(function () { return playChannel1Btn.classList.remove('keyPlayPress'); }, timeMusic1);
                });
            }
            break;
        case "playChannel2":
            if (channel2.length > 0) {
                playChannel2Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                (_b = startRecording2Btn.classList) === null || _b === void 0 ? void 0 : _b.remove('keyPlayPress');
                channel2.forEach(function (sound) {
                    var timeout = sound.time - prevTime;
                    setTimeout(function () { return playSound(sound.key); }, timeout);
                    setTimeout(function () { return playChannel2Btn.classList.remove('keyPlayPress'); }, timeMusic2);
                });
            }
            break;
        case "playChannel3":
            if (channel3.length > 0) {
                playChannel3Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                (_c = startRecording3Btn.classList) === null || _c === void 0 ? void 0 : _c.remove('keyPlayPress');
                channel3.forEach(function (sound) {
                    var timeout = sound.time - prevTime;
                    setTimeout(function () { return playSound(sound.key); }, timeout);
                    setTimeout(function () { return playChannel3Btn.classList.remove('keyPlayPress'); }, timeMusic3);
                });
            }
            break;
        case "playChannel4":
            if (channel4.length > 0) {
                playChannel4Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                (_d = startRecording4Btn.classList) === null || _d === void 0 ? void 0 : _d.remove('keyPlayPress');
                channel4.forEach(function (sound) {
                    var timeout = sound.time - prevTime;
                    setTimeout(function () { return playSound(sound.key); }, timeout);
                    setTimeout(function () { return playChannel4Btn.classList.remove('keyPlayPress'); }, timeMusic4);
                });
            }
            break;
    }
}
function progressBar(iD) {
    var table = [channel1, channel2, channel3, channel4];
    var tablica = table[(parseInt(iD)) - 1];
    var lenghtMusic = tablica.length;
    var timeMusic = tablica[lenghtMusic - 1].time;
    var i = 0;
    function move() {
        if (i == 0) {
            i = 1;
            var elem_1 = document.getElementById("myBar" + iD);
            var width_1 = 1;
            var id_1 = setInterval(frame, timeMusic / 85);
            function frame() {
                if (width_1 >= 100) {
                    clearInterval(id_1);
                    i = 0;
                }
                else {
                    width_1++;
                    elem_1.style.width = width_1 + "%";
                }
                if (width_1 >= 100)
                    elem_1.style.width = "1%";
            }
        }
    }
    move();
}
//---------------ANIMACJE-------------------------------------
function blockButton(obiekt) {
    obiekt.classList.add('blockButton');
}
function unBlockButton(obiekt) {
    obiekt.classList.remove('blockButton');
}
function unBlockAnimation(obiekt) {
    obiekt.classList.add('blockButtonAnimation');
}
function stopButtonAnimation(obiekt) {
    obiekt.classList.add('stopButtonAnimation');
}
function startButtonAnimation(obiekt) {
    obiekt.classList.add('startButtonAnimation');
}
function unKeyRecordPress(obiekt) {
    obiekt.classList.remove('keyRecordPress');
}
