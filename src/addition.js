import React from 'react';
import './a.css';
import {FaPlus,FaMinus,FaStarOfLife,FaSlash} from 'react-icons/fa';
class Addition extends React.Component
{
    constructor(){
        super();
        this.state={
            num1:'',
            num2:'',
            total:''
        }
    }
    handlenum1 = (event) => {
     this.setState( {
         num1:event.target.value
     })
    }

    handlenum2 = (event) => {
        this.setState( {
            num2:event.target.value
        })
       }
       add = (event) => {
       this.setState({total: parseInt(this.state.num1) +  parseInt(this.state.num2)});
       event.prevent.default();
      
    }
    devide = (event) => {
        this.setState({total: parseInt(this.state.num1) /  parseInt(this.state.num2)});
        event.prevent.default();
    }   
    multiply = (event) => {
        this.setState({total: parseInt(this.state.num1) *  parseInt(this.state.num2)});
        event.prevent.default();
    }  
    subtract = (event) => {
        this.setState({total: parseInt(this.state.num1) -  parseInt(this.state.num2)});
        event.prevent.default();
    }  

    render()  {
        return(
            <div className='block'> 
                <h1 className='header'> Arithmatic Operations</h1>
                <form onSubmit={this.exe}>
                <div className='num1'> 
                    Number 01:
                    <input type="text" value={this.state.num1} onChange={this.handlenum1} className='p1'/>
                </div>
                <div className='num2'> 
                Number 02:
                    <input type="text" value={this.state.num2} onChange={this.handlenum2}className='p1' />
                </div>
                <div className='btn'> 
                    <button type="submit" onClick={this.add} className='add' ><FaPlus/></button>
                    <button type="submit" onClick={this.subtract} className='sub'><FaMinus/></button>
                    <button type="submit" onClick={this.multiply} className='mul'><FaStarOfLife/></button>  
                    <button type="submit" onClick={this.devide} className='div'><FaSlash/></button>

                </div> 
                </form>
               <div className='total'> {this.state.total}</div>

            </div>
        )

    }
}
export default Addition;