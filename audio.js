document.addEventListener('keydown', function(event) {
    if(event.key == "a"){ //C
        var audio = document.getElementById("C");
        audio.load();
        audio.play();
    }
    if(event.key == "w"){ //C#
        var audio = document.getElementById("Cs");
        audio.load();
        audio.play();
    }
    if(event.key == "s"){ //D
        var audio = document.getElementById("D");
        audio.load();
        audio.play(); 
    }
    if(event.key == "e"){ //D#
        var audio = document.getElementById("Ds");
        audio.load();
        audio.play();
    }
    if(event.key == "d"){ //E
        var audio = document.getElementById("E");
        audio.load();
        audio.play();
    }
    if(event.key == "f"){ //F
        var audio = document.getElementById("F");
        audio.load();
        audio.play();
    }
    if(event.key == "t"){ //F#
        var audio = document.getElementById("Fs");
        audio.load();
        audio.play();
    }
    if(event.key == "g"){ //G
        var audio = document.getElementById("G");
        audio.load();
        audio.play();
    }
    if(event.key == "y"){ //G#
        var audio = document.getElementById("Gs");
        audio.load();
        audio.play();
    }
    if(event.key == "h"){ //A
        var audio = document.getElementById("A");
        audio.load();
        audio.play();
    }
    if(event.key == "u"){ //A#
        var audio = document.getElementById("As");
        audio.load();
        audio.play();
    }
    if(event.key == "j"){ //B
        var audio = document.getElementById("B");
        audio.load();
        audio.play();
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
                audio.load();
                audio.play();
            }
            if(array[i] == "C#"){
                var audio = document.getElementById("Cs");
                audio.load();
                audio.play();
            }
            if(array[i] == "D"){
                var audio = document.getElementById("D");
                audio.load();
                audio.play(); 
            }
            if(array[i] == "D#"){
                var audio = document.getElementById("Ds");
                audio.load();
                audio.play();
            }
            if(array[i] == "E"){
                var audio = document.getElementById("E");
                audio.load();
                audio.play();
            }
            if(array[i] == "F"){
                var audio = document.getElementById("F");
                audio.load();
                audio.play();
            }
            if(array[i] == "F#"){
                var audio = document.getElementById("Fs");
                audio.load();
                audio.play();
            }
            if(array[i] == "G"){
                var audio = document.getElementById("G");
                audio.load();
                audio.play();
            }
            if(array[i] == "G#"){
                var audio = document.getElementById("Gs");
                audio.load();
                audio.play();
            }
            if(array[i] == "A"){
                var audio = document.getElementById("A");
                audio.load();
                audio.play();
            }
            if(array[i] == "A#"){
                var audio = document.getElementById("As");
                audio.load();
                audio.play();
            }
            if(array[i] == "B"){
                var audio = document.getElementById("B");
                audio.load();
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
        }, 600)
    }
    myLoop();
}