import { BsCartFill } from "react-icons/bs";

function Footer() {
    return (
        <footer className="text-white text-2xl bg-[#FF3131] text-center py-4 fixed bottom-0 left-0 w-full">
            <p className="flex justify-center gap-4"> {1} veja seu carrinho <BsCartFill /></p>
        </footer>
    )
}

export default Footer