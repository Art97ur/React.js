import React from 'react'
import './Book.css'
function Book({title, set, author}){
	return <div className='book-item'>
		<h3>{title}</h3>
		<small> from {set}</small>
		<p>By {author}</p>
		<button>Buy</button>
	</div>
}
export default Book