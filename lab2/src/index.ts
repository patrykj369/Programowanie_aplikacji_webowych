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

const playChannel1Btn: HTMLButtonElement = document.querySelector('#playChannel1');

document.body.addEventListener('keypress', onKeyDown);
playChannel1Btn.addEventListener('click', onPlayChannel);

function onKeyDown(ev:KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp;

    //console.log(key);

    channel1.push({
        key,
        time
    });

    playSound(key);
    //console.log(channel1);
}

function playSound(key: string){
    switch(key){
        case 'a':
            clapAudio.currentTime = 0;
            clapAudio.play();
            break;
        case 's':
            boomAudio.currentTime = 0;
            boomAudio.play();
            break;
        case 'd':
            hihatAudio.currentTime = 0;
            hihatAudio.play();
            break;
        case 'f':
            kickAudio.currentTime = 0;
            kickAudio.play();
            break;
        case 'g':
            openhatAudio.currentTime = 0;
            openhatAudio.play();
            break;
        case 'h':
            rideAudio.currentTime = 0;
            rideAudio.play();
            break;
        case 'j':
            snareAudio.currentTime = 0;
            snareAudio.play();
            break;
        case 'k':
            tinkAudio.currentTime = 0;
            tinkAudio.play();
            break;
        case 'l':
            tomAudio.currentTime = 0;
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


