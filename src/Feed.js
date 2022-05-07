import Post from "./Post";

export default function Feed () {
    const infoPost = [ {
        imagemPerfil: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        nome: "Narutin",
        imagemPost: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg",
        imagemLiked: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
        },
        {
        imagemPerfil: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        nome: "Narutin",
        imagemPost: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/02/legiao_cAB5VJkQYOFz.jpg.jpeg",
        imagemLiked: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
        }]

    return (
        <div class="feed">
            {infoPost.map(dado=> <Post imagemPerfil={dado.imagemPerfil} nome={dado.nome} imagemPost={dado.imagemPost} imagemLiked={dado.imagemLiked}/>)}
        </div>
    )
}




