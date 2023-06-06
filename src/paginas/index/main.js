import { PrimeiraSecao } from '../componentes/secoesDoMain/firstSections'
import { SecaoFormatada } from '../componentes/secoesDoMain/formattedSection'
import './main.css'

export const ParteSuperior = ()=>{

    return(
    
        <main>
            
            <div className='background'>
                
                <div className='mainAlignment'>

                    <div>

                        <div className='h1Box'>
                            <h1>Front-End</h1>
                        </div>
                        <h2>SEO com React</h2>
                        <p>Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se<br/>
                        engajar na resolução de um problema para poder aplicar todo o conhecimento<br/>
                        adquirido na Formação React.</p>

                    </div>

                    <img src='../imagens/imgPrincipal.png' alt='video principal'/>

                </div>
            </div>

            <div>

                <PrimeiraSecao/>

                <SecaoFormatada

                    secao='Data Science' 
                    formacao='Formação Data Science na Alura'
                    className='teste'

                />
                <SecaoFormatada

                    secao='Mobile'
                    formacao='Formação Mobile da Alura'
                    
                />

            </div>
                          
        </main>

    )

}