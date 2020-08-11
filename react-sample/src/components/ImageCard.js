import React, { Component } from 'react'

class ImageCard extends Component {
    render() {
        console.log(this.props.image)

        return (
            <div>
                <img src={this.props.image.urls.regular} alt={this.props.image.description} />
            </div>
        )
    }
}
export default ImageCard