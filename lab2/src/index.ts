const channel1: any[] = [];
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

function removeTransition(e: any) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function onKeyDown(ev:KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp;

    //console.log(key);

    // channel1.push({
    //     key,
    //     time
    // });

    playSound(key);

    //console.log(channel1);
}

function playSound(key: string){
    switch(key){
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

function onPlayChannel(): void {
    playChannel();
}

function playChannel(): void{
    let prevTime = 0;
    channel1.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(()=> playSound(sound.key), timeout);
    });
}


