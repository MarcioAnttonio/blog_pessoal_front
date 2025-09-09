import {GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-black text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Marcio Barbeiro | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/marciobarbeiro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a
              href="https://www.instagram.com/marcio.barbeiro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={48} weight="bold" />
            </a>
            <a
              href="https://github.com/marcioanttonio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
