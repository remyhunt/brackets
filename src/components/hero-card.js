import React from 'react'

class HeroCard extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
      
    
    return (
        <div className='heroCardWrapper'>
            <div className='heroCard'>
                <img className='heroCardImage' 
                    alt={this.props.data.heroCardDescription} 
                    src={this.props.data.heroCardImage.file.url}
                />   
                <h4> {this.props.data.heroCardTitle} </h4>    
                <p> {this.props.data.heroCardDescription}</p>
                <a href={this.props.data.heroCardLinkUrl}> Learn more &ge; </a>
            </div>
           
             
        </div>
    )
  }
}
export default HeroCard
