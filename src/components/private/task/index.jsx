import { useState } from "react";

const Tasks1 = () => {
  const data = [ 
    { id: 1, personaje: "Naruto", anime: "Naruto" },
    { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
    { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
  ];

  const [table,setTable] = useState(data);
  
  //return table.map((table) => console.log(table));
  return <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Personaje</th>
          <th>Anime</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {
          table.map((table) => (
            <tr key={table.id}>
              <td>{table.id}</td>
              <td>{table.personaje}</td>
              <td>{table.anime}</td>
            </tr>
          ))
        }
      
        
          
        
        
        
      </tbody>
    </table>;

}

export default Tasks1;