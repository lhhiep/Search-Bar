import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTerm } from '../actions'
import { getImages } from '../actions'
import api from '../api/api'

class Search extends Component{
    state = {
        term: ''
    }

    handleChange = (event) => {
        
        this.props.getTerm(event.target.value)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await api.get("/search/photos", {
            params: { query: this.props.term, per_page: 30, page: Math.floor(Math.random() * 100) + 1 }
        });
        this.props.getImages(response.data.results)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label>Seach Image:</label>
                        <h1> {this.props.term} </h1>
                        <input type="text" onChange={this.handleChange} />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {term: state.term, images: state.images}
}

export default connect(mapStateToProps, {getTerm, getImages})(Search)