import React, {useContext } from "react";
import "./reviewForm.css";
import useForm from "react-hook-form";
import {MoviesContext} from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";
import { useUser } from 'reactfire' ;

import { Button,Input ,TextArea} from 'semantic-ui-react'

const ReviewForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);
const user=useUser();
  const onSubmit = data => {
    context.addReview(movie, data)
    history.push("/movies/favorites");
    // window.location.replace("./");
  };


  

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
     
      <h3>Add your review</h3>
      <div className="form-group">
        <Input
          type="text"
          className="form-control"
          placeholder={user.displayName}
          defaultValue={movie.review ? movie.review.author : ""}
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>

     


      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <TextArea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={movie.review ? movie.review.content : ""}
          name="content"
          ref={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
      <Button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </Button>
    
    </form>
    
    

  
  );
};

export default withRouter(ReviewForm);