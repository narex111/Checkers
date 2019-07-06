const game = {
    rows: {},
    squares: {},
    rowMaker(){
        for(i=0; i<8; i++){
            Object.defineProperty(this.rows, i+1, {value:[]})
            if(i%2 === 0){
            const row = document.createElement("div")
            row.id = i+1
            row.style.display = "flex"
            row.style.height = "12.5%"
            row.style.backgroundColor = "white"
            document.querySelector("#board").appendChild(row)
            } else {
                const row = document.createElement("div")
                row.id = i+1
                row.style.display = "flex"
                row.style.height = "12.5%"
                row.style.backgroundColor = "black"
                document.querySelector("#board").appendChild(row)
            }
        }
        console.log(this.rows)
    },
    // squareMaker(){
    //     for(i=0; i<8; i++){
    //         if(i%2 === 0){
    //             const square = document.createElement("div")
    //             square.id = "letter"+i
    //             square.style.width = "12.5%"
    //             square.style.height = "100%"
    //             square.style.backgroundColor = "black"
    //             document.querySelector(`#${i+1}`).appendChild(square)
    //         } else {
    //                 const square = document.createElement("div")
    //                 square.id = "letter"+i
    //                 square.style.width = "12.5%"
    //                 square.style.height = "100%"
    //                 square.style.backgroundColor = "white"
    //                 document.querySelector(`#${i+1}`).appendChild(square)
    //         }
    //     }
    // }
}


game.rowMaker()
game.squareMaker()