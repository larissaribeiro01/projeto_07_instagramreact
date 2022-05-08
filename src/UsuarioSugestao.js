export default function UsuarioSugestao (props) {
    return (
        <div class="usuario">
          <img src={props.imagemUsuarioSugestao} />
          <div class="texto">
            <strong>{props.usuario}</strong>
            {props.nomeUsuario}
          </div>
        </div>
    )
}