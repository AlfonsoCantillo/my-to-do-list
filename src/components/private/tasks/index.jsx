import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdDelete } from "react-icons/md";

const Tareas = () =>{
  const [tarea,setTarea] = useState("");
  const [table,setTable] = useState(leerInformacion(localStorage));
  
  const adicionarTarea = () =>{    
    if (tarea == ""){  
      alert("El campo agregar tarea es requerido por el sistema.");
      leerInformacion(localStorage);
    }else{      
      let opcion = window.confirm("¿Estás Seguro que deseas Adicionar la tarea descrita?");
      if (opcion == true) { 
        let idTarea = localStorage.length + 1;
        localStorage.setItem(idTarea,JSON.stringify({"id": idTarea,"contenido": tarea}));
        setTable(leerInformacion(localStorage));
        setTarea("");
      }
    }
  }

  const eliminarTarea = (idTarea) =>{ 
    let opcion = window.confirm("¿Estás Seguro que deseas Eliminar la tarea seleccionada?");
    if (opcion == true) { 
      localStorage.removeItem(idTarea);
      setTable(leerInformacion(localStorage));
    }
  }

  function leerInformacion(objeto){    
    let array = [];
    for(let i=0; i<objeto.length; i++) {
      let key = objeto.key(i);      
      array[i] = JSON.parse(objeto.getItem(key));
    }
    return array;
  }
    
  return <main className="container">    
    <div>
      <header>
        <img className="logo" src={logo} alt="Logo"/>
        <h1 className="tittle">My To Do List</h1>
      </header>
      <section>
        <form className="form">
          <input 
            onChange={(event) => setTarea(event.target.value)}
            className="input" 
            type="text" 
            placeholder="Agregar tarea"
            value={tarea}
          />
          <button className="btn btn-primary" type="button" onClick={adicionarTarea}>Adicionar</button>
        </form>
        <div className="m-2">
        {
          table.map((table) => (
            <div className="row border border-1 bg-light ml-2 mb-3 p-2 rounded-2 text-black-80" key={table.id}>
              <div className="col-9">
                {table.contenido}
              </div>
              <div className="col-3 text-center"> 
                <button className="btn btn-danger" onClick={()=>eliminarTarea(table.id)}>
                  <MdDelete style={{fontSize: '30px'}}/>
                </button>  
              </div>   
            </div>           
          ))
        }
        </div>   
      </section>
    </div>    
  </main>;
}

export default Tareas;