import Sugestao from "./Sugestao";

export default function Sugestoes () {
    const listaSugestao=[{
        imagemSugestao: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        usuarioSugestao: "bad.vibes.memes",
        razao: "Segue você"
    },{
        imagemSugestao: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        usuarioSugestao: "chibirdart",
        razao: "Segue você"
    },{
        imagemSugestao: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        usuarioSugestao: "razoesparaacreditar",
        razao: "Novo no Instagram"
    },{
        imagemSugestao: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        usuarioSugestao: "adorable_animals",
        razao: "Segue você"
    },{
        imagemSugestao: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        usuarioSugestao: "smallcutecats",
        razao: "Segue você"
    }];
    return (
        <div class="sugestoes">
                <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
                </div>
                {listaSugestao.map(dado=> <Sugestao imagemSugestao={dado.imagemSugestao} usuarioSugestao={dado.usuarioSugestao} razao={dado.razao}/>)};     
        </div>
    )
}