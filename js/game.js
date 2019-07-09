class Game {
    constructor(){
    this.rows = [];
    this.previous = [];
    }
    boardMaker(){
        for(let i=0; i<8; i++){
//creating 8 rows and apending them to #board div
            this.rows.push([])

//describing even rows
            if(i%2 === 0){
            const row = document.createElement("div")
            row.id = i
            row.style.display = "flex"
            row.style.height = "12.5%"
            row.style.backgroundColor = "white"
            document.querySelector("#board").appendChild(row)
//creating squares on even rows
            for(let j=0; j<8; j++){
                this.rows[i].push(0)
                if (j%2 === 0){
                const square = document.createElement("div")
                square.id = row.id + j
                row.style.display = "flex"
                square.style.width = "12.5%"
                square.style.height = "100%"
                square.style.backgroundColor = "white"
                square.style.alignItems = "center"
                square.style.justifyContent ="center"
                row.appendChild(square)
                } else{
                    const square = document.createElement("div")
                    square.id = row.id + j
                    row.style.display = "flex"
                    square.style.width = "12.5%"
                    square.style.height = "100%"
                    square.style.backgroundColor = "black"
                    square.style.alignItems = "center"
                    square.style.justifyContent ="center"
                    row.appendChild(square)
                }
            }
        } 
//describing odd rows        
        else {
                const row = document.createElement("div")
                row.id = i
                row.style.display = "flex"
                row.style.height = "12.5%"
                row.style.backgroundColor = "black"
                document.querySelector("#board").appendChild(row)

//creating squares on odd rows
                for(let j=0; j<8; j++){
                    this.rows[i].push(0)
                    if (j%2 === 0){
                    const square = document.createElement("div")
                    square.id = row.id + j
                    row.style.display = "flex"
                    square.style.width = "12.5%"
                    square.style.height = "100%"
                    square.style.backgroundColor = "black"
                    square.style.alignItems = "center"
                    square.style.justifyContent ="center"
                    row.appendChild(square)
                    } else{
                        const square = document.createElement("div")
                    square.id = row.id + j
                    row.style.display = "flex"
                    square.style.width = "12.5%"
                    square.style.height = "100%"
                    square.style.backgroundColor = "white"
                    square.style.alignItems = "center"
                    square.style.justifyContent ="center"
                    row.appendChild(square)
                    }
                }
            }
        }
    }

    matrixSetter(){
//the initial setting of this.rows matrix

//setting Player1 figures in this.rows matrix
        for(let i=0; i<3; i++){
            for(let j=0; j<8; j++){
                if(i%2 === 0 && j%2 !==0){
                    this.rows[i][j] += 1

                } else if(i%2 !== 0 && j%2 === 0){
                    this.rows[i][j] += 1
                }
            }
        }
//setting Player2 figures in this.rows matrix
        for(let i=5; i<8; i++){
            for(let j=0; j<8; j++){
                if(i%2 === 0 && j%2 !==0){
                    this.rows[i][j] += 2
                } else if(i%2 !== 0 && j%2 === 0){
                    this.rows[i][j] += 2
                }
            }
        }

    }

    gameSetter(){
        this.boardMaker()
        this.matrixSetter()

//creating figures and connecting this.row matrix with the #board <div>
        const board = document.getElementById("board").childNodes
        for(let i=1; i<=8; i++){
            const row = board[i].childNodes
            for(let j=0; j<8; j++){
                const square = row[j]
//defining .red figures
                const red = document.createElement("div")
                red.className = "red"
                red.style.width = "80%"
                red.style.height = "80%"
                red.style.backgroundColor = "red"
                red.style.borderRadius = "50%"
                red.style.alignSelf ="center"
                red.style.justifySelf = "center"
//defining .blue figures
                const blue = document.createElement("div")
                blue.className = "blue"
                blue.style.width = "80%"
                blue.style.height = "80%"
                blue.style.backgroundColor = "blue"
                blue.style.borderRadius = "50%"
                blue.style.alignSelf ="center"
                blue.style.justifySelf = "center"
//appending red figures based on this.rows matrix values
                if(this.rows[i-1][j] === 1){
                    square.appendChild(red)
                } 
//appending blue figures based on this.rows matrix values
                else if(this.rows[i-1][j] === 2){
                    square.appendChild(blue)
                }
            }
        }
    }

    redFigureClicker(){
//listening to a click and adding number 3 into possible moves in the matrix
        const board = document.querySelector("#board")

        board.addEventListener("click", (e) =>{
            const parentSquare = e.target.parentElement
            const i = parseInt(parentSquare.id[0])
            const j = parseInt(parentSquare.id[1])
            if (e.target.className === "red" && e.target.id == ""){
//cleaning previous "click" id's and "possible"'s both on the board and in the matrix
                for (let k=0; k<8; k++){
                    for(let l=0; l<8; l++){ 
                        const sq = document.getElementById(k.toString()+l.toString())
                        const fig = sq.firstChild
                        if(sq.className.length > 0){
                            sq.className = ""
                        }
                        if (Boolean(fig) === true && fig.id === "clicked"){
                            fig.id = ""
                        }
                        //cleaning previous 3's 
                        if(this.rows[k][l] === 3){
                            this.rows[k][l] -= 3
                        }
                    }
                }
                e.target.id = "clicked"
//adding 3's with different scenarios
                if(this.rows[i+1][j-1] === 0){
                    this.rows[i+1][j-1] = 3
                    document.getElementById((i+1).toString() + (j-1).toString()).className = "possible"
                }
//this and next "else if"'s are not tested
                else if(this.rows[i+1][j-1] === 2 && this.rows[i+2][j-2] === 0){
                    this.rows[i+2][j-2] = 3
                    document.getElementById((i+2).toString() + (j-2).toString()).className = "possible"
                }
        /////////////

                if(this.rows[i+1][j+1] === 0){
                this.rows[i+1][j+1] = 3
                document.getElementById((i+1).toString() + (j+1).toString()).className = "possible"
                }
                else if(this.rows[i+1][j+1] === 2 && this.rows[i+2][j+2] === 0){
                    this.rows[i+2][j+2] = 3
                    document.getElementById((i+2).toString() + (j+2).toString()).className = "possible"
                }

                console.log(this.rows)
            }
//deducting 3's in case of a double click
            else if(e.target.className === "red" && e.target.id == "clicked"){
                e.target.id = ""
                this.rows[i+1][j-1] -= 3
                this.rows[i+1][j+1] -= 3
//cleaning all the "possible" classes
                for (let k=0; k<8; k++){
                    for(let l=0; l<8; l++){
                        document.getElementById(k.toString()+l.toString()).className = ""
                    }
                }

                console.log(this.rows)
            }
            this.possibleMoves()
        })
    }

    blueFigureClicker(){
//listening to a click and adding number 3 into possible moves in the matrix
        const board = document.querySelector("#board")

        board.addEventListener("click", (e) =>{
            const parentSquare = e.target.parentElement
            const i = parseInt(parentSquare.id[0])
            const j = parseInt(parentSquare.id[1])
            if (e.target.className === "blue" && e.target.id == ""){

//cleaning previous "click" id's and "possible"'s both on the board and in the matrix
        for (let k=0; k<8; k++){
            for(let l=0; l<8; l++){ 
                const sq = document.getElementById(k.toString()+l.toString())
                const fig = sq.firstChild
                if(sq.className.length > 0){
                    sq.className = ""
                }
                if (Boolean(fig) === true && fig.id === "clicked"){
                    fig.id = ""
                }
                //cleaning previous 3's 
                if(this.rows[k][l] === 3){
                    this.rows[k][l] -= 3
                }
            }
        }
        e.target.id = "clicked"
//adding 3's with different scenarios
                if(this.rows[i-1][j-1] === 0){
                    this.rows[i-1][j-1] = 3
                    document.getElementById((i-1).toString() + (j-1).toString()).className = "possible"
                }
//this and next "else if"'s are not tested
                else if(this.rows[i-1][j-1] === 1 && this.rows[i-2][j-2] === 0){
                    this.rows[i-2][j-2] = 3
                    document.getElementById((i-2).toString() + (j-2).toString()).className = "possible"
                }
        /////////////

                if(this.rows[i-1][j+1] === 0){
                this.rows[i-1][j+1] = 3
                document.getElementById((i-1).toString() + (j+1).toString()).className = "possible"
                }
                else if(this.rows[i-1][j+1] === 2 && this.rows[i-2][j+2] === 0){
                    this.rows[i-2][j+2] = 3
                    document.getElementById((i-2).toString() + (j+2).toString()).className = "possible"
                }
                console.log(this.rows)
            }
//deducting 3's in case of a double click
            else if(e.target.className === "blue" && e.target.id == "clicked"){
                e.target.id=""
                this.rows[i-1][j-1] -= 3
                this.rows[i-1][j+1] -= 3
//cleaning all the "possible" classes
                for (let k=0; k<8; k++){
                    for(let l=0; l<8; l++){
                        document.getElementById(k.toString()+l.toString()).className = ""
                    }
                }     
                console.log(this.rows)       
            }
            this.possibleMoves()
        })
    }

    possibleMoves(){
//makes all the squares in this.previous "black"
        this.previous.forEach((element,index) =>{
            element.style.backgroundColor = "black"
        })

//connects this.row with #board by coloring "yellow" squares that are have 3's in this.row matrix 
        for (let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                const square = document.getElementById(i.toString()+j.toString())
                if(this.rows[i][j] === 3){
                    square.style.backgroundColor = "yellow"
                    this.previous.push(square)
                }
            }
        }
        console.log(this.previous)
    }

    

    // mover(){
    //     for (let k=0; k<8; k++){
    //         for(let l=0; l<8; l++){
    //             if(this.rows[k][l] === 3){


    //             }
    //             const fig = document.getElementById(k.toString()+l.toString()).firstChild
    //             if (Boolean(fig) === true && fig.id === "clicked"){

    //             }

    // }


}