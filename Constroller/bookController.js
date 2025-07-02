class BookController{

    async createBook(req,res){
        try{
            const {namebook, author, genre} = req.body

            if(!namebook || !author || !genre){
                res.send('namebook, author, genre являются обязательными полями для заполнения!')
            }

            if(typeof namebook !== 'string' || typeof author !== 'string' || typeof genre !== 'string'){
                res.send('Поля должны быть стриг')
            }

            const trimNamebook = namebook.trim()
            const trimAuthor = author.trim()
            const trimGenre = genre.trim()

            if (!trimNamebook || !trimAuthor || !trimGenre){
                res.send("Поля не могут состоять из пробелов")
            }
            const result = [namebook, author, genre]
            res.send(result)
        }catch(error){
            console.log(error)
        }        
    }

    async getBook(req,res){

        try{
            const result = ["Books"]
            res.send(result)
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = new BookController()