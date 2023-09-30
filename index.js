var no_of_buttons = document.querySelectorAll(".drum").length; //this line will select all elements with class drum and return a them in an array, so we have got the length of this array.

for (var i = 0; i < no_of_buttons; i++) {
  //iterating over lenght of buttons
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { //setting eventListner to each button of class .drum iteratively.
    
    var text = this.innerHTML;                      //extracting the text inside .drum class of each 'this' element.
    makeSound(text);                                //text contains the text of .drum class , and when each box is clicked its eventListener is activated text gets its corresponding value which it passes to makesound function
    buttonAnimation(text);                          //calling the animation function with text value associtaed
});
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);                               //in this the whole window or document is listening to event so if any key is pressed , event has all the information of that event occured, so we pass event.key which return the value of which key is pressed
    buttonAnimation(event.key);                         //calling the animation event by key value.
});


function makeSound(key){
    switch (key) {                                 //based on the text we got, we use switch case to play music.
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}


function buttonAnimation(key){
    //we are selecting the .key class (dynamic) and adding another class 'pressed' which have css animation coded in style sheet.
    document.querySelector("." + key).classList.add("pressed");                //key is simply a text so we are concatinating '.' so that we select associated class element , which we further want to apply animations
    
    //this function takes two parameter 1st which function to execute, 2nd how much time to wait before calling that function
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");              //here we are waiting for 100ms and then removing pressed class so that all the animations gets removed after 100ms;
    },100);
}
