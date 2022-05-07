export default function Post (props) {
    return (
        <div class="post">
                    <div class="post-title">
                        <div class="post-profile">
                            <img class="profile" src={props.imagemPerfil} />
                            <h4>{props.nome}</h4>
                        </div>
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                    <div class="post-media">
                        <img src={props.imagemPost} alt="naruto"/>
                    </div>
                    <div class="post-actions">
                        <div class="left-actions">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="save-actions">
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="post-liked">
                        <img class="profile" src={props.imagemLiked} alt=""/>
                        <span>Curtido por <strong>driven</strong> e <strong>outras 100 pessoas</strong></span>
                    </div>
    
                </div>
    )
}
