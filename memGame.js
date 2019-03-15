// JavaScript source code


function assigner() {
    if ((document.getElementById(1).src).includes('.')) { //File name always has a .png, so if . is in the name, then i'm not gonna generate again
        alert("REEEEEE");
        return null;
    }

    var x = 0;
    var incount = 0;
    var num = 0;
    var part;
    var myString = null;
    for (x = 1; x <= 8; x++) { //I have 8 images to pick from. Each must be used twice.
        //alert("INSIDE MAIN LOOP");
        incount = 0; //resetting for next image counter. this is so i can pick 2 of next one.
        if (x == 9) {
            break;
        }
        while (incount < 2) { //x has picked an image, so now i need to assign it to a random location in my game. Loop until 2 images placed.
            num = Math.floor((Math.random() * 16) + 1); //randomly choosing an ID
           // alert(num);
            part = document.getElementById(num); //selecting the HTML element with said ID
            myString = part.src;

            if (!(myString.includes('.'))) { //if my image source is empty, ie the d
               // alert("INSIDE ADDER");
                part.src = x + ".png";
                incount += 1; //image placed, counter updated.
            }
        }

    }

    /*document.getElementById("kek").innerHTML = "HAAAAHAAAAAHAAA";*/
}

var numActiveCards = 0;
var prevInput = 0;
var firstCardId = 0;
var secondCardId = 0;







function clearCards() {
    if (!((firstCardId.src).includes('j'))) {
        firstCardId.style.filter = "contrast(0%)";
        firstCardId.style.webkitFilter = "contrast(0%)";
        firstCardId = 0;
    }
    if (!((secondCardId.src).includes('j'))) {
        secondCardId.style.filter = "contrast(0%)";
        secondCardId.style.webkitFilter = "contrast(0%)";
        secondCardId = 0;
    }
    numActiveCards = 0;
    prevInput = 0;
}



function contraster(y) {
    /*
    if (numActiveCards == 2) {
        for (looper = 1; looper < 17; looper++) {    //Current issues: I can make the matched cards' images turn into gold to indicate completion. Having hard time making them stick and become unclickable.
                                                     //Furthermore, if I try make them stick, so does everything else. My logic is perfect without sticking. With sticking, i have undefined behaviors.

          //  if (((document.getElementById(looper).src).includes('j'))) {

                document.getElementById(looper).style.filter = "contrast(0%)";
                document.getElementById(looper).style.webkitFilter = "contrast(0%)";
            //}
        }
        numActiveCards = 0;
        prevInput = 0;
    }
    */
    var checker = document.getElementById(y);
    if ((checker.src).includes('j')) {
        //alert("Clicked on a Gold. Why man? Why?");
        return null;
    }



    if (numActiveCards == 2) {//CLEAR FUNCT
        clearCards();
    }



    else if ((numActiveCards < 2)&&(prevInput!=y)) {
        document.getElementById(y).style.filter = "contrast(100%)";
        document.getElementById(y).style.webkitFilter = "contrast(100%)";
        numActiveCards += 1;

        if (numActiveCards == 2) {
            firstCardId = document.getElementById(prevInput);
            secondCardId = document.getElementById(y);

            if (firstCardId.src == secondCardId.src) {
                //alert("FOUND A MATCH BOYS...");
                document.getElementById(prevInput).src = "gold.jpg";
                document.getElementById(y).src = "gold.jpg";
                clearCards();
            }
        }

        prevInput = y;
    }
}

/*
 *if (numActiveCards < 2 ){

    if(numActiveCards==0){
        firstCardId=document.getElementById(y);
        numActiveCards += 1;
    }
    if(numActiveCards==1){
        secondCardId=document.getElementById(y);
        numActiveCards += 1;

        if()
    }
}

*/




function myF() {
    alert("This is fucking bullshit man");
}



window.onload = function() {
    var lawl = document.getElementById("myButton");
    lawl.onclick = assigner;

   // var one = document.getElementById("1");
    /*var two = document.getElementById("2");
    var three = document.getElementById("3");
    var four = document.getElementById("4");
    var five = document.getElementById("5");
    var six = document.getElementById("6");
    var seven = document.getElementById("7");
    var eight = document.getElementById("8");
    var nine = document.getElementById("9");
    var ten = document.getElementById("10");
    var eleven = document.getElementById("11");
    var twelve = document.getElementById("12");
    var thirteen = document.getElementById("13");
    var fourteen = document.getElementById("14");
    var fifteen = document.getElementById("15");
    var sixteen = document.getElementById("16");

    //one.onclick = contraster(1);  //these are being executed even without an onclick?
    two.onclick = contraster(2);
    three.onclick = contraster(3);
    four.onclick = contraster(4);
    five.onclick = contraster(5);
    six.onclick = contraster(6);
    seven.onclick = contraster(7);
    eight.onclick = contraster(8);
    nine.onclick = contraster(9);
    ten.onclick = contraster(10);
    eleven.onclick = contraster(11);
    twelve.onclick = contraster(12);
    thirteen.onclick = contraster(13);
    fourteen.onclick = contraster(14);
    fifteen.onclick = contraster(15);
    sixteen.onclick = contraster(16);*/

    /*var x[];
    var y = 0;
    for (y = 1; y < 17; y++) {
        x[y] = document.getElementById(y);
        x[y].onclick = contraster(y);
    }*/
}







/*
function putPicture() {
    var i = 0;
    var 
}
*/