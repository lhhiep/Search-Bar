import React, { Component } from 'react'
import ImageList from './components/ImageList'
import Search from './components/Search'
import api from './api/api'

class App extends Component {

    state = {
        images:[

        ]
    }

    // async componentDidMount() {
    //     const response = await api.get("/search/photos", {
    //     params: { query: 'car', per_page: 30, page: Math.floor(Math.random() * 100) + 1 }
    //     });

    //     console.log(response)
        
    //     this.setState({ images: response.data.results });
    //     }
    
    handleSearchTerm = async (term) => {
        const response = await api.get("/search/photos", {
            params: { query: term, per_page: 30, page: Math.floor(Math.random() * 100) + 1 }
        });
        console.log(term)
        this.setState({ images: response.data.results });
    }
    render(){
        return (
        <div className="ui container" >
            <Search search={this.handleSearchTerm} />
            <ImageList images={this.state.images}      
            />
        </div>
        )
    }
}
export default App