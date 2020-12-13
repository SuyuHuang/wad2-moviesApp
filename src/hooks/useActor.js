import { useEffect, useState } from "react";
import {getActor} from '../api/tmdb-api'

const useActor = person_id => {

  const [actor, setActor] = useState(null);
  useEffect(() => {
    getActor(person_id).then(actor => {
      setActor(actor);
     
    });
  }, [person_id]);
  return [actor, setActor];
};

export default useActor