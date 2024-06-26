import style from './/Header.module.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function Header(){

    return(

    <>
         <header>
            <nav>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <div className={style.menuToggle} id={style.mobileMenu}>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                    <span className={style.bar}></span>
                </div>
                <ul className={style.navLinks}>
                    <div id={style.navOpc}>
                       
                       <Link to = {'/TelaInicial'}>
                             <li>Início</li>
                       </Link>
                       
                       <Link to = {'/SelecaoPacotes'}>
                            <li>Vídeos</li> 
                       </Link>
                       
                       <Link to = {'/Exercicio'}>
                       <li>Exercícios</li> 
                       </Link>

                        <Link to = {'/Profissionais'}>
                        <li>Profissionais</li> 
                        </Link>

                        <Link to = {'/Comunidade'}>
                        <li>Comunidade</li> 
                        </Link>
                       
                       <Link>
                       <li>Sobre</li> 
                       </Link>
                       
                    </div>
                    
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header