import React from 'react'
import Book from './Book/Book.js'
function App(){
   return <div>
     <h1>Amazing books!</h1>
     <p>Let’s take a look at <strong>ARMEN MARJINYAN’s</strong> books</p>
     <div>
     <Book
		title	= 'JavaScript'
		set	= 'Interactive Programming'
		author	= 'Armen Marjinyan'
	/>
	<Book
		title  	= 'React & Angular'
		set	= 'Interactive Programming'
		author	= 'Armen Marjinyan'
	/>
	<Book
		title	= 'Vue.js'
		set	= 'Interactive Programming'
		author	= 'Armen Marjinyan'
	/>
	<Book
		title	= 'Node.js'
		set	= 'Interactive Programming'
		author	= 'Armen Marjinyan'
	/>
     </div>
   </div>
}
export default App
