 import React from 'react'
 import { useState} from 'react'
 import { nanoid } from 'nanoid'
 
 function App() {
   
  const [tasca, settasca] = useState('')
  const [tasques, settasques] = useState([])
  const [modeEdicio , setModeEdicio ] = useState(false)
  const [id, setId] = useState("")


  const editarTasca = (e) => {

    e.preventDefault();
    console.log(tasca) 

    if (!tasca.trim())
    {
      console.log('Tasca buida');
      return 
    } 

    const arrayEditat = tasques.map ( (v) => {
        // id:id --> id  
      return (
            v.id === id ? { id:id , tasca: tasca  } : v 
      )
      

       
    })


    settasques(arrayEditat)

    setModeEdicio(false)
    settasca("")
    setId("")
  }
  const afegirTasca = (e) => {

    e.preventDefault();
    console.log(tasca) 

    if (!tasca.trim())
    {
      console.log('Tasca buida');
      return 
    }

    settasques([...tasques,
      { id: nanoid() ,tasca:tasca }
    ])

    settasca('')
  }

  const eliminarTasca = (id) => {

      const arrayFiltrat = tasques.filter ( (v)=> {

        return (v.id !== id)
      })
 
      settasques(arrayFiltrat) 

  }

  const editar = (item) => {


    setModeEdicio(true)
    settasca(item.tasca)
    setId(item.id)





 

  }
  
  return (


    <div className="container mt-5">
    <h1 className="text-center">CRUD APP</h1>
    <hr/>
    <div className="row">
  
      <div className="col-8">
        <h4 className="text-center">Lista de Tareas</h4>
        <ul className="list-group">
          {
 
              tasques.map( item => {

                return (


                  <li className="list-group-item" key={ item.id  }>
                  <span className="lead">{ item.tasca}</span>
                  <button 
                    className="btn btn-sm btn-danger float-right mx-2"
                    onClick={ ()=> eliminarTasca(item.id)}
                  >Eliminar</button>
                  <button 
                    className="btn btn-sm btn-warning float-right"
                    onClick={ () => editar(item)}
                  >Editar</button>
                </li>

                )  
        
              })


          }
         
        </ul>
      </div>
  
      <div className="col-4">
        <h4 className="text-center">   
          { modeEdicio ? "Editar Tasca ":"Afegir Tasca"}
        </h4>
        <form onSubmit={ modeEdicio ? editarTasca : afegirTasca }>
          <input 
            type="text" 
            className="form-control mb-2"
            placeholder="Ingrese Tarea"
            onChange={e => settasca(e.target.value)}
            value = { tasca }
          />
          {
            modeEdicio ? (

              <button className="btn btn-warning  btn-block" type="submit">Editar</button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">Agregar</button> 
            )
          }
          
        </form>
      </div>
  
    </div>
  </div>
   )
 }
 
 export default App