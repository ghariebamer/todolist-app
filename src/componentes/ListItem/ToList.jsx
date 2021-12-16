import React from 'react'
import './ToList.css'
const ToList=(props)=>{
    
       const {itemes,deleteitem}= props;
           const listitem=itemes.length ? (itemes.map(item => {
            return(
            <div className='item' key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action-icon' onClick={()=>deleteitem(item.id)}>&times;</span>


            </div>)}))
            :(<p>there no item to show</p>)
                        
        

       

    return(
            <div className="list">
                
                    <span className='name-title'> Name</span>
                    <span className='age-title'>Age</span>
                    <span className='action-title'>Action</span>

                    
                
                    <div>
                        {listitem}
                    </div>
            </div>
    )

}

export default ToList;