import React, {Component} from 'react';

import Product from './Product';


export default class ProductList extends Component {

    constructor(props){
        super(props);
    }


    render(){

        return(
            <div>
                <Product />
            </div>
        )
    }
}
