import Feed from "./Feed";
import Stories from "./Stories";


export default function ContainerPrincipal () {
    return (
        <div class="container">
            <div class="container-principal">
                <Stories />
                <Feed />
            </div>
        </div>
    )
}