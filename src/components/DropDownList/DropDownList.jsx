import React from 'react'
import './DropDownList.css'

export default class DropDownList extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            select: this.props.select
        }
    }

    componentDidMount(){
    }

    shouldComponentUpdate(prevProp,prevState){
        if (prevProp.list !== this.props.list){
            return true
        }
        return false
    }

    render(){
        const handleChange = (e) => {
            this.setState({...this.state, select: e.target.value})
            this.props.select(e.target.value)
        }

        return (
            <div>
                <select onChange={handleChange}>
                    <option value={""}>Select {this.props.fieldName}</option>
                    {
                        this.props.list && this.props.list.map(item => 
                            <option key={item.name} value={item.name}>
                                {item.name}
                            </option>    
                        )
                    }
                </select>
            </div>
        )
    }
}
