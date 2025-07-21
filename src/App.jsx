import { useState } from 'react';
import './App.css'
import { TbFileCv } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub,FaLinkedinIn} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function App() {

  const anchor = "relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";
  const icons = 'hover:scale-105 focus:scale-95 transition-transform duration-500 hover:drop-shadow-[0_0_10px]';

  const projects = [
    {title: 'portafolio HTML, CSS Y JS - VANILLA',
      date: '14/07/2024',
      image: './img/portfolioVanilla.png',
      link: 'https://vokitami.github.io/portfolio/',
    },
    {title: 'Encriptador de Textos HTML, CSS Y JS- VANILLA',
      date: '23/02/2024',
      image: './img/EncriptadorTextos.png',
      link: 'https://vokitami.github.io/encriptadorDeTextos/',
    },
  ];

  const skills = [
      {name:'HTML', icon: <FaHtml5 className='text-orange-500 text-2xl drop-shadow-[2px_0_20px]'/> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-400 text-2xl drop-shadow-[2px_0_15px]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-300 text-2xl drop-shadow-[2px_0_20px]" />},
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400 text-2xl drop-shadow-[2px_0_15px]" /> },
      { name: 'React + Vite', icon: <FaReact className="text-blue-300 text-2xl drop-shadow-[2px_0_15px]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white text-2xl drop-shadow-[2px_0_15px]" /> },
  ];

  const socialMedia = [
    {name:'Linkedin', icon: <FaLinkedinIn className=' text-3xl bg-cyan-800'/> , url:'https://www.linkedin.com/in/karenpacheco-ds/'},
    {name: 'Github', icon: <FaGithub className='text-3xl bg-cyan-800'/>, url: 'https://github.com/'},
    {name:'CV', icon: <TbFileCv className='text-3xl bg-cyan-800'/>},
  ];

  return (
    <>
    <main className='text-center px-4 lg:px-8 lg:Pb-8 flex flex-col flex-auto w-full'>
      <header className="sticky top-0 z-60 backdrop-blur-xl">
        <nav className=' flex justify-between items-center py-7 mx-6'>
          <a href='/' className='cursor-pointer'>Karen Pacheco</a>
          <ul className='flex gap-5'>
             <li>
              <a href='#skills' className={anchor}>Habilidades</a>
            </li>
            <li>
              <a href='#projects' className={anchor}>Proyectos</a>
            </li>
            <li>
              <a href='#contact' className={anchor}>Contactame</a>
            </li>
          </ul>
        </nav>
      </header>
    
      <section className='max-w-6xl mx-auto flex flex-col justify-items-center md:flex-row gap-6'>
        <div className='w-full md:max-w-[400px] overflow-hidden rounded-[7px]'>
          <img src='./img/yo.jpeg' alt='photo' className='max-w-[400px] mx-auto rounded-[7px]'></img>
        </div>
        <div className='intro relative rounded-lg flex flex-col overflow-hidden rounden-xl bg-zinc-100 p-12'>
            <div aria-hidden='true'
            className='absolute -left-20 -top-20 size-80 rounded-full bg-zinc-600 blur-2xl'></div>
            <div aria-hidden='true' 
            className='absolute -right-20 -bottom-25 size-80 rounded-full bg-zinc-600 blur-3xl'></div>
            <div aria-hidden='true' 
             className='absolute inset-0 bg-cyan-600/60 rounded-lg backdrop-blur-md'></div>
            <div className='relative mt-30'>
              <h1 className='text-left text-4xl font-bold mb-3'>¡Hola, mi nombre es <span className='text-cyan-900'>Karen</span>!</h1>
              <p className='text-white text-2xl text-left mx-3.5'> Soy <span className='text-cyan-900 font-bold'>Front- End Developer</span></p>
              <p className='mt-3 text-white text-lg text-left'>
                Para mí, programar es también una forma de plasmar ideas, creatividad y arte en lo digital, algo que me inspira constantemente.
              </p>
            </div>
            <div className='relative max-w-6xl mx-auto py-8 '>
              <ul className="flex gap-4 ">
                {socialMedia.map((social, index, url) => (
                  <li key={index} className={`border-2 border-white rounded-full overflow-hidden cursor-pointer ${icons} `}>
                    <a href={social.url} target='_blank' rel='noopener noreferrer' className='block w-full h-full'aria-label={social.name} >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </section>

      <section className='py-6' id='skills'>
        <div className='max-w-6xl mx-auto'>
          <h2 class="text-3xl font-bold mb-6 text-cyan-400 text-center">Habilidades</h2>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {skills.map((skill, index) => (
            <li key={index} className=' bg-zinc-800  p-4 rounded-lg shadow-md flex flex-row gap-2 items-center justify-center '>
              {skill.icon}
              <span className="text-white">{skill.name}</span>
            </li>
          ))}
        </ul>
        </div>
        
      </section>

      <section className='py-3 max-w-6xl mx-auto' id='projects'>
        <h2 class="text-3xl font-bold mb-10 text-cyan-400 text-center">Proyectos</h2>
        <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center'> 
          {projects.map(({title,date,image,link}) => (
          <li key={title} className='group relative cursos-pointer overflow-hidden rounded-xl
          bg-zinc-800 p-6 hover:bg-zinc-800/80 active:bg-zinc-800 md:max-w-[600px] w-full inline-block hover:scale-105 focus:scale-95 transition-transform duration-400'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='block w-full h-full'>
              <h3 className='text-lg font-medium mb-3 text-cyan-200/80'>{title}</h3>
              <span className='inline-block mb-4 text-amber-50'>{date}</span>
              <div>
                <img src={image} alt='project' className='rounded-lg' />
              </div>
              </a>
          </li>
          ))}
        </ul>
      </section>

    <section className="py-6 mb-6" id='contact'>
      <div className=' flex max-w-6xl mx-auto bg-zinc-800 rounded-[7px] p-10 justify-center items-center'>
        <div class='box'>
          <form autocomplete="off" action="mailto:annawe407@gmail.com" method="post" enctype="text/plain">
          <h2 class='title'>Contáctame</h2>

          <div class="inputBox">
            <input type="email" name="email" required/>
            <span>Email</span>
          </div>

          <div class="inputBox">
            <textarea name="mensaje" required ></textarea>
            <span>Deja tu mensaje</span>
          </div>

            <input type="submit" value="Enviar"/>
          </form>
        </div>
      </div>
      
</section>



    </main>
    </>
  )
}

export default App
