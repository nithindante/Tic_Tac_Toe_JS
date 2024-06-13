function Players(name,marker) {
    this.name=name;
    this.marker=marker;
}


let firstForm = (function () {
    let mainForm = document.createElement('form')
    mainForm.classList.add('inputDiv')
    let firstLabel = document.createElement('label')
    firstLabel.setAttribute('for','Player1')
    firstLabel.innerHTML="First Players name";
    let firstInput = document.createElement('input')
    firstInput.setAttribute('type','text')
    firstInput.setAttribute('id','Player1')
    firstInput.required = true;
    let secondLabel = document.createElement('label')   
    secondLabel.setAttribute('for','Player2')
    secondLabel.innerHTML = "Second player's name";
    let secondInput = document.createElement('input')
    secondInput.setAttribute('type','text');
    secondInput.setAttribute('id','Player2');
    secondInput.required = true;
    let button = document.createElement('input');
    button.setAttribute('type','submit');
    button.classList.add('submitButton')
    document.body.appendChild(mainForm)
    mainForm.appendChild(firstLabel)
    mainForm.appendChild(firstInput)
    mainForm.appendChild(secondLabel)
    mainForm.appendChild(secondInput)
    mainForm.appendChild(button)
    mainForm.addEventListener('submit',function () {
        mainForm.classList.add('mainFormAnimated')
        
        Player1 = new Players(firstInput.value,'O')
        Player2 = new Players(secondInput.value,'X')
        displayController.createBoard()
        placeMarker(childGrids,assignMarker)
        mainForm.reset();
        event.preventDefault();
    })
    
})();

let board = (function () {
    let arr =[   [],[],[],   [],[],[],   [],[],[]   ]
    return{  arr };
})();


let displayController = (function() {
        let container = document.createElement('div')
        container.classList.add('container')
        document.body.appendChild(container)
        let board_grid = document.createElement('div')
        board_grid.classList.add('mainGrid')
        container.appendChild(board_grid)
        
    let createBoard = function(){
        for (let i = 0; i < 9; i++) {
            let grids = document.createElement('div')
            grids.classList.add('grid')
            board_grid.appendChild(grids)
        }
        return
    };

    let placeBoard = function (pos,assignMarker)
    {
        game.place(assignMarker,pos)
        let newDiv = document.createElement('div')
        newDiv.classList.add('newDiv')
        childGrids[pos].appendChild(newDiv)
        newDiv.textContent = assignMarker
    }

        return {createBoard,placeMarker,placeBoard
        };

})();

function Game()
{
    place = function(marker,pos){
    board.arr[pos]=marker;
    return board.arr
    }

    checkDraw = function(){
        let sum =0 
        for (let i = 0; i < board.arr.length; i++) {  
                if(board.arr[i].includes('X'))     
                {
                   sum = sum +1
                }
                if (board.arr[i].includes('O'))
                {
                       sum = sum+1
                }
        }
        if(sum === 9){
            return true
        }
        else{
            return false
        }
    }

    checkWin = function(){ 
        console.log(board.arr[0])
        console.log(board.arr[1])
        console.log(board.arr[2])
        if ((board.arr[0].toString() ===board.arr[1].toString()) && (board.arr[1].toString() ===board.arr[2].toString()) && (board.arr[1].length>0))
            {
                
                return true;
            }
        else if((board.arr[0].toString() ===board.arr[3].toString() ) && (board.arr[3].toString() ===board.arr[6].toString())&& (board.arr[3].length>0))
            {
               
                return true;
            }
        else if ((board.arr[3].toString() ==board.arr[4].toString() ) && (board.arr[4].toString() ==board.arr[5].toString())&& (board.arr[4].length>0))
            {
              
              return  true
            }
        else if ((board.arr[6].toString() ==board.arr[7].toString() ) && (board.arr[7].toString() ==board.arr[8].toString())&& (board.arr[7].length>0))
            {
                
               return true
            }
        else if ((board.arr[1].toString() ==board.arr[4].toString() ) && (board.arr[4].toString() ==board.arr[7].toString())&& (board.arr[4].length>0))
            {
                
              return  true
            }
            else if ((board.arr[3].toString() ==board.arr[5].toString() ) && (board.arr[5].toString() ==board.arr[8].toString())&& (board.arr[5].length>0))
                {
                    
                 return  true
                }
                else if ((board.arr[0].toString() ==board.arr[4].toString() ) && (board.arr[4].toString() ==board.arr[8].toString())&& (board.arr[4].length>0))
                    {
                       
                      return  true
                    }
                else if ((board.arr[2].toString() ==board.arr[4].toString() ) && (board.arr[4].toString() ==board.arr[6].toString())&& (board.arr[2].length>0))
                    {
                        
                           
                        return  true
                    }
                return false
    }

   

    return{
        place,checkWin,checkDraw
    }
}





let game = new Game()
let mainGrid =document.querySelector('.mainGrid')
let childGrids = mainGrid.children;
let assignMarker = 0 

function placeMarker(childGrids,assignMarker) {
    for (let i = 0; i < childGrids.length; i++) {
        childGrids[i].addEventListener('click',function () {
            if (childGrids[i].textContent.trim().length==0)
            {
            if (assignMarker == 0) {
                displayController.placeBoard(i,'O');
                if(game.checkWin())
                    {   
                        resultDiv(Player1,'Won')
                        return
                    }
                assignMarker = 1;
            }
            else{
                displayController.placeBoard(i,'X'); 
                if(game.checkWin())
                    {   
                        resultDiv(Player2,'Won')
                        return
                    }
                assignMarker = 0;
            }
            if (game.checkDraw()) {
                resultDiv(Player1,'Draw')
                console.log('Draw')
                                return
            }
        }
        } )
    }
}


let resultDiv = function (player,status) {
let mainForm = document.querySelector('.inputDiv')
let childDivs = document.querySelectorAll('.grid')
let resultDiv = document.createElement('div')
resultDiv.classList.add('resultDiv')
document.body.appendChild(resultDiv)
mainGrid.classList.add('afterResult')

let resetButton = document.createElement('button')

if(status =='Won'){
resultDiv.innerHTML = `${player.name.toString()} has ${status}`
}
else{
    resultDiv.innerHTML = " Its a Draw"
}
resetButton.innerHTML='Restart'



resultDiv.appendChild(resetButton)
resetButton.addEventListener('click',function () {
     document.body.removeChild(resultDiv)
     mainForm.classList.toggle('mainFormAnimated')
     mainGrid.classList.toggle('afterResult')
     for (let i = 0; i < 9; i++) {
        board.arr[i]=[];
       mainGrid.removeChild(childDivs[i])
    }
})
};