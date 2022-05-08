import Feed from "./Feed";
import Stories from "./Stories";
import SideBar from "./SideBar";



export default function ContainerPrincipal () {
    return (
        <div class="container">
            <div class="container-principal">
                <Stories />
                <Feed />
            </div>
            <div class="container-secundario">
                <SideBar />
            </div>
        </div>
    )
}