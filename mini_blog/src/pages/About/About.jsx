import React from 'react'

// CSS
import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o Mini <span>Blog</span></h1>

      <p>
        Este é um projeto criado pelo professor Matheus Battisti, realizado pelo aluno Pedro Moreira como uma forma de <br />
        compreender melhor os fundamentos do React front-end e Firebase no back-end
      </p>
      <Link to="/posts/create" className='btn'>Criar post</Link>
    </div>
  )
}

export default About