import { BsCartPlusFill } from "react-icons/bs";

function CardBebida({ img, nome, preco }) {
    return (
        <section className="grid grid-cols-3 gap-2 mb-4">
            <img src={img} alt={nome} className="col-span-1 row-span-3 rounded-md" />
            <p className="col-span-2 font-bold ">{nome}</p>
            <p className="col-span-2 flex justify-between text-xl items-center"> {preco} Kz <BsCartPlusFill className="text-2xl" /></p>
        </section>
    )
}

export default CardBebida