import React from 'react';


function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        imageUrl : 'https://i.imgflip.com/1ur9b0.jpg'
    });

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])


     function handleChange(event){
        const {name,value} = event.target ;
        setMeme( prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
     }



    function getImageUrl(){
      
        const randomNumber = Math.floor( Math.random() * allMemes.length) ;
        setMeme( (meme) => {
                return {
                    ...meme,
                imageUrl: allMemes[randomNumber].url
                }
        }) ;
        
    }
     return (
          <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getImageUrl}
                >
                    Get a new meme image 🖼
                </button>
            </div>
           
            <div className="meme">
                {meme.imageUrl && <img className="meme--image" src={meme.imageUrl} />}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
      );
}

export default Meme;