import logo from "../../assets/logo-cor-2.svg";

function Footer() {
    return (
      <footer>
        <div className='bg-slate-950 text-amber-50 flex flex-col gap-4 p-4 pb-0'>
          <div className="flex justify-start">
            <img src={logo} alt="Trackfy Logo" className="h-10" />
          </div>

           <div className="flex flex-col gap-2 md:flex-row md:gap-16 md:justify-center">
             <div>
              <p className="font-bold">SÃO PAULO</p>
              <p>Alameda Vicente Pinzon, 54 Vila Olímpia</p>
              <p>CEP 04547-130</p>
            </div>
          <div>
            <p className="font-bold">SALVADOR</p>
            <p>Rua Mundo, 121 Parque Tecnológico da Bahia</p>
            <p>CEP 41745-715</p>
          </div>
          <div>
            <p className="font-bold">Contato</p>
            <p>trackfy@trackfyapp.com</p>
          </div>
           </div>
          <div className="text-center border-t border-amber-50/20 py-4">
            <p>© 2024 Trackfy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}
export default Footer;
