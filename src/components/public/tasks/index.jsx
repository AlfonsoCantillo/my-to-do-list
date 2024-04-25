import logo from "../../../assets/img/logo.png";

const Tasks = () =>{
  
  const pressClick = () =>{
    console.log("hola mundo Feliz");
  }

  return <main className="container">
    <div>
      <header>
        <img className="logo" src={logo} alt="Logo"/>
        <h1 className="tittle">My To Do List</h1>
      </header>
      <section>
        <form className="form">
          <input className="input" type="text" placeholder="Agregar tarea"/>
          <button className="button-add" type="button" onClick={pressClick}>Adicionar</button>
        </form>
      </section>
    </div>    
  </main>;
}

export default Tasks;