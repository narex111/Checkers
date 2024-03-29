class Game {
    constructor(){
    this.rows = [];
    this.previousPossibles = [];
    this.red = {};
    this.blue = {};
    this.turn = true;
    this.moveNumber = 0;
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
                square.style.display = "flex"
                square.style.width = "12.5%"
                square.style.height = "100%"
                square.style.backgroundColor = "white"
                square.style.alignItems = "center"
                square.style.justifyContent ="center"
                row.appendChild(square)
                } else{
                    const square = document.createElement("div")
                    square.id = row.id + j
                    square.style.display = "flex"
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
                    square.style.display = "flex"
                    square.style.width = "12.5%"
                    square.style.height = "100%"
                    square.style.backgroundColor = "black"
                    square.style.alignItems = "center"
                    square.style.justifyContent ="center"
                    row.appendChild(square)
                    } else{
                        const square = document.createElement("div")
                    square.id = row.id + j
                    square.style.display = "flex"
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
                this.red = document.createElement("div")
                this.red.className = "red"
                this.red.style.width = "80%"
                this.red.style.height = "80%"
                this.red.style.backgroundColor = "red"
                this.red.style.borderRadius = "50%"
//defining .blue figures
                this.blue = document.createElement("div")
                this.blue.className = "blue"
                this.blue.style.width = "80%"
                this.blue.style.height = "80%"
                this.blue.style.backgroundColor = "blue"
                this.blue.style.borderRadius = "50%"
//appending red figures based on this.rows matrix values
                if(this.rows[i-1][j] === 1){
                    square.appendChild(this.red)
                } 
//appending blue figures based on this.rows matrix values
                else if(this.rows[i-1][j] === 2){
                    square.appendChild(this.blue)
                }
            }
        }
    }

    //------------TOOLS---------------------
    cleaner(){
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
    }

        squareToMatrix(element, value){
            const id = element.id
            const i = id[0]
            const j = id[1]
            this.rows[i][j] = value
        }

        matrixToSquare(i,k){
            if (this.rows[i][k] === 1){
                document.getElementById(i.toString()+k.toString()).appendChild(this.red)
            } else if(this.rows[i][k] === 2){
                document.getElementById(i.toString()+k.toString()).appendChild(this.blue)
            } else if(this.rows[i][k] === 0){
                document.getElementById(i.toString()+k.toString()).removeChild(document.getElementById(i.toString()+k.toString()).firstChild)
            }

        }

        scenarios(i,j){
            if(this.rows[i+1][j-1] === 0){
                this.rows[i+1][j-1] = 3
                document.getElementById((i+1).toString() + (j-1).toString()).className = "possible"
            }
            else if(this.rows[i+1][j-1] === 2 && this.rows[i+2][j-2] === 0){
                this.rows[i+2][j-2] = 3
                const k = i+2
                const l = j-2
                // this.redScenarios(k, l)
                document.getElementById((i+2).toString() + (j-2).toString()).className = "possible"
            }
            if(this.rows[i+1][j+1] === 0){
                this.rows[i+1][j+1] = 3
                document.getElementById((i+1).toString() + (j+1).toString()).className = "possible"
                }
            else if(i+2<this.rows.length && this.rows[i+1][j+1] === 2 && this.rows[i+2][j+2] === 0){
                this.rows[i+2][j+2] = 3
                const k = i+2
                const l = j+2
                // this.redScenarios(k, l)
                document.getElementById((i+2).toString() + (j+2).toString()).className = "possible"
            }
            if(this.rows[i-1][j-1] === 0){
                this.rows[i-1][j-1] = 3
                document.getElementById((i-1).toString() + (j-1).toString()).className = "possible"
            }
            /////////////
            else if (i-2>=0 && this.rows[i-1][j-1] === 1 && this.rows[i-2][j-2] === 0){
                this.rows[i-2][j-2] = 3
                document.getElementById((i-2).toString() + (j-2).toString()).className = "possible"
            }
            /////////////

            if(this.rows[i-1][j+1] === 0){
            this.rows[i-1][j+1] = 3
            document.getElementById((i-1).toString() + (j+1).toString()).className = "possible"
            }
            else if(this.rows[i-1][j+1] === 1 && this.rows[i-2][j+2] === 0){
                this.rows[i-2][j+2] = 3
                document.getElementById((i-2).toString() + (j+2).toString()).className = "possible"
            }
        }

        redScenarios(i, j){
        //adding 3's with different scenarios
            if(this.rows[i+1][j-1] === 0){
                this.rows[i+1][j-1] = 3
                document.getElementById((i+1).toString() + (j-1).toString()).className = "possible"
            }
            else if(this.rows[i+1][j-1] === 2 && this.rows[i+2][j-2] === 0){
                this.rows[i+2][j-2] = 3
                const k = i+2
                const l = j-2
                // this.redScenarios(k, l)
                document.getElementById((i+2).toString() + (j-2).toString()).className = "possible"
            }
            if(this.rows[i+1][j+1] === 0){
                this.rows[i+1][j+1] = 3
                document.getElementById((i+1).toString() + (j+1).toString()).className = "possible"
                }
            else if(i+2<this.rows.length && this.rows[i+1][j+1] === 2 && this.rows[i+2][j+2] === 0){
                this.rows[i+2][j+2] = 3
                const k = i+2
                const l = j+2
                // this.redScenarios(k, l)
                document.getElementById((i+2).toString() + (j+2).toString()).className = "possible"
            }
        }

        blueScenarios(i, j){
            if(this.rows[i-1][j-1] === 0){
                this.rows[i-1][j-1] = 3
                document.getElementById((i-1).toString() + (j-1).toString()).className = "possible"
            }
            /////////////
            else if (i-2>=0 && this.rows[i-1][j-1] === 1 && this.rows[i-2][j-2] === 0){
                this.rows[i-2][j-2] = 3
                document.getElementById((i-2).toString() + (j-2).toString()).className = "possible"
            }
            /////////////

            if(this.rows[i-1][j+1] === 0){
            this.rows[i-1][j+1] = 3
            document.getElementById((i-1).toString() + (j+1).toString()).className = "possible"
            }
            else if(this.rows[i-1][j+1] === 1 && this.rows[i-2][j+2] === 0){
                this.rows[i-2][j+2] = 3
                document.getElementById((i-2).toString() + (j+2).toString()).className = "possible"
            }
        }

        //---------------------------------------

    redFigureClicker(){
//listening to a click and adding number 3 into possible moves in the matrix
        const board = document.querySelector("#board")

        board.addEventListener("click", (e) =>{
            const parentSquare = e.target.parentElement
            const i = parseInt(parentSquare.id[0])
            const j = parseInt(parentSquare.id[1])
            if (this.moveNumber % 2 !== 0 && this.turn === false && e.target.className === "red" && e.target.id == ""){
//cleaning previous "click" id's and "possible"'s both on the board and in the matrix
            this.cleaner()    
            e.target.id = "clicked"

            this.redScenarios(i, j)
                console.log(this.rows)
                this.turn = true
                console.log(this.turn + "<- after click on red")
            }
//deducting 3's in case of a double click
            else if(this.turn === true && e.target.className === "red" && e.target.id == "clicked"){
                e.target.id = ""
                this.rows[i+1][j-1] -= 3
                this.rows[i+1][j+1] -= 3
//cleaning all the "possible" classes
                for (let k=0; k<8; k++){
                    for(let l=0; l<8; l++){
                        document.getElementById(k.toString()+l.toString()).className = ""
                    }
                }
                this.turn = false
                console.log(this.rows)
            }
            this.possibleMoves()
            this.play()
        })
        this.mover()
    }

    blueFigureClicker(){
//listening to a click and adding number 3 into possible moves in the matrix
        const board = document.querySelector("#board")

        board.addEventListener("click", (e) =>{
            const parentSquare = e.target.parentElement
            const i = parseInt(parentSquare.id[0])
            const j = parseInt(parentSquare.id[1])
            if (this.moveNumber % 2 === 0 && this.turn === true && e.target.className === "blue" && e.target.id == ""){

//cleaning previous "click" id's and "possible"'s both on the board and in the matrix
            this.cleaner()
            e.target.id = "clicked"
            this.blueScenarios(i, j)
//adding 3's with different scenarios
                // if(this.rows[i-1][j-1] === 0){
                //     this.rows[i-1][j-1] = 3
                //     document.getElementById((i-1).toString() + (j-1).toString()).className = "possible"
                // }
                // /////////////
                // else if(this.rows[i-1][j-1] === 1 && this.rows[i-2][j-2] === 0){
                //     this.rows[i-2][j-2] = 3
                //     document.getElementById((i-2).toString() + (j-2).toString()).className = "possible"
                // }
                // /////////////

                // if(this.rows[i-1][j+1] === 0){
                // this.rows[i-1][j+1] = 3
                // document.getElementById((i-1).toString() + (j+1).toString()).className = "possible"
                // }
                // else if(this.rows[i-1][j+1] === 1 && this.rows[i-2][j+2] === 0){
                //     this.rows[i-2][j+2] = 3
                //     document.getElementById((i-2).toString() + (j+2).toString()).className = "possible"
                // }
                console.log(this.rows)    
                this.turn = false
                console.log(this.turn + "<- after click on blue")
            }
//deducting 3's in case of a double click
            else if(this.turn === false && e.target.className === "blue" && e.target.id == "clicked"){
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
                
                            
                this.turn = true
                console.log(this.turn + "<- after double click on blue")
            }
            this.possibleMoves()
            this.play()
            // this.king()
        })
        this.mover()
    }

    possibleMoves(){
//makes all the squares in this.previous "black"
        this.previousPossibles.forEach((element,index) =>{
            element.style.backgroundColor = "black"
        })

//connects this.row with #board by coloring "yellow" squares that are have 3's in this.row matrix 
        for (let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                const square = document.getElementById(i.toString()+j.toString())
                if(this.rows[i][j] === 3){
                    square.style.backgroundColor = "yellow"
                    this.previousPossibles.push(square)
                }
            }
        }
    }

    mover(){
        board.addEventListener("click", (e) =>{
            const clicked = document.querySelector("#clicked")
            if (e.target.className === "possible"){
                if (clicked.className === "red"){
//if we see blue in front of red, we delete blue before moving red to e.target 
                    if(parseInt(e.target.id[0])-parseInt(clicked.parentNode.id[0]) === 2 && parseInt(e.target.id[1])>parseInt(clicked.parentNode.id[1])){
                        this.rows[parseInt(clicked.parentNode.id[0])+1][parseInt(clicked.parentNode.id[1])+1] = 0
                        this.matrixToSquare(parseInt(clicked.parentNode.id[0])+1, parseInt(clicked.parentNode.id[1])+1)
                    }
                    else if(parseInt(e.target.id[0])-parseInt(clicked.parentNode.id[0]) === 2 && parseInt(e.target.id[1])<parseInt(clicked.parentNode.id[1])){
                        this.rows[parseInt(clicked.parentNode.id[0])+1][parseInt(clicked.parentNode.id[1])-1] = 0
                        this.matrixToSquare(parseInt(clicked.parentNode.id[0])+1, parseInt(clicked.parentNode.id[1])-1)
                    }
                    //moving 1 to e.target position at this.row matrix
                    this.squareToMatrix(e.target, 1)
                    this.moveNumber++
                    console.log(this.moveNumber + "<-moveNumber after red move")
                } 
                
                else if(clicked.className === "blue"){
//if we see red in front of blue, we delete red before moving blue to e.target 
                    if(parseInt(clicked.parentNode.id[0]-parseInt(e.target.id[0])) === 2 && parseInt(e.target.id[1])>parseInt(clicked.parentNode.id[1])){
                        this.rows[parseInt(clicked.parentNode.id[0])-1][parseInt(clicked.parentNode.id[1])+1] = 0
                        this.matrixToSquare(parseInt(clicked.parentNode.id[0])-1, parseInt(clicked.parentNode.id[1])+1)
                    }
                    else if(parseInt(clicked.parentNode.id[0]) - parseInt(e.target.id[0]) === 2 && parseInt(e.target.id[1])<parseInt(clicked.parentNode.id[1])){
                        this.rows[parseInt(clicked.parentNode.id[0])-1][parseInt(clicked.parentNode.id[1])-1] = 0
                        this.matrixToSquare(parseInt(clicked.parentNode.id[0])-1, parseInt(clicked.parentNode.id[1])-1)
                    }
                    //moving 2 to e.target position in this.row matrix
                    this.squareToMatrix(e.target, 2)
                    this.moveNumber++
                    console.log(this.moveNumber + "<-moveNumber after blue move")
                }

                //cleaning where the figure used to be
                this.squareToMatrix(clicked.parentNode, 0)
                //moving the clicked figure to e.target on the board
                e.target.appendChild(clicked)
                this.cleaner()
            }
            // this.moveNumber++
            // console.log(this.moveNumber + "<-moveNumber")
        })
    }

    play(){
        const redFigs = document.getElementsByClassName("red")
        const blueFigs = document.getElementsByClassName("blue")

        if(redFigs.length === 0){
            console.log("Blue won")
            document.getElementById("result").innerText = "BLUE WON"
            document.getElementById("result").style.display = "flex"
        }
        else if(blueFigs.length === 0){
            console.log("Red won")
            document.getElementById("result").innerText = "RED WON"
            document.getElementById("result").style.display = "flex"
        }

    }

    // king(){
    //     const blues = document.getElementsByClassName("blue")
    //     for(let i=0; i<blues.length; i++){
    //         if(blues[i].parentNode.id[0] === "0"){
    //             blues[i].className = "blue-king"
    //             blues[i].style.backgroundColor = "green"
    //         }
    //     }
    // }


}