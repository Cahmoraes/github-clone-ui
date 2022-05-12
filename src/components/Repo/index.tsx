import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles'

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className="username" to="/cahmoraes">
          cahmoraes
        </Link>
        
        <span>/</span>
        
        <Link className="reponame" to={`/cahmoraes/animais-fantasticos-react`}>
          animais-fantasticos-react
        </Link>
      </Breadcrumb>

      <p>Contains my all YouTube lessons</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href='https://github.com/Cahmoraes/animais-fantasticos-react'>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  )
}

export default Repo