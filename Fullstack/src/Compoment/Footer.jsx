import '../assets/Css/Footer.css'
const Footer = () => {
    return (
    <div className='Footer'>
       <div className="form">
       <label>Name:</label>
       <input type="text" placeholder='Enter your name' />
       <label>Email:</label>
       <input type="email" placeholder='Enter your email'/>
       <label>Message:</label>
       <textarea placeholder='Enter your message'></textarea>
       <button>
         Submit
      </button>
       </div>
     </div>
    )
  }
  
  export default Footer;