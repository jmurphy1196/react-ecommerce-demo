import React, {Component} from 'react';

import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context'; 


export default class ProductList extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: storeProducts
        }
    }


    render(){
        console.log(this.state.products);

        return(
            <React.Fragment>

                <div className='py-5'>
                    <div className='container'>
                            
                                    <Title name='All' title='products'/>
                                   
                                    <div className='row'>
                                        <ProductConsumer>
                                            {(value) => {
                                                return value.products.map(product => {
                                                    return <Product product={product} key={product.id}/>
                                                })
                                            }}
                                        </ProductConsumer>
                                    </div>
                    </div>

                </div>

            </React.Fragment>
        )
    }
}
