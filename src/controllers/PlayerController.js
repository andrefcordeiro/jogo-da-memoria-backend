const Player = require("../models/Player");

module.exports = {

    //FUNÇÃO PARA LISTAR TODOS AS SENHAS
    async index(request, response) {
        const Players = await Player.find();

        console.log("Listagem de jogadores: \n" + Players)
        return response.json(Players);
    },

    //FUNÇÃO PARA ADICIONAR UM PLAYER 
    async store(request, response) {

        const { name, attempts } = request.body;

        let player = await Player.findOne({ name }); //procura um nome igual no banco de dados 

        if (player) {
            console.log(name, attempts);

            player = await Player.updateOne({
                name: name,
                attempts: attempts
            });
        }
        else {
            console.log(name, attempts);

            player = await Player.create({
                name: name,
                attempts: attempts
            });
        }
        return response.json(player);

    }
}