import React from 'react'
import like from '../../assets/SVG Images/icons8-like-24.png'
import share from "../../assets/SVG Images/icons8-share-24.png"
import save from "../../assets/SVG Images/icons8-bookmark-24.png"
import Footer from '../../components/Footer';
// import User_dashboard from '../../components/User_dashboard';
const Reactdetail = () => {
  return (
    <>
          {/* <User_dashboard/> */}
      <div className='text-center py-5 mt-14 flex items-center justify-center'>
        {/* Yaha Iframe aayega */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RGKi6LSPDLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='rounded shadow-lg ml-10 flex items-center justify-center'>
        <div className='mt-20 p-10'>
          <div className='font-bold text-2xl mb-2 text-center'>React JS Tutorial
            <div className='flex items-center justify-center justify space-x-7 py-5'> <img src={like} /> <img src={share} /> <img src={save} />
            </div>
          </div>
          <br></br>
          <p className='text-gray-600 font-light text-center'>React.js follows a component-based architecture, which means that UIs are divided into reusable and independent components. Each component encapsulates its own logic, state, and rendering, allowing for a modular and scalable approach to building applications. Components can be composed together to form complex UIs, and changes to one component can be efficiently managed without affecting the entire application.
            One of the key features of React.js is its use of a virtual DOM (Document Object Model). The virtual DOM is a lightweight representation of the actual DOM and acts as an intermediary layer between the application's state and the browser's rendering engine. When changes occur in the application's state, React.js efficiently updates the virtual DOM and determines the minimal set of changes required to update the actual DOM, resulting in improved performance.</p>
        </div>
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
      <Footer/> 
    </>
  )
}

export default Reactdetail

