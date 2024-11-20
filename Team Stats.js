const team = {
  _players : [
    {firstName : "John", lastName : "Smith", age : 20},
    {firstName : "Jim", lastName : "Smitts", age : 21},
    {firstName : "Jane", lastName : "Smitch", age : 22}
  ],
  _games : [
    {opponent : "Scotland", teamPoints : 20, opponentPoints : 19},
    {opponent : "Wales", teamPoints : 30, opponentPoints : 10},
    {opponent : "Ireland", teamPoints : 20, opponentPoints : 190},
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },
  
  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName : newFirstName,
      lastName : newLastName,
      age : newAge
  };
  this._players.push(newPlayer);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const newGame = {
      opponent : opponent,
      teamPoints : teamPoints,
      opponentPoints : opponentPoints
    };
    this._games.push(newGame);
  }
}

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);

console.log(team.players);
console.log(team.games);
