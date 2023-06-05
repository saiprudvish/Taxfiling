import React, { useEffect } from 'react';
import './Efile.css'
import anime from 'animejs';
function   Step5() {

//Animation
 // Animation
 useEffect(() => {
  anime({
    targets: 'form',
    translateY: ['-5%', '0%'],
    opacity: [0, 1],
    duration: 1500,
  });
}, []);


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

        <h1>FILING Form</h1>

        <form action="" className="form" method="post" role="form">

            <label for="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" placeholder="First Name" required />

            <label for="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" placeholder="Last Name" required />

            <label for="number">Age</label>
            <input type="number" name="number" id="number" placeholder="Age" required />

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required />

            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" required />

            <div className="radio">
                <p>Choose Your Best CSS Framework 🔽</p>
                <input type="radio" id="bootstrap" name="fav_language" value="Bootstrap" />
                <label for="bootstrap">Bootstrap</label><br/>

                <input type="radio" id="tailwand" name="fav_language" value="Tailwand" />
                <label for="tailwand">Tailwand</label><br/>

                <input type="radio" id="foundation" name="fav_language" value="Foundation" />
                <label for="foundation">Foundation</label>
            </div>

            <label for="lang">Select Programming Language</label>
            <select name="lang" id="lang">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Go">Go</option>
            </select>

            <label for="subject">Write a Comment About Programming Language</label>
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

export default Step5;
