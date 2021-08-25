import React, { Component } from 'react';



class Poster extends Component {
    constructor(props) {
    super(props);
      this.state = {
        url: this.props.url,
        pictureUrl: this.props.pictureUrl,
        title: this.props.title,
        playUrl: this.props.playUrl,
        description: this.props.description,
      }
    }
    componentDidMount(){
  
    }

    render() {
       return (
            <div className="poster">
                <a href={this.state.url} className="poster-go-content">
                    <img src={this.state.pictureUrl}></img>
                </a>
                <div className = "poster-content">
                    <h4 className="poster-content-title">{this.state.title}</h4>
                    <div className = "poster-content-description">
                        <p>
                            <strong>{this.state.title + " "}</strong> 
                            {this.state.description}
                        </p>
                        <a href={this.state.playUrl} className="demo">Test Its!</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Poster;
