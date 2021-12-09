import React from 'react'
import '../Style.css'

class CitySearch extends React.Component{

    constructor(props){
        super(props)
        this.state = {searchInputValue: ""}
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInputValue)
        
    }

    render() {
        return(
            <form className="search-loaction" onSubmit={this.onFormSubmit}>
            <input
             type="text"
             name="city"
             placeholder="What city?" 
             onChange={(event) => this.setState({searchInputValue: event.target.value})}
             className="form-control text-muted form-rounded p-4 shadow-sm" />
        </form>
        )
    }
}

export default CitySearch;