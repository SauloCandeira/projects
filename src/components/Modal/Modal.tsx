import { FormEvent, useState }from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../lib/init-firebase';

const defaultFormData = {
  cliente: "",
  tipo: "",
  data: "",
  prioridade: "",
  funcionarios: "",
  descricao: ""
};


export default function Modal({ visible, onClose }) {


  const [nome, setNome] = useState('')
  const [date, setDate] = useState('')

  const handleOnClose = (e) => {
    if(e.target.id === "container")
    onClose()
  };

  function handleSubmit(e) {
    e.preventDefault()
    const concursoColletonRef = collection(db, 'todos')
    addDoc(concursoColletonRef, {nome: nome, date: date}).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error.message)
    })
    alert('Send')
  }





  if (!visible) return null;

  return (
    <div 
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >

      <div className="bg-white p-5 rounded w-1/5 h-2/5 ">
        
        <h1 className="font-thin text-left text-lg text-gray-700 pb-14 ">
          Criar 
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="relative z-0 w-full mb-6 group">
            <input type="text" id="cliente" onChange={(e) => setNome(e.target.value)}  value={nome} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Escolha o cliente </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input type="date" id="data" onChange={(e) => setDate(e.target.value)} value={date} className="block py-2.5 px-0 w-full text-sm text-gray-400  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_cliente" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Escolha o cliente </label>
          </div>

          <div className="text-right">
            <button className="px-5 py-2 bg-black text-white m-1 rounded">
              Voltar
            </button>
            <button type="submit" className="px-5 py-2 bg-black text-white rounded">
              Abrir 
            </button>
          </div>
        
        </form>


      </div>
    </div>
  );
}