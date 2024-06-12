const Footer = () => {
  return (
    <section className="footer">
      <div className="lg:order-3">
        <h6 className="heading--primary mb-8 lg:footer__text lg:font-bold lg:mb-5">
          Contacts
        </h6>
        <ul className="flex flex-col gap-y-2 lg:gap-y-[15px]">
          <li className="footer__text">
            Box 113, 433 23 Partille, Göteborg, Sweden
          </li>
          <li className="footer__text">+46 (31) 22 4240</li>
          <li className="footer__text">contact@bytomato.com</li>
        </ul>
      </div>
      <div className="footer__line"></div>
      <div className="text-center lg:text-left lg:order-1">
        <h3 className="footer__heading">
          TOMATO <span className="font-normal block">PLATFORM</span>
        </h3>
        <p className="footer__text">© 2022 byTomato. All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
