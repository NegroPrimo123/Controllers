class idkController{

    async Negr (req,res){
        try{
            const {name, password} = req.body
            
            if (!name || !password){
                res.send("Имя и пароль являются обязательными!")
            }

            if (typeof name !== 'string'){
                res.send("Имя должено быть строкой!")
            }

            if (password.lenght < 6){
                res.send('Пароль должен быть больше 6 символов')
            }

            const result = [name, password]
            res.json(result)
        }catch(error){
            console.log(error)
        }
        
    }
}

module.exports = new idkController()