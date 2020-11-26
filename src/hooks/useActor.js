import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {getActor} from '../api/tmdb-api'

const useActor = person_id => {
  console.log(person_id)
  const [actor, setActor] = useState(null);
  useEffect(() => {
    getActor(person_id).then(actor => {
      setActor(actor);
     
    });
  }, [person_id]);
  return [actor, setActor];
};

export default useActor