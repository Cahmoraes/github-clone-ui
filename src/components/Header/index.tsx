import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeName } from '../../styles/theme'

import { Container, GithubLogo, SearchForm } from './styles'

interface HeaderProps {
  themeName: ThemeName
  setThemeName: (newName: ThemeName) => void
}

const Header: React.FC<HeaderProps> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    navigate(`/${search.toLocaleLowerCase().trim()}`)
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username or Repo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchForm>
    </Container>
  )
}

export default Header