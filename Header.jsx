import React from 'react'
import PropTypes from 'prop-types'



//use rfce 
//style = {{ backgroundColor: 'deepskyblue', color: 'white'}}
function Header({text, bgColor, textColor}) {
    const headerstyle = {
        text: text,
        backgroundColor: bgColor,
        color: textColor
    }
    return (
    <header style = {headerstyle}>
        <div className='container'>
            <h2> {text} </h2>
        </div>


    </header>
  )
}


Header.defaultProps = {
    text: "Feedback UI",
    bgColor: '#AA336A',
    textColor: 'white'
}


Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string, 
}

export default Header