import { Link } from 'react-router-dom'

  //defines the menu
export const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
        <Link style={padding} to='/products/gloves'>Gloves</Link>
        <Link style={padding} to='/products/beanies'>Beanies</Link>
        <Link style={padding} to='/products/facemasks'>Facemasks</Link>
      </div>
    )
  }
  
  //defines the Footer
export const Footer = () => {
    return (
      <div>
        <h3>Made by Lari Haapaniemi </h3>
        <h4>Code available in GitHub @Telomeri/hobbies/reaktor-assignment </h4>
      </div>
    )
  }
  