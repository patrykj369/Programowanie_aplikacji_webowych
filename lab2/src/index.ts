const channel1: any[] = [];
let start: string = 'stop';
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

const playChannel1Btn: HTMLButtonElement = document.querySelector('#playChannel1');
const startRecording1Btn: HTMLButtonElement = document.querySelector('#startRecording1');
const stopRecording1Btn: HTMLButtonElement = document.querySelector('#stopRecording1');
const removeRecording1Btn: HTMLButtonElement = document.querySelector('#removeRecording1');

document.body.addEventListener('keypress', onKeyDown);
document.body.addEventListener('transitionend', removeTransition);
playChannel1Btn.addEventListener('click', onPlayChannel);
startRecording1Btn.addEventListener('click', startRecording);
stopRecording1Btn.addEventListener('click', stopRecording);
removeRecording1Btn.addEventListener('click', removeRecording);


function removeTransition(e:any) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function onKeyDown(ev:KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp;
    if(start === 'start'){

        channel1.push({
            key,
            time
       });
    }else{
        console.log("nagrywanie wylaczone");
    }

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

function startRecording(): void{
    //console.log(timeCurrent);
    start = 'start';
}

function stopRecording(): void{
    start = 'stop';
}

function removeRecording(): void{
    while(channel1.length>0){
        channel1.pop();
    }
    console.log(channel1);
}

function onPlayChannel(): void {
    playChannel();

    console.log(channel1);
}

function playChannel(): void{
    let prevTime = 0;
    channel1.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(()=> playSound(sound.key), timeout);
    });
}


