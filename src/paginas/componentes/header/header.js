import { useState, useEffect} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Cabecalho = ()=>{

    const [value, change] = useState('1');

    useEffect(() => {
        if(window.location.pathname === '/newVideo' || window.location.pathname === '/newCategory'){

            change('0')
    
        }
      }, [])
      
    
    /* Evento para o botão não ficar visível */
    const buttonNotVisible = ()=>{change('0')}
    /* Evento para o botão ficar visível */
    const visibleButton = ()=>{change('1')}
    
    
    return(

        <header>
        
            <div>

                <Link to='/' onClick={visibleButton}>

                    <img src='../imagens/logoFlix.png' alt='logo'/>

                </Link>

            </div>
            <div className='buttonBox'>

                {value === '1'?(<Link to='/newVideo' onClick={buttonNotVisible}>

                        <button>Novo vídeo</button>

                    </Link>):null}

            </div>
            
        </header>

    )

}