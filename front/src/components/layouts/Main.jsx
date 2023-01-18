import Footer from "../helpers/Footer";
import FormularioClientes from "../helpers/forms/FormularioClientes";
import Header from "../helpers/Header";

const Main = () => {
    return (
        <main className="contMain">
            <Header />
                <section className="contForm">
                    <FormularioClientes />
                </section>    
            <Footer />
        </main >
    )
}

export default Main;