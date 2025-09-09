import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
  const data = new Date().getFullYear()

  const { usuario } = useContext(AuthContext)

  let footerComponent

  if (usuario.token !== '') {
    footerComponent = (
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-lg font-bold">Blog Pessoal Generation | {data}</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/marciobarbeiro/" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={32} weight="bold" />
            </a>
            <a href="https://www.instagram.com/marcio.barbeiro" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={32} weight="bold" />
            </a>
            <a href="https://github.com/marcioanttonio" target="_blank" rel="noopener noreferrer">
              <GithubLogo size={32} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return <>{footerComponent}</>
}

export default Footer
