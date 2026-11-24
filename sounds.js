// Игровые электронные звуковые эффекты через Web Audio API.
// Это не настоящие аудиозаписи животных.
(function(){let ctx;function ac(){let C=window.AudioContext||window.webkitAudioContext;if(!C)return null;ctx=ctx||new C();if(ctx.state==='suspended')ctx.resume();return ctx}
function tone(c,f,d,type='sine',v=.08,delay=0){let o=c.createOscillator(),g=c.createGain(),t=c.currentTime+delay;o.type=type;o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(.001,t);g.gain.exponentialRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+d+.03)}
window.playSoundForPhrase=function(text){let c=ac();if(!c)return;let s=String(text).toLowerCase();
if(/кошка|мяу/.test(s)){tone(c,650,.2,'triangle');tone(c,470,.3,'triangle',.08,.2)}
else if(/собак|гав/.test(s)){tone(c,140,.12,'sawtooth',.1);tone(c,100,.15,'sawtooth',.1,.16)}
else if(/коров|му/.test(s)){tone(c,175,.5,'sawtooth',.09);tone(c,140,.35,'sawtooth',.08,.45)}
else if(/сирен|скорая|пожарн|полиц/.test(s)){tone(c,620,.3,'sawtooth',.07);tone(c,850,.3,'sawtooth',.07,.32);tone(c,620,.3,'sawtooth',.07,.64)}
else if(/мотоцикл|мотор|трактор|экскаватор|машин|автомобил/.test(s)){tone(c,85,.6,'sawtooth');tone(c,115,.5,'square',.04,.2)}
else if(/поезд|гудок|ту-ту/.test(s)){tone(c,420,.38,'triangle',.1);tone(c,560,.42,'triangle',.1,.42)}
else if(/лев|рык/.test(s)){tone(c,90,.35,'sawtooth',.1);tone(c,130,.2,'sawtooth',.07,.2)}
else if(/слон|труб/.test(s)){tone(c,330,.3,'triangle',.1);tone(c,490,.35,'triangle',.1,.3)}
else{tone(c,480,.12);tone(c,620,.14,'sine',.04,.14)}}})();