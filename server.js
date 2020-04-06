//criar e configurar meu servidor com o express
const express = require("express")
const server = express()


const ideas =[
    {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg" ,
    title: "Curso de Programação",
    category: "Estudo",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eligendi fuga perferendis iste incidunt temporibus doloremque dicta enim sint reiciendis? Doloribus dolores aliquid omnis, assumenda eaque quo itaque doloremque tenetur!",
    url: "https://rocketseat.com.br"

}
,{
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg" ,
    title: "Exercícios",
    category: "Saude",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eligendi fuga perferendis iste incidunt temporibus doloremque dicta enim sint reiciendis? Doloribus dolores aliquid omnis, assumenda eaque quo itaque doloremque tenetur!",
    url: "https://rocketseat.com.br"

}
,{
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg" ,
    title: "Meditação",
    category: "Metalidade",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eligendi fuga perferendis iste incidunt temporibus doloremque dicta enim sint reiciendis? Doloribus dolores aliquid omnis, assumenda eaque quo itaque doloremque tenetur!",
    url: "https://rocketseat.com.br"

},
{
    img: "https://image.flaticon.com/icons/svg/2728/2728995.svg" ,
    title: "Imagem de estudo",
    category: "Imagem de estudo",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eligendi fuga perferendis iste incidunt temporibus doloremque dicta enim sint reiciendis? Doloribus dolores aliquid omnis, assumenda eaque quo itaque doloremque tenetur!",
    url: "https://rocketseat.com.br"

},
]



//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//configurar arquivo estaticos
server.use(express.static("public"))

server.get("/", function(req, res){
    const reversedIdeas = [...ideas].reverse()


    let lastIdeas = []
    for (let idea of  reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }    
    } 
    return res.render("index.html" , {ideas: lastIdeas})
})

server.get("/ideias", function(req, res){
    const reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas: reversedIdeas})
})

server.listen(3000)