import logo from "../../../assets/logo-cor-2.svg";

function Footer() {
    return (
      <footer>
        <div className='h-56 w-screen bg-slate-950 text-amber-50 flex flex-col justify-between p-5'>
          <div className="flex justify-start">
            <img src={logo} alt="Trackfy Logo" className="h-10" />
          </div>
          <div className="flex justify-center">
            <p>© 2024 Trackfy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
