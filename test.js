
let games = [
    {id: '1', title: 'Fifa', platform: ['PS3']},
    {id: '2', title: 'Pokemon', platform: ['PS4', 'Xbox']},
    {id: '3', title: 'Boxing', platform: ['PS2', 'Xbox', 'PC']},
    {id: '4', title: 'Mario ', platform: ['PC']},
    {id: '5', title: 'Kontra', platform: ['PS4', 'Xbox', 'PC']},
  ]
//   let game = games.map(m=>{

//     return m.id
//   });

let game = games[games.length - 1];
console.log(parseInt(game.id)+1);