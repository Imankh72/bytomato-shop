import Link from "next/link";
import { BsInstagram, BsTwitter, BsTelegram, BsLinkedin } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 bg-neutral-100 py-5 lg:flex-row lg:gap-y-0 lg:px-20 lg:justify-between">
      <p>
        ﺷﻤﺎره ﺗﻤﺎس:<Link href="/">1231231-021</Link>
      </p>
      <p>
        آدرس ایمیل: <Link href="/">iserver@gmail.com</Link>
      </p>
      <div className="flex items-center gap-x-3">
        <p>فروشگاه در شبکه های اجتماعی:</p>
        <Link href="/">
          <BsInstagram />
        </Link>
        <Link href="/">
          <BsTwitter />
        </Link>
        <Link href="/">
          <BsTelegram />
        </Link>
        <Link href="/">
          <BsLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default ContactUs;
