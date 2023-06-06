import './sectionStyle.css'
export const PrimeiraSecao = ()=>{

    /*let acr = 0
    const arrastar = (e) => {
        
        acr += 80
        document.querySelector('.scroll').scrollTo(acr, 0)
        
    }*/
    
    return(

        <section className='firstSection'>

            <div className='scroll'>
                <div className='inter'>
                    <img src='../imagens/reactJs.png' alt='video secao'></img>
                    <img src='../imagens/reactHook.png' alt='video secao'></img>
                    <img src='../imagens/react.png' alt='video secao'></img>
                    <img src='../imagens/reactJs.png' alt='video secao'></img>
                </div>
            </div>

        </section>

    )

}