import React, { Component } from 'react'
import styles from './styles.scss';

class ArtObjectCard extends Component {
  render() {
    const testImg = this.props.imgUrl || `https://picsum.photos/500/500?random&${this.props.id}`;

    return (
      <div key={this.props.id} className="col s12 l4">
        <div key={this.props.id} className="card">
          <div className="card-image">
            <img src={testImg} />
          </div>
          <div className="card-content">
            <a href={"#"}><span className="card-title">{this.props.title}</span></a>
            <ul>
              <li>medium: {this.props.medium}</li>
              <li>maker: {this.props.maker}</li>
              <li>dimensions: {this.props.dimensions}</li>
              <li>people: {this.props.people}</li>
              <li>creditline: {this.props.creditline}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtObjectCard;
