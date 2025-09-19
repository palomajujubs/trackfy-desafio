import logo from "../../../assets/logo-cor-2.svg";

function Footer() {
    return (
      <footer>
        <div className='h-56 w-screen bg-slate-950 text-amber-50 flex flex-col justify-between p-5'>
          <div className="flex justify-start">
            <img src={logo} alt="Trackfy Logo" className="h-10" />
          </div>

          <div>
            <ul className="grid grid-cols-3 gap-2
             justify-start mt-3 mb-2">
              <li>SÃO PAULO</li>
              <li>SALVADOR</li>
              <li>Contato</li>
            </ul>
            <ul className="grid grid-cols-3 gap-2
             justify-start mb-4">
              <li>Alameda Vicente Pinzon, <br />
                54 Vila Olímpia <br />
                CEP 04547-130</li>
              <li>Rua Mundo, 121 <br />
                Parque Tecnológico da Bahia <br />
                CEP 41745-715</li>
              <li>trackfy@trackfyapp.com</li>
            </ul>
          </div>
          <div className="flex justify-center mt-2 mb-2">
            <p>© 2024 Trackfy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
