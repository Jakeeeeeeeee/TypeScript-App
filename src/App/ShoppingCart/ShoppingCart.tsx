import React from "react";
import styles from './ShoppingCart.module.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { appContext } from '../../Context/appState';

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e) => {
    if((e.target as HTMLElement).nodeName === 'SPAN'){
      this.setState({isOpen: !this.state.isOpen})
    }
  }

  render() {
    return (
      <appContext.Consumer>{(value) => {
        return (
          <div className={styles.cartContainer}>
          <button 
            className={styles.button}
            onClick={this.handleClick}
          >
            <FiShoppingCart />
            <span>{value.shoppingCart.items.length}</span>
            <span>Shopping Cart</span>
          </button>
          {this.state.isOpen && (
            <div className={styles.cartDropDown}>
              <ul>
                {value.shoppingCart.items.map((i) => 
                  <li>{i.name}</li>
                )}
              </ul>
            </div>
          )}
        </div>
        )
      }}
        
      </appContext.Consumer>
    )
  }
}

export default ShoppingCart;
