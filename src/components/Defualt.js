import React, { Component } from 'react';
import styled from 'styled-components';


export default class Defualt extends Component {
    render() {
        return (
            <PageNotFound>
                <h3 className='text-center'>Oops page not found!</h3>
            </PageNotFound>
        )
    }
}

const PageNotFound = styled.div`
    position: fixed;
    width: 75vw;
    height: 35vh;
    left: 12.5vw;
    top: 35vh;
    background-color: white;
    box-shadow: 1px 1px 2px 2px; 
    border-radius: 5px; 

    h3 {
        position: relative;
        top: 13vh;
        color: red;
       
    }
`;