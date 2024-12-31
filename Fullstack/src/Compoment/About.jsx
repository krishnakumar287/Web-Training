import React from 'react'

var About=(props)=>
{
    return(
        <div style={{height:"80vh"}}>
            <h2 style={{textAlign:"center"}}> Learning Props</h2>
        <h1>
            The name of the College {props.clg2}
            The name of the College {props.clg1}

        </h1>
    </div>
    )
}
export default About