import React from 'react'
import {Layout} from '../Pages/Layout'

export const TrucoPage = (props) =>{
    return(
        <Layout titulo={'Truco'} history={props.history}>
            <h1>HOLA!</h1>
        </Layout>
    )
}