let start: string = 'stop';
let timeC: number = 0;
let currentChannel: string;
const channel1: any[] = [];
const channel2: any[] = [];
const channel3: any[] = [];
const channel4: any[] = [];

const clapAudio: HTMLAudioElement = document.querySelector('[data-sound="clap"]');
const boomAudio: HTMLAudioElement = document.querySelector('[data-sound="boom"]');
const hihatAudio: HTMLAudioElement = document.querySelector('[data-sound="hihat"]');
const kickAudio: HTMLAudioElement = document.querySelector('[data-sound="kick"]');
const openhatAudio: HTMLAudioElement = document.querySelector('[data-sound="openhat"]');
const rideAudio: HTMLAudioElement = document.querySelector('[data-sound="ride"]');
const snareAudio: HTMLAudioElement = document.querySelector('[data-sound="snare"]');
const tinkAudio: HTMLAudioElement = document.querySelector('[data-sound="tink"]');
const tomAudio: HTMLAudioElement = document.querySelector('[data-sound="tom"]');

const clap: HTMLButtonElement = document.querySelector('#clap');
const boom: HTMLButtonElement = document.querySelector('#boom');
const hihat: HTMLButtonElement = document.querySelector('#hihat');
const kick: HTMLButtonElement = document.querySelector('#kick');
const openhat: HTMLButtonElement = document.querySelector('#openhat');
const ride: HTMLButtonElement = document.querySelector('#ride');
const snare: HTMLButtonElement = document.querySelector('#snare');
const tink: HTMLButtonElement = document.querySelector('#tink');
const tom: HTMLButtonElement = document.querySelector('#tom');

const myBar: HTMLDivElement = document.querySelector('.myBar');

const playChannel1Btn: HTMLButtonElement = document.querySelector('#playChannel1');
const playChannel2Btn: HTMLButtonElement = document.querySelector('#playChannel2');
const playChannel3Btn: HTMLButtonElement = document.querySelector('#playChannel3');
const playChannel4Btn: HTMLButtonElement = document.querySelector('#playChannel4');

const startRecording1Btn: HTMLButtonElement = document.querySelector('#startRecording1');
const startRecording2Btn: HTMLButtonElement = document.querySelector('#startRecording2');
const startRecording3Btn: HTMLButtonElement = document.querySelector('#startRecording3');
const startRecording4Btn: HTMLButtonElement = document.querySelector('#startRecording4');

const stopRecording1Btn: HTMLButtonElement = document.querySelector('#stopRecording1');
const stopRecording2Btn: HTMLButtonElement = document.querySelector('#stopRecording2');
const stopRecording3Btn: HTMLButtonElement = document.querySelector('#stopRecording3');
const stopRecording4Btn: HTMLButtonElement = document.querySelector('#stopRecording4');

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

function removeTransition(e:any) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    e.target.classList.remove('blockButtonAnimation');
    e.target.classList.remove('stopButtonAnimation');
    e.target.classList.remove('startButtonAnimation');
}

function onKeyDown(ev:KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp - timeC;

        switch(currentChannel){
            case "startRecording1":
            if(start === 'start')
            channel1.push({
                key,
                time
           });
           break;
           case "startRecording2":
            if(start === 'start')
            channel2.push({
                key,
                time
           });
           break;
           case "startRecording3":
            if(start === 'start')
            channel3.push({
                key,
                time
           });
           break;
           case "startRecording4":
            if(start === 'start')
            channel4.push({
                key,
                time
           });
           break;
        }
    playSound(key);
}

function playSound(key: string):void{
    switch(key){
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

function startRecording(event): void{
    currentChannel = event.target.id;
    start = 'start';
    timeC = event.timeStamp;
    switch(currentChannel){
        case "startRecording1":
            startButtonAnimation(startRecording1Btn);
            unBlockAnimation(playChannel1Btn);
            startRecording1Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel1Btn);
            while(channel1.length>0){
                channel1.pop();
            };
        break;
        case "startRecording2":
            startButtonAnimation(startRecording2Btn);
            unBlockAnimation(playChannel2Btn);
            startRecording2Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel2Btn);
            while(channel2.length>0){
                channel2.pop();
            };
        break;
        case "startRecording3":
            startButtonAnimation(startRecording3Btn);
            unBlockAnimation(playChannel3Btn);
            startRecording3Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel3Btn);
            while(channel3.length>0){
                channel3.pop();
            };
        break;
        case "startRecording4":
            startButtonAnimation(startRecording4Btn);
            unBlockAnimation(playChannel4Btn);
            startRecording4Btn.classList.add('keyRecordPress');
            unBlockButton(playChannel4Btn);
            while(channel4.length>0){
                channel4.pop();
            };
        break;
    }
}

function stopRecording(event): void{
    start = 'stop';
    switch(event.target.id){
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

function onPlayChannel(event): void {
    playChannel(event.target.id);
}

function playChannel(kanal: string): void{
    playMe(kanal);
}

function playMe(kanal: string){
    let prevTime = 0;

    const lengtMusic1 = channel1.length;
    let timeMusic1 = 0;
    if(lengtMusic1>0)
    timeMusic1 = channel1[lengtMusic1-1].time+100;

    const lengtMusic2 = channel2.length;
    let timeMusic2 = 0;
    if(lengtMusic2>0)
    timeMusic2 = channel2[lengtMusic2-1].time+100;

    const lengtMusic3 = channel3.length;
    let timeMusic3 = 0;
    if(lengtMusic3>0)
    timeMusic3 = channel3[lengtMusic3-1].time+100;

    const lengtMusic4 = channel4.length;
    let timeMusic4 = 0;
    if(lengtMusic4>0)
    timeMusic4 = channel4[lengtMusic4-1].time+100;

    switch(kanal){
        case "playChannel1":
            if(channel1.length>0){
                playChannel1Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                startRecording1Btn.classList?.remove('keyPlayPress');

                channel1.forEach(sound => {
                const timeout = sound.time - prevTime;
                setTimeout(()=> playSound(sound.key), timeout);
                setTimeout(()=> playChannel1Btn.classList.remove('keyPlayPress'), timeMusic1);
                });
            }
        break;
        case "playChannel2":
            if(channel2.length>0){
                playChannel2Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                startRecording2Btn.classList?.remove('keyPlayPress');

                channel2.forEach(sound => {
                const timeout = sound.time - prevTime;
                setTimeout(()=> playSound(sound.key), timeout);
                setTimeout(()=> playChannel2Btn.classList.remove('keyPlayPress'), timeMusic2);
                });
            }
        break;
        case "playChannel3":
            if(channel3.length>0){
                playChannel3Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                startRecording3Btn.classList?.remove('keyPlayPress');

                channel3.forEach(sound => {
                const timeout = sound.time - prevTime;
                setTimeout(()=> playSound(sound.key), timeout);
                setTimeout(()=> playChannel3Btn.classList.remove('keyPlayPress'), timeMusic3);
                });
            }
        break;
        case "playChannel4":
            if(channel4.length>0){
                playChannel4Btn.classList.add('keyPlayPress');
                progressBar(kanal.slice(-1));
                startRecording4Btn.classList?.remove('keyPlayPress');

                channel4.forEach(sound => {
                const timeout = sound.time - prevTime;
                setTimeout(()=> playSound(sound.key), timeout);
                setTimeout(()=> playChannel4Btn.classList.remove('keyPlayPress'), timeMusic4);
                });
            }
        break;
    }
}

function progressBar(iD:string): void{
    const table: any[] = [channel1, channel2, channel3, channel4];

    const tablica = table[(parseInt(iD))-1];
    const lenghtMusic = tablica.length;

    const timeMusic = tablica[lenghtMusic-1].time;
    let i = 0;
    function move() {
    if (i == 0) {
        i = 1;
        const elem = document.getElementById("myBar"+iD);
        let width = 1;
        let id = setInterval(frame, timeMusic/85);
            function frame() {
                if(width >= 100) {
                clearInterval(id);
                i = 0;
                }else {
                    width++;
                    elem.style.width = width + "%";
                }

            if(width >= 100)
            elem.style.width = "1%";
        }
    }
}
  move();
}

//---------------ANIMACJE-------------------------------------
function blockButton(obiekt: HTMLButtonElement):void{
    obiekt.classList.add('blockButton');
}

function unBlockButton(obiekt: HTMLButtonElement):void{
    obiekt.classList.remove('blockButton');
}

function unBlockAnimation(obiekt: HTMLButtonElement):void{
    obiekt.classList.add('blockButtonAnimation');
}

function stopButtonAnimation(obiekt: HTMLButtonElement):void{
    obiekt.classList.add('stopButtonAnimation');
}

function startButtonAnimation(obiekt: HTMLButtonElement):void{
    obiekt.classList.add('startButtonAnimation');
}

function unKeyRecordPress(obiekt: HTMLButtonElement):void{
    obiekt.classList.remove('keyRecordPress');
}
