function Players(name,marker) {
    this.name=name;
    this.marker=marker;
}

Player1 = new Players('Nithin','X')
Player2 = new Players('Rahul','O')



let board = (function () {
    let arr =[   [[],[],[]],   [[],[],[]],   [[],[],[]]    ]





    return{  arr };
})();

 // 77476

let displayController = (function() {
    let createBoard = function(){
        let container = document.createElement('div')
        container.classList.add('container')
        document.body.appendChild(container)
        let board_grid = document.createElement('div')
        board_grid.classList.add('mainGrid')
        container.appendChild(board_grid)
        for (let i = 0; i < 9; i++) {
            let grids = document.createElement('div')
            grids.classList.add('grid')
            board_grid.appendChild(grids)
        }
        return
    };

    let placeBoard = function (){

         
    }
        return {createBoard,placeBoard
        };

})();

function Game()
{
    place = function(marker,pos){
    board.arr[pos[0]][pos[1]]=marker;
    return marker,pos;
    }

    checkPos = function(pos){
        console.log(board.arr[pos[0]][pos[1]])
            if ((board.arr[pos[0]][pos[1]]=='O')||(board.arr[pos[0]][pos[1]]=='X'))
                {
                    return false
                }
            else{
                return true;
            }
    }
    checkDraw = function(){
        let sum =0 
        console.log(board.arr)
        for (let i = 0; i < board.arr.length; i++) {
            for (let j = 0; j < board.arr[i].length; j++) {
                if(board.arr[i][j].includes('X'))     
                {
                   sum = sum +1
                }
                if (board.arr[i][j].includes('O'))
                {
                       sum = sum+1
                }
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
        if ((board.arr[0][0] ==board.arr[0][1] ) && (board.arr[0][1] ==board.arr[0][2]))
            {
                return true;
            }
        else if((board.arr[0][2] ==board.arr[1][2] ) && (board.arr[1][2] ==board.arr[2][2]))
            {
                true;
            }
        else if ((board.arr[0][1] ==board.arr[1][1] ) && (board.arr[1][1] ==board.arr[2][1]))
            {
              return  true
            }
        else if ((board.arr[1][0] ==board.arr[1][1] ) && (board.arr[1][1] ==board.arr[1][2]))
            {
               return true
            }
        else if ((board.arr[2][0] ==board.arr[2][1] ) && (board.arr[2][1] ==board.arr[2][2]))
            {
              return  true
            }
            else if ((board.arr[0][0] ==board.arr[1][0] ) && (board.arr[1][0] ==board.arr[2][0]))
                {
                 return  true
                }
                else if ((board.arr[0][2] ==board.arr[1][1] ) && (board.arr[1][1] ==board.arr[2][0]))
                    {
                      return  true
                    }
                else if ((board.arr[0][0] ==board.arr[1][1] ) && (board.arr[1][1] ==board.arr[2][2]))
                    {
                        return  true
                    }
                else{
                    return false
                }
    }

   

    return{
        place,checkWin,checkDraw,checkPos
    }
}

let game = new Game()
console.log(game)
console.log(board.arr)
console.log(displayController.createBoard())
// console.log(game.checkWin())
// console.log(game.checkPos([2,2])) 
// console.log(game.checkDraw()) 