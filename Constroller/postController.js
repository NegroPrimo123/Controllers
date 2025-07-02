class PostController{

    async post(req,res){
        try{
            const {username, password, email, login, idea, work, password_again, hard_password, second_password, username_two_and_two, what_time_is_it_now, your_eye_color, name_your_dog, name_your_cat, your_favorite_species_of_Dinosaurs, your_favorite_number, your_favorite_name, your_favorite_color, your_favorite_developer_language, your_favorite_computer_game, your_favorite_animal, your_hobby} = req.body

            if (!username || !password || !email || !login || !idea || !work || !password_again || !hard_password || !second_password || !username_two_and_two || !what_time_is_it_now || !your_eye_color || !name_your_dog || !name_your_cat || !your_favorite_species_of_Dinosaurs || !your_favorite_number || !your_favorite_name || !your_favorite_color || !your_favorite_developer_language || !your_favorite_computer_game || !your_favorite_animal || !your_hobby){
                res.send("Поля не должны быть пустыми")
            }

            if (typeof username !== 'string' || typeof login !== 'string', typeof idea !== 'string',typeof work !== 'string' || typeof username_two_and_two !== 'string' || typeof your_eye_color !== 'string' || typeof name_your_dog !== 'string' || typeof name_your_cat !== 'string' || typeof your_favorite_species_of_Dinosaurs !== 'string' || typeof your_favorite_number !== 'int'|| typeof your_favorite_name !== 'string' || typeof your_favorite_color !== 'string' || typeof your_favorite_computer_game !== 'string' || typeof your_favorite_animal !== 'string' || typeof your_hobby !== 'string'){
                res.send('Вводите корректные значения')
            }
            const result = [username, password, email, login, idea, work, password_again, hard_password, second_password, username_two_and_two, what_time_is_it_now, your_eye_color, name_your_dog, name_your_cat, your_favorite_species_of_Dinosaurs, your_favorite_number, your_favorite_name, your_favorite_color, your_favorite_developer_language, your_favorite_computer_game, your_favorite_animal, your_hobby]
            res.send(result)
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = new PostController()