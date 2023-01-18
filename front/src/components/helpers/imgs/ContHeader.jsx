import americanino from '../imgs/marcas/americanino.png';
import americanEagle from '../imgs/marcas/american-eagle.png';
import chevignon from '../imgs/marcas/chevignon.png';
import esprit from '../imgs/marcas/esprit.png';
import nafnaf from '../imgs/marcas/naf-naf.png';
import rifle from '../imgs/marcas/rifle.png';

const ContHeader = () => {
    return (
        <main className='contHeader'>
            <section className='sectionImgsLinea'>
                <img src={americanino} alt="" />
                <img src={americanEagle} alt="" />
                <img src={chevignon} alt="" />
            </section>
            <h1>Grupo Uribe</h1>
            <section className='sectionImgsLinea'>
                <img src={esprit} alt="" />
                <img src={nafnaf} alt="" />
                <img src={rifle} alt="" />
            </section>
        </main>
    )
}

export default ContHeader;