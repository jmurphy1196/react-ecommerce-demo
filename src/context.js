import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';


    const ProductContext = React.createContext();
    

 class ProductProvider extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: storeProducts,
            detailProduct: detailProduct,
            cart: [],
            modelOpen: false,
            modelProduct: detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0
        }
 
       

          
        
    }
    setProducts = () => {
        let tempProducts = [];  
        storeProducts.forEach((el, ind) => {
                const singleItem  = {...el};
                tempProducts = [...tempProducts, singleItem];

        });
        this.setState(() => {
            return {
                products: tempProducts

            }
        });
    }
    componentDidMount(){
        this.setProducts();
        console.log(this.state);
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
                return {
                    detailProduct: product
                }
        });
    }

    addToCart = (id) => {
       let tempProducts = [...this.state.products];
       const index = tempProducts.indexOf(this.getItem(id));
       const product = tempProducts[index];
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;

       this.setState(() => {

        return {
            products: tempProducts,
            cart: [...this.state.cart, product]
        };
    }, () => {
           this.addTotals();
       });

    }
    
    openModel = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            
            return {
                modelProduct: product,
                modelOpen: true
            }
        });
    }

    closeModel = (id) => {
        this.setState(()=> {

            return {
                modelOpen: false
            }
        });
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item) =>  item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count += 1;
        product.total = product.count * product.price;

        this.setState(()=> {

            return {
                cart: [...tempCart]
            }
        }, () => { this.addTotals(); });
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item) =>  item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        if(product.count > 1) {
            product.count -= 1;
            product.total = product.count * product.price;
    
            this.setState(()=> {
    
                return {
                    cart: [...tempCart]
                }
            }, () => { this.addTotals(); });
        } else {
            this.removeItem(id);
        }
       
    }

    removeItem = (id) => {
        
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));

        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        });
    }

    clearCart = () => {
        this.setState(() => {

            return {
                cart: []
            };
        }, 
        () => {
            this.setProducts();
            this.addTotals();
        
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
        });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;

        this.setState(() => {

            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModel: this.openModel,
                closeModel: this.closeModel,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                 {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};