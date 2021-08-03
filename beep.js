 
audioCtx = new(window.AudioContext || window.webkitAudioContext)();
  function beep(timeBeep) {
    var oscillator = audioCtx.createOscillator();
    var gainNode   = audioCtx.createGain();
    var duration   = timeBeep;
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = 0.17;         //volume;
    oscillator.frequency.value = 3020;  //frequency;
    oscillator.type = 'sawtooth';//type; 'sine' 'square' 'triangle'

    oscillator.start();

   setTimeout(
        function() {
          oscillator.stop();
          FlagBeepOnce  = 2;
        },
        duration
    );
 FlagBeepOnce = 1;
  }

