import React from 'react'

const News = ({ theme, title, text }) => {
  return (
    <div className='col-5 p-2'>
      <div className='row'>
        <div className='col'>
        <a href={ theme.url }>{ theme.label }</a>
        <h2>{ title }</h2>
        <p>{ text }</p>
        <a href="/">Leia mais</a>
        </div>
        <div className='col-auto'>
        <img src="https://via.placeholder.com/200x250" alt="Imagem" />
        </div>
      </div>
    </div>
  )
}

export default News