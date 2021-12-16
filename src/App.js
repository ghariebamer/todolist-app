import React,{Component} from'react'
import './App.css';
import ToList from './componentes/ListItem/ToList';
import Additem from './componentes/addItem/Item';

class App extends Component {
  state ={itemes: [   {id:'1',name:'Gharieb',age:24},
                      {id:'2',name:'Ahmed',age:27},
                      {id:'3',name:'osama',age:22},
                      {id:'4',name:'mohamed',age:23}]}
      deleteitem =(id)=>{
        let items=this.state.itemes
        let itemes=items.findIndex(item=> items.id===id) // or we can use filter   let itemes=items.filter(item=> items.id!==id{return(this.setatate({items}))})
        items.splice(itemes,1)
        this.setState({items})
      }
      additem=(item)=>{
        item.id= Math.random();
        let items=this.state.itemes
        if(!item.name&!item.age ){alert('you must enter your name and age')}
        else
        {alert(item.name+'welcome to you')
          items.push(item)
        this.setState({items})}
      }
      render(){
            return (
              < div className="container">
                 <h1 className='text-center'>List App</h1>
                <ToList itemes={this.state.itemes} deleteitem={this.deleteitem}/>
                <Additem  additem={this.additem} />
              
              </div>
            );
          }
        } 

export default App;
