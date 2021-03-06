import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 32px;
`

export const Line = styled.div`
  width: min(1280px, 100%);
  border-top: 1px solid var(--border);
`

export const GithubLogo = styled(FaGithub)`
  fill: var(--border);
  margin-top: 25px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`
