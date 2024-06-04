import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import listAdded from './Components/ListOfBlocks';
import HollowBlocks from './Components/Blocks';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import StockOfBlocks from './Components/Stock';
import DeleteQuantity from './Components/DeleteQuantity';
import AddQunatity from './Components/AddQunatity';
import ListOfCustomer from './Components/ListOfCustomer';
import Customers from './Components/Customers';


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Container>
   <Switch>
    <Route exact path='/' component={listAdded}/>
    <Route path='/add' component={HollowBlocks}/>
    <Route path='/block/edit/:id' component={HollowBlocks}/>
    <Route path='/listOfAll' component={listAdded}/>
    <Route path='/stock' component={StockOfBlocks}/>
    <Route path='/decrease/:inch'><DeleteQuantity/></Route>
    <Route path='/addQuantity/:inch'><AddQunatity/></Route>
    <Route path='/listOfCustomers'><ListOfCustomer/></Route>
    <Route path='/addNewCustomer'><Customers/></Route>
    <Route path='/updateCustomer/:id'><Customers/></Route>
   </Switch>
   </Container> 
   </BrowserRouter>
  );
}

export default App;
