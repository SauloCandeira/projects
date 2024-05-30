import { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'


export default function ListData() {

    const [concursos, setConcurso] = useState([])

    useEffect(() => {
        getConcursos()
    }, [])


    useEffect(() => {
        console.log(concursos)
    }, [concursos])


    function getConcursos() {
        const concursoColletonRef = collection(db, 'todos' )
        getDocs(concursoColletonRef)
            .then(response => {
                console.log('teste', response)
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
              <button onClick={() => getConcursos()}> Refresh concursos </button>
            <table>
                <thead>
                    <tr>
                        <th> NOME </th>
                        <th> DATA </th>
                    </tr>
                </thead>
                <tbody>
                    {concursos.map(concurso => (
                        <tr key={concurso.id}>
                            <td>
                                {concurso.data.nome}
                            </td>
                            <td>
                                {concurso.data.date}
                            </td>
                        </tr>
                     ))}
                </tbody>
            </table>
        </div>
    )
}