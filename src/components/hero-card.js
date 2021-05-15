import React from 'react'

class HeroCard extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <h4> {this.props.data.heroCardTitle} </h4>    
            <p> {this.props.data.heroCardDescription}</p>
            <a href={this.props.heroCardLinkUrl}> Learn more &rarr; </a>
            <img alt={this.props.data.heroCardDescription} 
                 src={this.props.data.heroCardImage.file.url}
            />    
        </div>
    )
  }
}
export default HeroCard
