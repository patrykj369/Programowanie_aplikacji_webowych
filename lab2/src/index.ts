const channel1: any[] = [];
const channel2: any[] = [];
let start: string = 'stop';
let timeC: number = 0;
let currentChannel: string;

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

const myBar: HTMLDivElement = document.querySelector('#myBar');

const playChannel1Btn: HTMLButtonElement = document.querySelector('#playChannel1');
const playChannel2Btn: HTMLButtonElement = document.querySelector('#playChannel2');

const startRecording1Btn: HTMLButtonElement = document.querySelector('#startRecording1');
const startRecording2Btn: HTMLButtonElement = document.querySelector('#startRecording2');

const stopRecording1Btn: HTMLButtonElement = document.querySelector('#stopRecording1');
const stopRecording2Btn: HTMLButtonElement = document.querySelector('#stopRecording2');

const removeRecording1Btn: HTMLButtonElement = document.querySelector('#removeRecording1');

document.body.addEventListener('keypress', onKeyDown);
document.body.addEventListener('transitionend', removeTransition);

//myBar.addEventListener('transitioned', removePress);

playChannel1Btn.addEventListener('click', onPlayChannel);
playChannel2Btn.addEventListener('click', onPlayChannel);

startRecording1Btn.addEventListener('click', startRecording);
startRecording2Btn.addEventListener('click', startRecording);

stopRecording1Btn.addEventListener('click', stopRecording);
stopRecording2Btn.addEventListener('click', stopRecording);

function removeTransition(e:any) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

// function removePress(e:any) {
//     if (e.propertyName !== 'width') return;
//     if (myBar.style.width == 100+"%"){
//         playChannel1Btn.classList.remove('keyRecordPress');
//         playChannel2Btn.classList.remove('keyRecordPress');
//     }
// }

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
        }

    //console.log("Kanał2 " + channel2);
    //console.log("Kanał1 " + channel1);
    playSound(key);

}

function playSound(key: string){
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
    //console.log(timeCurrent);
    clearProgressBar();
    currentChannel = event.target.id;
    start = 'start';
    timeC = event.timeStamp;
    switch(currentChannel){
        case "startRecording1":
            startRecording1Btn.classList.add('keyRecordPress')
            while(channel1.length>0){
                channel1.pop();
            };
        break;
        case "startRecording2":
            startRecording2Btn.classList.add('keyRecordPress')
            while(channel2.length>0){
                channel2.pop();
            };
    }

}

function stopRecording(): void{
    start = 'stop';
    startRecording1Btn.classList?.remove('keyRecordPress');
    startRecording2Btn.classList?.remove('keyRecordPress');
}

function onPlayChannel(event): void {
    playChannel(event.target.id);
}

function playChannel(channel: string): void{
    let prevTime = 0;
    const lengtMusic1 = channel1.length;
    let timeMusic1 = 0;
    if(lengtMusic1>0)
    timeMusic1 = channel1[lengtMusic1-1].time;

    const lengtMusic2 = channel2.length;
    let timeMusic2 = 0;
    if(lengtMusic2>0)
    timeMusic2 = channel2[lengtMusic2-1].time;

    switch(channel){
        case "playChannel1":
            playChannel1Btn.classList.add('keyRecordPress');
            progressBar();
            startRecording1Btn.classList?.remove('keyRecordPress');

            channel1.forEach(sound => {
                const timeout = sound.time - prevTime;
                setTimeout(()=> playSound(sound.key), timeout);
                setTimeout(()=> playChannel1Btn.classList.remove('keyRecordPress'), timeMusic1);
            });

        break;
        case "playChannel2":
            playChannel2Btn.classList.add('keyRecordPress');
            progressBar();
            startRecording2Btn.classList?.remove('keyRecordPress');

            channel2.forEach(sound => {
            const timeout = sound.time - prevTime;
            setTimeout(()=> playSound(sound.key), timeout);
            setTimeout(()=> playChannel2Btn.classList.remove('keyRecordPress'), timeMusic2);
        });

        break;
    }

}

function progressBar(): void{
    const lengtMusic = channel1.length;
    const timeMusic = channel1[lengtMusic-1].time;
    let i = 0;
    function move() {
    if (i == 0) {
    i = 1;
    const elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, timeMusic/95);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
     }
    }
  }
  move();


}

function clearProgressBar(): void{

    var elem = document.getElementById("myBar");
    elem.style.width = 1 + "%";

}
