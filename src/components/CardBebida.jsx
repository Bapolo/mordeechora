import { BsCartPlusFill } from "react-icons/bs";

function CardBebida({ img, nome, preco }) {
    return (
        <section className="grid grid-cols-3 gap-2 items-center mb-4">
            <img src={img} alt={nome} className="col-span-1 row-span-3 rounded-md" />
            <p className="col-span-2 font-bold md:text-2xl">{nome}</p>
            <p className="col-span-2 flex justify-between text-xl items-center md:text-2xl"> {preco} Kz <BsCartPlusFill className="text-2xl md:text-4xl" /></p>
        </section>
    )
}

export default CardBebida