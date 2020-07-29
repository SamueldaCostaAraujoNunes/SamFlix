import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '', 
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,  
        })
    }
    function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value
        );
      }

    return ( 
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDosEvento){
                infosDosEvento.preventDefault();
                console.log('Voce tentou mandar o log!')
                setCategorias([
                    ...categorias, 
                    values
                ]);

                setValues(valoresIniciais)
            }}>
                <FormField
                    label={"Nome da Categoria"}
                    typeTag={'input'}
                    type = {'text'}
                    name = {'nome'}
                    value = {values.nome}
                    onChange={handleChange}
                />
                <FormField
                    label= {'Descrição'}
                    typeTag={'textarea'}
                    type = {'text'}
                    name = {'descricao'}
                    value = {values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label= {'Cor'}
                    typeTag={'input'}
                    type = {'color'}
                    name = {'cor'}
                    value = {values.cor}
                    onChange={handleChange}
                />
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice)=>{
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    );
                    })}
            </ul>
            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;