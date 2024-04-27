import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const Tareas = () =>{
  /*for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
  }*/
  const [tarea,setTarea] = useState("");
  const [table,setTable] = useState(convertirObjetoArray(localStorage));

  
  const adicionarTarea = () =>{    
    if (tarea == ""){  
      alert("El campo agregar tarea es requerido por el sistema.");
      convertirObjetoArray(localStorage);
    }else{      
      let idTarea = localStorage.length + 1;
      localStorage.setItem(idTarea,JSON.stringify({"id": idTarea,"contenido": tarea}));
      setTable(convertirObjetoArray(localStorage));
      setTarea("");
    }
  }

  const eliminarTarea = (idTarea) =>{ 
    let opcion = window.confirm("¿Estás Seguro que deseas Eliminar la tarea seleccionada?");
    if (opcion == true) { 
      localStorage.removeItem(idTarea);
      setTable(convertirObjetoArray(localStorage));
    }
  }

  function convertirObjetoArray(objeto){    
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
          <button className="button-add" type="button" onClick={adicionarTarea}>Adicionar</button>
        </form>
          <table className="table m-10">                       
            <tbody>
            {
              table.map((table) => (
                <tr key={table.id}>                  
                  <td>{table.contenido}</td>
                  <td><Button color="danger" onClick={()=>eliminarTarea(table.id)}>Eliminar</Button></td>
                </tr>
              ))
            }
            </tbody>
          </table>
       
      </section>
    </div>    
  </main>;
}

export default Tareas;