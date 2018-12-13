import React,{component} from "react"
export const MyContext=React.createContext();

class index extends Component{
    constructor(){
        super();
        this.state={
            books:[],
            currentlyReading:[],
            wantToRead:[],
            read:[]
        }
    }
    render(){
       return (<MyContext.Provider value={{...this.state}}>
               {this.props.children}
           </MyContext.Provider>
        )
    }
}