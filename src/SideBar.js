import Sugestoes from "./Sugestoes";
import UsuarioSugestao from "./UsuarioSugestao";


export default function SideBar () {

    return (
        <div class="sidebar">
            <UsuarioSugestao imagemUsuarioSugestao="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg" usuario="catanacomics" nomeUsuario="Catana" />
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
            
    )
}