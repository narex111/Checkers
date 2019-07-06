// const game = {
//     rows: [],
//     squares: {},
//     boardMaker(){
//         for(let i=0; i<8; i++){
//             // Object.defineProperty(this.rows, "row" + (i+1), {value:[]})
//             this.rows.push([])
//             if(i%2 === 0){
//             const row = document.createElement("div")
//             row.id = i+1
//             row.style.display = "flex"
//             row.style.height = "12.5%"
//             row.style.backgroundColor = "white"
//             document.querySelector("#board").appendChild(row)
//             //square on even rows
//             for(let j=0; j<8; j++){
//                 this.rows[i].push(0)
//                 if (j%2 === 0){
//                 const square = document.createElement("div")
//                 square.id = row.id + (j+1)
//                 square.style.width = "12.5%"
//                 square.style.height = "100%"
//                 square.style.backgroundColor = "black"
//                 row.appendChild(square)
//                 } else{
//                     const square = document.createElement("div")
//                 square.id = row.id + (j+1)
//                 square.style.width = "12.5%"
//                 square.style.height = "100%"
//                 square.style.backgroundColor = "white"
//                 row.appendChild(square)
//                 }
//             }

//         } else {
//                 const row = document.createElement("div")
//                 row.id = i+1
//                 row.style.display = "flex"
//                 row.style.height = "12.5%"
//                 row.style.backgroundColor = "black"
//                 document.querySelector("#board").appendChild(row)

//                 for(let j=0; j<8; j++){
//                     this.rows[i].push(0)
//                     if (j%2 === 0){
//                     const square = document.createElement("div")
//                     square.id = row.id + (j+1)
//                     square.style.width = "12.5%"
//                     square.style.height = "100%"
//                     square.style.backgroundColor = "white"
//                     row.appendChild(square)
//                     } else{
//                         const square = document.createElement("div")
//                     square.id = row.id + (j+1)
//                     square.style.width = "12.5%"
//                     square.style.height = "100%"
//                     square.style.backgroundColor = "black"
//                     row.appendChild(square)
//                     }
//                 }
//             }
//         }
//         console.log(this.rows)
//     },
    // squareMaker(){
    //     for(let i=0; i<8; i++){
    //         if(i%2 === 0){
    //             const square = document.createElement("div")
    //             square.id = "letter"+i
    //             square.style.width = "12.5%"
    //             square.style.height = "100%"
    //             square.style.backgroundColor = "black"
    //             document.querySelector(`#${i+1}`).appendChild(square)
    //             for(i=0; i<8; i++){
    //                     const square = document.createElement("div")
    //                     square.id = "letter"+i
    //                     square.style.width = "12.5%"
    //                     square.style.height = "100%"
    //                     square.style.backgroundColor = "black"
    //                     document.querySelector(`#${i+1}`).appendChild(square)
    //             }
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
// }

const checkers = new Game()

checkers.matrixSetter()
checkers.gameSetter()