import Countdown2 from "../components/Countdown/Countdown2"
import Sidebar from "../components/Sidebar/Sidebar"
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../lib/init-firebase'
import Modal from "../components/Modal/Modal";

export function Roadmap() {

    const [showModal, setShowModal] = useState(false)
    const [dates, setDates] = useState([])
    const handleOnClose = () => setShowModal(false)

    useEffect(() => {
        getDates()
    }, [])

    function getDates() {
        const concursoColletonRef = collection(db, 'todos' )
        getDocs(concursoColletonRef)
            .then(response => {
                const con = response.docs.map(doc => ({ 
                    data: doc.data(), 
                    id: doc.id,
                }))
                setDates(con)
            })
            .catch(error => console.log(error.message))
    }


    console.log(dates)
    dates.map((item, index) => {
 
        // console.log('item', item.data.date) 
    })


    return (
        <>

            <Sidebar />

            <div style={{ width: '800px', alignItems: 'center', padding: '30px', marginTop: '20px', backgroundColor: '#ada8a8', marginLeft: '20rem'}}>
                {/* <button className="px-5 py-2 bg-black text-white rounded"> Criar </button> */}
                <button style={{ padding:'10px 20px 10px 20px', borderRadius:'5px', margin: '10px', backgroundColor: '#000'}} onClick={() => setShowModal(true)}> Criar </button>
                <button style={{ padding:'10px 20px 10px 20px', borderRadius:'5px', margin: '10px', backgroundColor: '#000'}} onClick={() => getDates()}> Refresh </button>
            </div>

            <Modal onClose={handleOnClose} visible={showModal}/>

            {dates.map((item, index) => {
                return (   

                    <div key={index} style={{ width: '800px', alignItems: 'center', padding: '30px', marginTop: '20px', backgroundColor: '#ada8a8', marginLeft: '20rem'}}>
                        <Countdown2  title={item.data.nome} data={item.data.date} />
                    </div>
                )     
            })}

        </>
    )
}