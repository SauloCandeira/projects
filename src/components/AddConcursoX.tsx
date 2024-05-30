import { addDoc, collection } from "firebase/firestore";
import { useState } from "react"
import { db } from '../lib/init-firebase'


// const defaultFormData = {
//     nome: "",
//     data: "",
// };


export type AddCounterProps = {
    nome: String;
    data: Date
}

export default function AddConcursoX() {

    const [nome, setNome] = useState('')
    const [date, setDate] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // if(formData === null){
        //     return
        // }
        const concursoColletonRef = collection(db, 'todos')
        addDoc(concursoColletonRef, {nome: nome, date: date}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })
        alert('Send')

    }

    return(
        <div>
            <h4> AddConcurso</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="nome"> Nome do Concurso </label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="nome"> Data do Concurso </label>
                <input type='date' id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button type="submit"> Add Concurso</button>
            </form>
        </div>
    )
}