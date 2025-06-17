import { BsCartPlusFill } from "react-icons/bs";

function CardHamburguer({ img, nome, descricao, preco }) {
    return (
        <section className="grid grid-cols-3 gap-1 py-4 justify-center">
            <img src={img} alt={nome} className="col-span-1 row-span-4 rounded-md" />

            <h3 className="col-span-2 font-bold pl-2 md:text-2xl">{nome}</h3>
            <p className="col-span-2 text-gray-700 pl-2">{descricao}</p>
            <p className="col-span-2 flex justify-between items-center pl-2 md:text-2xl"><span className="font-bold text-xl md:text-2xl">{preco} Kz</span> <BsCartPlusFill className="text-2xl md:text-4xl" /></p>
        </section>
    )
}

export default CardHamburguer