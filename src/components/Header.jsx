import imgHeader from "../assets/hamb-1.png"
import background from "../assets/bg.png"

function Header() {
    return (
        <header 
            className="text-white flex flex-col gap-2 p-4 items-center md:py-6"
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>

            <img className="w-40 rounded-full m-auto" src={imgHeader} alt="Hamburguer delicioso" />

            <h1 className="text-3xl font-bold">Morde & Chora</h1>

            <p className="text-center">Rua sacadura cabral, próximo a nossa Senhora do Poplo</p>

            <p className="bg-[#54CC0A] py-2 px-4 text-center rounded-md">abertos todos os dias 24/7</p>
        </header>
    )
}

export default Header