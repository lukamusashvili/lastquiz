document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if(event.key == "a"){ //C
        var audio = document.getElementById("C");
        audio.play();
    }
    if(event.key == "w"){ //C#
        var audio = document.getElementById("Cs");
        audio.play();
    }
    if(event.key == "s"){ //D
        var audio = document.getElementById("D");
        audio.play(); 
    }
    if(event.key == "e"){ //D#
        var audio = document.getElementById("Ds");
        audio.play();
    }
    if(event.key == "d"){ //E
        var audio = document.getElementById("E");
        audio.play();
    }
    if(event.key == "f"){ //F
        var audio = document.getElementById("F");
        audio.play();
    }
    if(event.key == "t"){ //F#
        var audio = document.getElementById("Fs");
        audio.play();
    }
    if(event.key == "g"){ //G
        var audio = document.getElementById("G");
        audio.play();
    }
    if(event.key == "y"){ //G#
        var audio = document.getElementById("Gs");
        audio.play();
    }
    if(event.key == "h"){ //A
        var audio = document.getElementById("A");
        audio.play();
    }
    if(event.key == "u"){ //A#
        var audio = document.getElementById("As");
        audio.play();
    }
    if(event.key == "j"){ //B
        var audio = document.getElementById("B");
        audio.play();
    }
});