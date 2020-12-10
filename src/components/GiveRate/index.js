


import React, { useState } from 'react'
import { Input, Message } from 'semantic-ui-react'
import { RateMovies } from '../../api/tmdb-api'






const GiveRate = ({ id }) => {
    const [rate, setRate] = useState(0.5)
    const [isSuccess, setIsSuccess] = useState(false)
    const [message, setMessage] = useState("")
    console.log(rate)
    const rateAction = (e, id, rate) => {
        e.preventDefault()

        RateMovies(id, rate).then(res => {
            setIsSuccess(res.success)
            setMessage(res.status_message)
        })
    }
    return (
        <>
            <form onSubmit={e => rateAction(e, id, rate)}>
                <label>
                    Rate
                </label>
                <Input type="text" id="value" value={rate} name="name" onChange={e => setRate(e.target.value)} />

                <Input type="submit" value="Submit" />
            </form>
            {message &&
                <Message
                    header={isSuccess ? "Success Message" : "Warning message"}
                    content={message}
                    className={isSuccess ? ["bg-success", "text-white"] : ["bg-danger", "text-white"]} />}

        </>
    )
}

export default GiveRate
