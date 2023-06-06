import '../stylesForm.css'
import { Link } from 'react-router-dom'

export const NewVideo= ()=>{

    const mudou = (e)=>{
        
        if(e.target.validity.valid === true){

            e.target.parentNode.style.borderBottom = '4px solid #2A7AE4';

        }else{

            e.target.parentNode.style.borderBottom = '4px solid #e53935';

        }
    }

    const limpar = (e)=>{

        e.preventDefault()
        const form = e.target.parentNode.parentNode.parentNode
        const listaTags = [...form.children]

        form.reset()
        
        for(var i=0;i < listaTags.length;i++){

            if(i >= 1 && i <= 6){

                listaTags[i].style.border = 'none'

            }
        }
    }
    
    return(

        <form>

            <h1>Novo vídeo</h1>
            
            <div className='styleBox'>

                <label>Título</label>
                <input type='text' pattern='^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$' required onChange={mudou}/>

            </div>

            <div className='styleBox'>

                <label>Link do vídeo</label>
                <input type='text' required onChange={mudou}/>

            </div>

            <div className='styleBox'>

                <label>Link da imagem do vídeo</label>
                <input type='text' required onChange={mudou}/>
                                        
            </div>

            <div className='styleBox'>

                <input type='text' pattern='^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$' required onChange={mudou} placeholder='Escolha uma categoria'/>
                                        
            </div>

            <textarea placeholder='Descrição'></textarea>

            <div className='styleBox'>

                <label>Código de segurança</label>
                <input pattern='^[0-9]+$' required onChange={mudou} type='text'/>
                                        
            </div>

            <div className='alinButton'>

                <div>

                    <button className='bluebutton'>Salvar</button>
                    <button className='grayButton' onClick={limpar}>Limpar</button>

                </div>

                <div>

                    <Link to='/newCategory'>

                        <button className='bluebutton esc'>Nova categoria</button>

                    </Link>

                </div>

            </div>

        </form>
    )
}