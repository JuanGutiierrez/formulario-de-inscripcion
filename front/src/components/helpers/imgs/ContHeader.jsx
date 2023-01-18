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
                <a target={'_blank'} href="https://www.americanino.com/"> <img src={americanino} alt="" /> </a>
                <a target={'_blank'} href="https://www.ae.com.co/"> <img src={americanEagle} alt="" /> </a>
                <a target={'_blank'} href="https://www.chevignon.com.co/"> <img src={chevignon} alt="" /> </a>
            </section>
            <a target={'_blank'} href="https://www.johnuribe.com.co/"> <h1 className='title'>Grupo Uribe</h1> </a>
            <section className='sectionImgsLinea'>
                <a target={'_blank'} href="https://www.esprit.com.co/"> <img src={esprit} alt="" /> </a>
                <a target={'_blank'} href="https://www.nafnaf.com.co/"> <img src={nafnaf} alt="" /> </a>
                <a target={'_blank'} href="https://www.rifle.com.co/"> <img src={rifle} alt="" /> </a>
            </section>
        </main>
    )
}

export default ContHeader;