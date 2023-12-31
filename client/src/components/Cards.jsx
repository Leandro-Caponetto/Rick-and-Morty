import Card from "./Card";
import style from "../styles/Cards.module.css";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Paginate from "./Paginate";

export default function Cards({ onSearch, onClose }) {
  const { characters, numPage } = useSelector((state) => state);

  
  const cantCharPerPage = 8;
  
  let desde = (numPage - 1) * cantCharPerPage; 
  let hasta = numPage * cantCharPerPage; 

  let cantPage = Math.floor(characters.length / cantCharPerPage);

  const viewCharacters = characters?.slice(desde, hasta);
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <div className={style.cards}>
        {/* <h2>Estamos en el home y podemos mostrar y/o ver nuestras cards</h2> */}
        {viewCharacters?.map((char, index) => {
          return <Card key={char.id} char={char} onClose={onClose} />;
        })}
      </div>
      <div>

      </div>
      <Paginate numPage={numPage} cantPage={cantPage} />
    </div>
  );
}
