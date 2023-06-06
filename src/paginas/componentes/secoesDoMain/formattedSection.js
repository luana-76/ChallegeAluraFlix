export const SecaoFormatada = ({secao, formacao})=>{

    return(

            (secao === 'Data Science')?

            <section className='two'>

                <div>

                    <div className='sectionTitle'>
                        <h3>{secao}</h3>
                    </div>
                    <span>{formacao}</span>

                </div>
                <div className='scroll'>
                    <div className='inter'>
                        <img src='../imagens/ai.png' alt='video secao'></img>
                        <img src='../imagens/uniDateS.png' alt='video secao'></img>
                        <img src='../imagens/machineL.png' alt='video secao'></img>
                        <img src='../imagens/ai.png' alt='video secao'></img>
                    </div>
                </div>

            </section>
            :
            <section className='tree'>

                <div>

                    <div className='sectionTitle'>
                        <h3>{secao}</h3>
                    </div>
                    <span>{formacao}</span>

                </div>
                <div className='scroll'>
                    <div className='inter'>
                        <img src='../imagens/devIos.png' alt='video secao'></img>
                        <img src='../imagens/swiftui.png' alt='video secao'></img>
                        <img src='../imagens/jetpackCompose.png' alt='video secao'></img>
                        <img src='../imagens/devIos.png' alt='video secao'></img>
                    </div>
                </div>

            </section>

    )

}