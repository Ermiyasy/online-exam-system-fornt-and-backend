import loginimag from '../asset/bg-01.jpg'
import"./logincard.css"

function Contact(){
 
  return(
    <>
   
    <div className="login-card">
            <div>
            <img className='card-image' src={loginimag} alt="Game card " />
            </div>
                        <h2 className='card-title'>Contact US PAGE</h2>
                <div className="login-input">
                      <h2>
                        This will Conten the information about our work <br /><br />
                        This will Conten the information about our work <br /><br />
                        This will Conten the information about our work <br /><br />
                        This will Conten the information about our work <br /><br />

                      </h2>
                </div>
        </div>
        </>
  );

}
export default Contact