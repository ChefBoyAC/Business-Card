import './App.css'
import image from '/images/IMG_1646.png';

<img src={image} alt="description" />

export default function App() {
  return(
    <div className='background'>

      <div className='business_card'>
            <img src={image} alt='a person'></img>
            <h2> Aaron Channer </h2> 
            <h3> Machine Learning Engineer </h3> 
            <h6> aaronchanner.website </h6> 

            <div className='button'>
              {/* this is where the linkedIn and the Email buttons are going to be */}
                <button className='email'> 
                    <h3>Email</h3>
                </button> 

                <button className='linkedIn'>
                    <h3>LinkedIn</h3>
                </button> 
            </div>

            <div className='info'>
                <h5> About </h5> 
                <p> 
                  I am a machine learning developer with a particular interest in 
                  computer vision, chatbots, etc. I try to keep up with security and best 
                  practices, and an always looking for new things to learn. 
                </p>

                <h5> Interests </h5>
                <p> 
                  Food expert. Reader. Interest in hanging out with friends. Self-employed individual. 
                  Love learning new things. 
                </p> 
            </div>

            <div className='logo'>
              <div> 
                  <img src='./images/twitter.png'/> 
              </div>

              <div> 
                  <img src='./images/facebook.png' />
              </div>

              <div> 
                  <img src='images/instagram (1).png'/>
              </div>

              <div> 
                  <img src='images/github (1).png'/>
              </div> 
            </div> 

      </div>

    </div>
  )
}


