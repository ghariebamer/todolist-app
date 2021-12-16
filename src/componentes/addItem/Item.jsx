import React,{Component}from'react'
class Additem extends Component{
    state={name:'',age:''}
    handleChange=(e)=>{
       
         this.setState({[e.target.id]:e.target.value})
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        
        const {additem}= this.props;
        console.log(this.state)
        additem(this.state)
        this.setState({
            name:'',
            age:''
        })

    }
   
    render(){
        return(
            <div>
                <form className='input'  onSubmit={this.handleSubmit}>
                    <input type='text' placeholder="username" id='name' onChange={this.handleChange} value={this.state.name} />
                    <input type='text' placeholder="age" id='age' onChange={this.handleChange} value={this.state.age} />
                    <input type="submit" value="Submit" />

                </form>


            </div>
        )
    }
}
export default Additem;