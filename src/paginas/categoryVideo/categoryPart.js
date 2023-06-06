import React, { useState} from 'react';
import '../stylesForm.css'
export const NewCategory = ()=>{

    /* Ações de validação */
    const mudou = (e)=>{
        
        if(e.target.validity.valid === true){

            e.target.parentNode.style.borderBottom = '4px solid #2A7AE4';

        }else{

            e.target.parentNode.style.borderBottom = '4px solid #e53935';

        }

    }

    /* Ações do botão de limpar */
    const limpar = (e)=>{

        e.preventDefault()
        const form = e.target.parentNode.parentNode.parentNode
        const listaTags = [...form.children]
        
        form.reset()
        
        for(var i=0;i < listaTags.length;i++){

            if(i >= 1 && i <= 6){

                listaTags[i].style.border='none'

            }
        }
    }
    
    /* Ação do botão de remover */
    const remove = (e)=>{e.target.parentNode.parentNode.remove()}

    /* Ação do botão de editar */
    const [nome, mudarNome] = useState('')

    const [texto, mudarTexto] = useState('')

    /* Pegando tabela */

    const [valorN, mudarValorN] = useState('')
    const [valorT, mudarValorT] = useState('')

    const editar = (e)=>{

        mudarNome(e.target.parentNode.parentNode.children[0].innerHTML)
        document.querySelector('.name').value = nome

        mudarTexto(e.target.parentNode.parentNode.children[1].innerHTML)
        document.querySelector('.text').value = texto

        mudarValorN(e.target.parentNode.parentNode.children[0])
        mudarValorT(e.target.parentNode.parentNode.children[1])

    }

    const salvar = (e)=>{

        e.preventDefault()

        if(document.querySelector('.name').value !== '' && document.querySelector('.text').value !== ''){

            valorN.innerHTML = document.querySelector('.name').value
            valorT.innerHTML = document.querySelector('.text').value

        }
    
    }
    
    return(
    
        <>
            <form>

                <h1>Nova categoria</h1>
                
                <div className='styleBox'>

                    <label>Nome</label>
                    <input type='text' className='name' pattern='^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$' required onChange={mudou}/>

                </div>

                <textarea className='text' placeholder='Descrição' required></textarea>

                <div className='styleBox'>

                    <label>Cor</label>
                    <input type='color' value='#FFBA05'></input>
                                            
                </div>

                <div className='styleBox'>

                    <label>Código de segurança</label>
                    <input type='text' pattern='^[0-9]+$' required onChange={mudou}/>
                                            
                </div>

                <div className='alinButton'>

                    <div>

                        <button className='bluebutton' onClick={salvar}>Salvar</button>
                        <button className='grayButton' onClick={limpar}>Limpar</button>

                    </div>

                </div>

            </form>

            <table className='table'>
                <thead>
                    <tr>

                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Editar</th>
                        <th>Remover</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Back End</td>
                        <td>Todos os vídeo que estou usando para estudar Back End </td>
                        <td><button onClick={editar}>Editar</button></td>
                        <td><button onClick={remove}>Remover</button></td>

                    </tr>
                    <tr>

                        <td>Mobile</td>
                        <td>Conteúdo que venho estudando sobre React Native e Flutter</td>
                        <td><button onClick={editar}>Editar</button></td>
                        <td><button onClick={remove}>Remover</button></td>

                    </tr>
                    <tr>

                        <td>Infraestrutura</td>
                        <td>Tudo que estou aprendendo sobre Docker e muito mais</td>
                        <td><button onClick={editar}>Editar</button></td>
                        <td><button onClick={remove}>Remover</button></td>

                    </tr>
                    <tr>

                        <td>Data Science</td>
                        <td>Coisas de R e Python que venho aprendendo</td>
                        <td><button onClick={editar}>Editar</button></td>
                        <td><button onClick={remove}>Remover</button></td>

                    </tr>
                    <tr>

                        <td>Design & UX</td>
                        <td>Ferramentas e técnicas que estudo sobre UX e Design</td>
                        <td><button onClick={editar}>Editar</button></td>
                        <td><button onClick={remove}>Remover</button></td>

                    </tr>
                    <tr>

                        <td>Marketing Digital</td>
                        <td>A forma de vender a monetizar minhas ideias</td>
                        <td><button onClick={editar}>Editar</button></td>
                        <td><button onClick={remove}>Remover</button></td>

                    </tr>
                    <tr>

                        <td>Inovação & Gestão</td>
                        <td>Como manter o time feliz e muito mais</td>
                        <td><button onClick={editar}>Editar</button></td>
                        <td><button onClick={remove}>Remover</button></td>

                    </tr>
                </tbody>

            </table>
        </>

    )


}