const Player = require("../models/Player");

module.exports = {

    //FUNÇÃO PARA LISTAR TODOS AS SENHAS
    async index(request, response) {
        const Players = await Player.find().catch((err) => { console.log(err) });

        console.log("Listagem de jogadores: \n" + Players)
        return response.json(Players);
    },

    //FUNÇÃO PARA ADICIONAR UM PLAYER 
    async store(request, response) {

        const { name, attempts } = request.body;

        let player = await Player.findOne({ name }).catch((err) => { console.log(err) }); //procura um nome igual no banco de dados 

        if (player) {
            console.log(name, attempts);

            player = await Player.updateOne({
                name: name,
                attempts: attempts
            }).catch((err) => { console.log(err) });
        }
        else {
            console.log(name, attempts);

            player = await Player.create({
                name: name,
                attempts: attempts
            }).catch((err) => { console.log(err) });
        }
        return response.json(player);

    }
}