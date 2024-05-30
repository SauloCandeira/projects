import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from '../lib/init-firebase'


const defaultFormData = {
    nome: "",
    data: "",
};


export default function AddConcurso() {

    const [formData, setFormData] = useState(defaultFormData);
    const { nome, data } = formData;

    // const [nome, setNome] = useState('')
    // const [data, setData] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
    }


    function handleSubmit(e) {
        e.preventDefault()
        if(formData === null){
            return
        }
        const concursoColletonRef = collection(db, 'todos')
        addDoc(concursoColletonRef, {formData}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })
        alert(formData)

    }


    return(
        <div>
            <h4> AddConcurso</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome"> Nome do Concurso </label>
                <input type="text" id="nome" value={nome} onChange={onChange} />
                <label htmlFor="nome"> Data do Concurso </label>
                <input type='date' id="data" value={data} onChange={onChange} />
                <button type="submit"> Add Concurso</button>
            </form>
        </div>
    )
}