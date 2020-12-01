import React from "react";
import { Link } from "react-router-dom";
import { useUser } from 'reactfire' ;
const ReviewButton = ({ movie }) => {
  const user=useUser();
  if(user===null){
    alert("Please Log in your account first")
    window.location.replace("./");
  }
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Write a Review
    </Link>
  );
};

export default ReviewButton;
