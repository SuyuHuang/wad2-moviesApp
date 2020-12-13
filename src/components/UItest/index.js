


import React from 'react'
import { Input } from 'semantic-ui-react'
import {RateMovies} from '../../api/tmdb-api'






const DividerExampleVerticalForm = () => (
  
<form onSubmit={RateMovies}>
        <label>
          Name:
          <Input type="text" id="value" name="name" />
        </label>
        <Input type="submit" value="Submit" />
      </form>
)

export default DividerExampleVerticalForm
