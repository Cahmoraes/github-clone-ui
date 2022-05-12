import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles'

import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'
import { APIRepo, APIUser } from '../../@types'

interface Data {
  user?: APIUser
  repos?: APIRepo[]
  error?: string
}

const Profile: React.FC = () => {

  const { username = 'cahmoraes' } = useParams()
  const [data, setData] = useState<Data>()

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async responses => {
      const [userResponse, reposResponse] = responses

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' })
      }

      const user = await userResponse.json()
      const repos = await reposResponse.json()

      const shuffleRepos = repos.sort(() => 0.50 - Math.random())
      const slicedRepos = shuffleRepos.slice(0, 6)

      setData({
        user,
        repos: slicedRepos
      })
    })
  }, [username])

  if (data?.error) {
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data.repos) {
    return <h1>Loading...</h1>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repo}</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarURL={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.location}
            blog={data.user.blog}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random Calendar (do not represents actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile