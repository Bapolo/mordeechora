import bebida1 from "../assets/refri-1.png"
import bebida2 from "../assets/refri-2.png"
import CardBebida from "./CardBebida"

function TabelaBabidas() {
    return (
        <div className="py-4 md:max-w-300 md:m-auto md:mt-8">

            <h3 className="text-2xl font-bold mb-4 md:text-4xl">Bebidas</h3>

            <section className="md:grid grid-cols-2 md:gap-6">


                <CardBebida img={bebida1} nome="Coca-cola" preco="500" />

                <CardBebida img={bebida2} nome="Guarná" preco="500" />
            </section>
        </div>
    )
}

export default TabelaBabidas