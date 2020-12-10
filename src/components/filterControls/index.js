import React, { useContext } from "react";
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 
const FilterControls = props => {
 
  const context = useContext(GenresContext);


  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);


  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };
  const handleSortChange = e => {
    var kind = document.getElementById("sortby");
    var myoption=kind.options[kind.selectedIndex].getAttribute('on');
    if(myoption==='0'){
      handleChange(e, "popularity", e.target.value);
    }
    if(myoption==='1'){
      handleChange(e, "popularity", e.target.value);
    }
    else if(myoption==='2'){
      handleChange(e, "vote_count", e.target.value);
    }
    else if(myoption==='3'){
      handleChange(e, "vote_average", e.target.value);
      
    }
    

  }
  const handlesortinChange = e => {
    var kind = document.getElementById("sortin");
    var myoption=kind.options[kind.selectedIndex].getAttribute('on');
    if(myoption==='1'){
      handleChange(e, "ASC", e.target.value);
    }
    else if(myoption==='2'){
      handleChange(e, "DESC", e.target.value);
    }
 
    

  };

  return (
    <div className="row bg-warning">
      <div className="col-md-12">
        <h4>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
          <span>Genre:</span>
          <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>

          <span>Sort By</span>
         
          <select id="sortby" onChange={handleSortChange}>
          {<option on="0" value="Default">Default</option>}
            {<option on="1" value="popularity">Popularity</option>}
            {<option on="2" value="vote_count">Voting People</option>}
            {<option on="3" value="vote_average">Rate</option>}
            
          </select>
          <select id="sortin" onChange={handlesortinChange}>
            {<option on="1" value="false">ASC</option>}
            {<option on="2" value="true">DESC</option>}
            
          </select>
        </h4>
      </div>
    </div>
  );
};

export default FilterControls;