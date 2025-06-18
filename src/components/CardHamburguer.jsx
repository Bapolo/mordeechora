import { BsCartPlusFill } from "react-icons/bs";

function CardHamburguer({ img, nome, descricao, preco }) {
    return (
        <section className="flex py-4">
            <img src={img} alt={nome} className="w-28 h-28 rounded-md" />

            <div>
                <h3 className=" font-bold pl-2 md:text-2xl">{nome}</h3>
                <p className=" text-gray-700 pl-2">{descricao}</p>
                <p className=" flex items-center gap-5 pl-2 "><span className="font-bold text-xl">{preco} Kz</span> <button className="bg-[#54CC0A] hover:bg-[#5a8341] text-white cursor-pointer px-4 text-center rounded-md transition-all">adicionar</button></p>
            </div>
        </section>
    )
}

export default CardHamburguer