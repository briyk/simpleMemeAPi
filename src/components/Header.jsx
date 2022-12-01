import logo from '../assets/troll-face.png'

function Header() {
     return ( 
          <div className="header">
               <div className="navbar">
                    <div className="logo">
                         <img src={logo} alt="logo"/>
                         <h2>Meme Generator</h2>
                    </div>
                    <p>React Course - Project 3</p>
               </div>
          </div>
     );
}

export default Header
