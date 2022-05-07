export default function Stories () {
    const perfilStories=[ {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        },
        {
        classe:"profile",
        imagem: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg",
        }]
    return (
        <div class="storys">
            {perfilStories.map(dado=> <div><img class={dado.classe} src={dado.imagem} /></div>)}
            <ion-icon name="chevron-forward-sharp"></ion-icon>
        </div>
    )
}