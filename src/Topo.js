import LogoContainer from "./Logo-container";
import BotoesTopo from "./Botoes-topo";
import Pesquisar from "./Pesquisar";


export default function Topo () {
    return (
        <div class="topo">
            <div class="topo-container">
                <LogoContainer />
                <Pesquisar />
                <BotoesTopo />
            </div>
        </div>

    )
}