import React from 'react'

export const Nav = () => {
  return (
    <div className='navbar'>

    <button>
      <img src="https://cdn-icons-png.flaticon.com/512/660/660376.png" alt="hamburguer menu" width='20px'/>
    </button>
    {/* <select name='Menu' id='menu' defaultValue="menu">
        <option value="menu" disabled hidden>Menu</option>
        <option value="home">Home</option>
        <option value="store">Store</option>
        <option value="categories">Categories</option>
        <option value="my stuff">My stuff</option>
    </select> */}

    <a className='title' href=""><strong>prime video</strong></a>

    <a href=""><img width="40px" height="40px" src="https://img.icons8.com/ios/50/b3b4b7/search--v1.png" alt="search--v1"/></a>

    <a href=""><img width="40px" height="40px" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="search--v1"/></a>

    </div>
  )
}
