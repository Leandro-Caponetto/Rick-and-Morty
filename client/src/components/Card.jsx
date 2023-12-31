/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import style from "../styles/Card.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import imgen from '../assets/images/pngwing.com.png'

function Card({ char, onClose, myFavorites, removeFav, addFav, inFav }) {
  
  const [isFav, setIsFav] = useState(false);

  
  const { id, name, gender, species, origin, image, status } = char;
  const handleFavorite = function () {
    if (isFav) {
      setIsFav(false);
      
      removeFav(id);
    } else {
      setIsFav(true);
      
      addFav(char);
    }
  };
  

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);



  return (
    <div className={style.card}>
      <div className={style.close}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {inFav ? null : <button onClick={() => onClose(id)} >X</button>}
      </div>
      <div className={style.info}>
        <Link className={style.link} to={`/detail/${id}`}>
          <div className={style.name}>

          <img src={image} alt={name} />
          <h2>{name.slice(0, 16)}</h2>
          {/* <h2>{status}</h2> */}
          <h2>{species}</h2>
          {/* <h2>{gender}</h2>
         <h2>{origin?.name}</h2> */}
          </div>
        </Link>
      </div>
      <img src={imgen} alt="" className={style.logo}/>
      <h6>by Leandro Caponetto</h6>
      <h6>Id: {id}</h6>
    </div>
  );
}
// namePepe: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.

function mapState(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
function mapDispatch(dispatch) {
  return {
    addFav: function (char) {
      dispatch(addFav(char));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapState, mapDispatch)(Card);

//* Redux -> invoca mapState(state) <- le pasa el state y crea props en Card
//* con lo que retorna el mapState

// export default connect(mapState, {addFav,removeFav})(Card)
