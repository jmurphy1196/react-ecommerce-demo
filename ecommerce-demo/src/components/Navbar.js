
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../store.svg';
import styled from 'styled-components';
import ButtonContainer from './Button';



export default class Navbar extends Component {

    constructor(props){
        super(props);

    }


    render(){


        return(
            <div className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
                <Link to='/'>
                
                    <img src={logo} alt='store' className='navbar-brand' width='60' />

                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Products
                        </Link>
                        
                    </li>
                  
                </ul>
                <Link  to='/cart' className='ml-auto' className='ml-auto'> 
                    <ButtonContainer >
                       <span className='mr-2'>
                       <i className='fas fa-cart-plus'></i> cart
                           
                       </span>
                    </ButtonContainer> 
               </Link>
            </div>
        )
    }


}

