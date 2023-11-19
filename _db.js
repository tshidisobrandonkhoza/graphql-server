let games = [
    {id: '1', title: 'Fifa', platform: ['PS3']},
    {id: '2', title: 'Pokemon', platform: ['PS4', 'Xbox']},
    {id: '3', title: 'Boxing', platform: ['PS2', 'Xbox', 'PC']},
    {id: '4', title: 'Mario ', platform: ['PC']},
    {id: '5', title: 'Kontra', platform: ['PS4', 'Xbox', 'PC']},
  ]
  
  let authors = [
    {id: '1', name: 'sizwe', verified: true},
    {id: '2', name: 'josh', verified: false},
    {id: '3', name: 'linda', verified: true},
  ]
  
  let reviews = [
    {id: '1', rating: 9, content: 'lorem ipsum A', author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum B', author_id: '2', game_id: '1'},
    {id: '3', rating: 7, content: 'lorem ipsum C', author_id: '3', game_id: '3'},
    {id: '4', rating: 5, content: 'lorem ipsum D', author_id: '2', game_id: '4'},
    {id: '5', rating: 8, content: 'lorem ipsum E', author_id: '2', game_id: '5'},
    {id: '6', rating: 7, content: 'lorem ipsum F', author_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum G', author_id: '3', game_id: '1'},
  ]
  
  export default { games, authors, reviews }