import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-wrapper">


        {/* ABOUT */}

        <div className="footer-about">

          <h1>
            KARTHIKEYAN M
          </h1>

          <h3>
            DEVELOPER (FRESHER)
          </h3>

          <p>
            Passionate MERN Stack Developer with skills in
            creating modern, responsive and user-friendly
            web applications.
          </p><br /><br />


          <div className="footer-icons">

          <a href="https://github.com/karthikeyansnpc-hub/karthikeyan.github.io" target="_blank"
>
  <FaGithub />
</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a href="https://www.linkedin.com/in/karthikeyan-m-06bb2a363/" target="_blank">
              <FaLinkedin />
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <a href="https://www.instagram.com/_jd.x__?igsh=dDM4eHd3Y3drcHVv" target="_blank">
              <FaInstagram />
            </a>

          </div>

        </div>



        

<br /><br />
       
      </div>



      <div className="footer-bottom">

        <p>
          © 2026 Karthikeyan M | Designed & Developed using React
        </p>

      </div>


    </footer>
  );
}

export default Footer;