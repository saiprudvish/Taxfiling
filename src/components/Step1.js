import React, { useEffect,useState } from 'react';
import './Efile.css'
import anime from 'animejs';
function   Step1() {

//Animation
 // Animation
 useEffect(() => {
  anime({
    targets: 'form',
    translateY: ['-20%', '0%'],
    opacity: [0, 1],
    duration: 1500,
  });
}, []);

const [textareaValue, setTextareaValue] = useState('');

const handlePlusClick = () => {
  const enteredText = prompt('Enter text:');
  if (enteredText.length === 0) {
    setTextareaValue(textareaValue + enteredText);
  }
};


// Focus Input
window.addEventListener('load', function () {
  const formInputs = document.querySelectorAll('.form input');
  formInputs.forEach(input => {
      input.addEventListener('focus', function () {
          this.style.transform = 'scale(1.03)';
      });
      input.addEventListener('blur', function () {
          this.style.transform = 'scale(1)';
      });
  });
});
   

  return (
    
    <div>
    <div className="form-container">

        <h1>STEP-1</h1>

        <form action="" className="form" method="post" role="form">

            <label for="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" placeholder="First Name" required />

            <label for="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" placeholder="Last Name" required />


            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required />

            <label for="mobileno">Password</label>
            <input type="number" name="mobileno" id="mobileno" placeholder="mobileno" required />
{/* 
            <div className="radio">
                <p>Choose Your Best CSS Framework 🔽</p>
                <input type="radio" id="bootstrap" name="fav_language" value="Bootstrap" />
                <label for="bootstrap">Bootstrap</label><br/>

                <input type="radio" id="tailwand" name="fav_language" value="Tailwand" />
                <label for="tailwand">Tailwand</label><br/>

                <input type="radio" id="foundation" name="fav_language" value="Foundation" />
                <label for="foundation">Foundation</label>
            </div> */}

            {/* <label for="lang">Select Programming Language</label>
            <select name="lang" id="lang">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Go">Go</option>
            </select> */}
            <textarea
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      ></textarea>
      <button onClick={handlePlusClick}>+</button>
            <label for="subject">Other Deductions</label>
            <textarea name="subject" id="subject" placeholder="Write something . . ." required></textarea>

            <input type="checkbox" id="terms" name="terms" />
            <label for="terms">I Agree to the Terms and Conditions</label>
            <br/><br/>

            <input type="reset" value="Reset" className="btn" /><br/><br/>
            <input type="submit" value="Submit" className="btn"/>
        </form>

    </div>
   </div>
  );
};

export default Step1;
