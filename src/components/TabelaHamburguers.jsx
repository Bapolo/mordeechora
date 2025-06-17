import CardHamburguer from "./CardHamburguer"
import hamburguer1 from "../assets/hamb-1.png"
import hamburguer2 from "../assets/hamb-2.png"
import hamburguer3 from "../assets/hamb-3.png"
import hamburguer4 from "../assets/hamb-4.png"
import hamburguer5 from "../assets/hamb-5.png"
import hamburguer6 from "../assets/hamb-6.png"
import hamburguer7 from "../assets/hamb-7.png"
import hamburguer8 from "../assets/hamb-8.png"

function TabelaHamburguers() {
    return (
        <div className="md:max-w-300 md:m-auto md:mt-6">

            <h2 className="text-2xl font-bold  mb-4 md:text-4xl">Conheça nosso menu</h2>

            <section className="md:grid grid-cols-2 md:gap-6">
                <CardHamburguer img={hamburguer1} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="2 000" />

                <CardHamburguer img={hamburguer2} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="2 500" />

                <CardHamburguer img={hamburguer3} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="3 000" />

                <CardHamburguer img={hamburguer4} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="4 000" />

                <CardHamburguer img={hamburguer5} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="2 000" />

                <CardHamburguer img={hamburguer6} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="5 000" />

                <CardHamburguer img={hamburguer7} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="5 000" />

                <CardHamburguer img={hamburguer8} nome="Cheese Burger Duplo" descricao="Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa" preco="3 500" />
            </section>
        </ div>
    )
}

export default TabelaHamburguers