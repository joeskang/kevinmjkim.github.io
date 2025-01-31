var isRedTurn = true;
var gameOver = false;
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
function handleClick(element) {
    if(!gameOver) {
        if(!element.children[0].innerText) {
    
    
        if(isRedTurn) {
            document.getElementById("turn").innerText = "Yellow";
        }
        else {
            document.getElementById("turn").innerText = "Red";
        }
        let columnNumber = Number(element.id.split("-")[1]) % 5;
        dropInColumn(columnNumber);

        checkVictory();
        isRedTurn = !isRedTurn;
        }
        }
    }

    function dropInColumn(columnNumber) {
        if (columnNumber === 0) {
            columnNumber = 5;
        }
        let circleConstant = "circle-";
        let currentColumnId = circleConstant + columnNumber;
        let el = document.getElementById(currentColumnId);

        while(el.style.backgroundColor != "red" && el.style.backgroundColor != "yellow" && columnNumber <= 25) {

            if (isRedTurn) {
                el.style.backgroundColor = "red";
            } else {
                el.style.backgroundColor = "yellow";
            }

            if (columnNumber > 5) {
                document.getElementById("circle-" + (columnNumber - 5)).style.backgroundColor = "rgb(141, 141, 161)";
            }

            columnNumber += 5;
            if (columnNumber > 25) {
                break;
            }
            el = document.getElementById(circleConstant + columnNumber);

        }
    }

    function checkVictory() {
        let winner = checkRow1() ||
         checkRow2() ||
        checkRow3() ||
         checkColumn1() || 
         checkColumn2() ||
          checkColumn3() ||
          checkColumn4() ||
          checkColumn5() //||
        //  checkDiagonal1() || 
        //  checkDiagonal2();
    if(winner) {
        let topText = document.getElementById("top-text");
        topText.innerText  = "Victory! The Winner Is: " + winner;
        gameOver = true;
    }
    }

    function checkRow1() {
        let bt1 = document.getElementById("circle-1").children[0].innerText;
        let bt2 = document.getElementById("circle-2").children[0].innerText;
        let bt3 = document.getElementById("circle-3").children[0].innerText;
        let bt4 = document.getElementById("circle-4").children[0].innerText;
        let bt5 = document.getElementById("circle-5").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkRow2() {
        let bt1 = document.getElementById("circle-6").children[0].innerText;
        let bt2 = document.getElementById("circle-7").children[0].innerText;
        let bt3 = document.getElementById("circle-8").children[0].innerText;
        let bt4 = document.getElementById("circle-9").children[0].innerText;
        let bt5 = document.getElementById("circle-10").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkRow3() {
        let bt1 = document.getElementById("circle-11").children[0].innerText;
        let bt2 = document.getElementById("circle-12").children[0].innerText;
        let bt3 = document.getElementById("circle-13").children[0].innerText;
        let bt4 = document.getElementById("circle-14").children[0].innerText;
        let bt5 = document.getElementById("circle-15").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn1() {
        let bt1 = document.getElementById("circle-1").children[0].innerText;
        let bt2 = document.getElementById("circle-6").children[0].innerText;
        let bt3 = document.getElementById("circle-11").children[0].innerText;
        let bt4 = document.getElementById("circle-16").children[0].innerText;
        let bt5 = document.getElementById("circle-21").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }


    function checkColumn2() {
        let bt1 = document.getElementById("circle-2").children[0].innerText;
        let bt2 = document.getElementById("circle-7").children[0].innerText;
        let bt3 = document.getElementById("circle-12").children[0].innerText;
        let bt4 = document.getElementById("circle-17").children[0].innerText;
        let bt5 = document.getElementById("circle-22").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn3() {
        let bt1 = document.getElementById("circle-3").children[0].innerText;
        let bt2 = document.getElementById("circle-8").children[0].innerText;
        let bt3 = document.getElementById("circle-13").children[0].innerText;
        let bt4 = document.getElementById("circle-18").children[0].innerText;
        let bt5 = document.getElementById("circle-23").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn4() {
        let bt1 = document.getElementById("circle-4").children[0].innerText;
        let bt2 = document.getElementById("circle-9").children[0].innerText;
        let bt3 = document.getElementById("circle-14").children[0].innerText;
        let bt4 = document.getElementById("circle-19").children[0].innerText;
        let bt5 = document.getElementById("circle-24").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }

    function checkColumn5() {
        let bt1 = document.getElementById("circle-5").children[0].innerText;
        let bt2 = document.getElementById("circle-10").children[0].innerText;
        let bt3 = document.getElementById("circle-15").children[0].innerText;
        let bt4 = document.getElementById("circle-20").children[0].innerText;
        let bt5 = document.getElementById("circle-25").children[0].innerText;
    

    if(bt1 && bt1 === bt2 && bt2 === bt3&& bt3 === bt4 && bt4) {
        return bt1;
    } 
     else if(bt2 && bt2 === bt3&& bt3 === bt4 && bt4 === bt5 && bt5){
        return bt2;
     }
     return '';

     return bt1.innerText === bt2.innerText === bt3.innerText === bt4.innerText || 
     bt2.innerText === bt3.innerText === bt4.innerText === bt5.innerText;
    }


    function reset() {
        gameOver = false;
    
        isRedTurn = true; 
    
        for( i =1; i < 10; i++) {
            let id_name = "circle-" + i;
    
            let bt1 = document.getElementById(id_name).children[0].innerText = '';
        }
        let topText = document.getElementById("top-text");
        topText.innerText = "Turn: ";
        let mySpan = document.createElement("span");
        mySpan.id = "turn";
        mySpan.innerText = "Red";
        topText.appendChild(mySpan);
    }