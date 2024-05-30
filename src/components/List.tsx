import { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'

interface ConcursoProps{
    data: string,
    id: string
}

export default function List() {

    const [concursos, setConcurso] = useState([])

    useEffect(() => {
        getConcursos()
    }, [])


    useEffect(() => {
        console.log('concursos', concursos)
    }, [concursos])


    function getConcursos() {
        const concursoColletonRef = collection(db, 'todos' )
        getDocs(concursoColletonRef)
            .then(response => {
                console.log('response', response)
                const con = response.docs.map(doc => ({ 
                    data: doc.data(), 
                    id: doc.id,
                }))
                setConcurso(con)
            })
            .catch(error => console.log(error.message))

    }

    return(
        <div>
            <h4>List</h4>
            <button onClick={() => getConcursos()}> Refresh concursos </button>
            <ul>
                {concursos.map(concurso => (
                    <li key={concurso.id}> 
                        {concurso.data.nome}
                    </li>
                ))}
            </ul>
        </div>
    )
}