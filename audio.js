document.addEventListener('keydown', function(event) {
    if(event.key == "a"){ //C
        var audio1 = document.getElementById("C");
        audio1.play();
    }
    if(event.key == "w"){ //C#
        var audio2 = document.getElementById("Cs");
        audio2.play();
    }
    if(event.key == "s"){ //D
        var audio3 = document.getElementById("D");
        audio3.play(); 
    }
    if(event.key == "e"){ //D#
        var audio4 = document.getElementById("Ds");
        audio4.play();
    }
    if(event.key == "d"){ //E
        var audio5 = document.getElementById("E");
        audio5.play();
    }
    if(event.key == "f"){ //F
        var audio6 = document.getElementById("F");
        audio6.play();
    }
    if(event.key == "t"){ //F#
        var audio7 = document.getElementById("Fs");
        audio7.play();
    }
    if(event.key == "g"){ //G
        var audio8 = document.getElementById("G");
        audio8.play();
    }
    if(event.key == "y"){ //G#
        var audio9 = document.getElementById("Gs");
        audio9.play();
    }
    if(event.key == "h"){ //A
        var audio10 = document.getElementById("A");
        audio10.play();
    }
    if(event.key == "u"){ //A#
        var audio11 = document.getElementById("As");
        audio11.play();
    }
    if(event.key == "j"){ //B
        var audio12 = document.getElementById("B");
        audio12.play();
    }
});

function play(){
    document.getElementById("inputArray").disabled = true;
    document.getElementById("play").disabled = true;
    var arrayy = document.getElementById("inputArray").value;
    var array = arrayy.split(",")
    var i = 0
    function myLoop() {
        setTimeout(function() {
            console.log(array[i])
            if(array[i] == "C"){
                var audio = document.getElementById("C");
                audio.pause();
                audio.play();
            }
            if(array[i] == "C#"){
                var audio = document.getElementById("Cs");
                audio.pause();
                audio.play();
            }
            if(array[i] == "D"){
                var audio = document.getElementById("D");
                audio.pause();
                audio.play(); 
            }
            if(array[i] == "D#"){
                var audio = document.getElementById("Ds");
                audio.pause();
                audio.play();
            }
            if(array[i] == "E"){
                var audio = document.getElementById("E");
                audio.pause();
                audio.play();
            }
            if(array[i] == "F"){
                var audio = document.getElementById("F");
                audio.pause();
                audio.play();
            }
            if(array[i] == "F#"){
                var audio = document.getElementById("Fs");
                audio.pause();
                audio.play();
            }
            if(array[i] == "G"){
                var audio = document.getElementById("G");
                audio.pause();
                audio.play();
            }
            if(array[i] == "G#"){
                var audio = document.getElementById("Gs");
                audio.pause();
                audio.play();
            }
            if(array[i] == "A"){
                var audio = document.getElementById("A");
                audio.pause();
                audio.play();
            }
            if(array[i] == "A#"){
                var audio = document.getElementById("As");
                audio.pause();
                audio.play();
            }
            if(array[i] == "B"){
                var audio = document.getElementById("B");
                audio.pause();
                audio.play();
            }
            i++;
            if (i < array.length) {
                myLoop();
            }
            else{
                document.getElementById("inputArray").disabled = false;
                document.getElementById("play").disabled = false;
            }
        }, 1600)
    }
    myLoop();
}