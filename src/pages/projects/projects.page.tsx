import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout.component";
import './projects.scss';
import { ReactComponent as URLIcon } from '../../assets/url-icon.svg';
import { StarIcon, GitForkIcon, MarkGithubIcon } from '@primer/octicons-react'

const ProjectsPage = () => {
  const [projects, setProjects] = useState<any>([]);
  const [languages, setLanguages] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repositoryRequestUrl = 'https://api.github.com/users/indrajitbnikam/repos?sort=updated&direction=desc';
        const repositoryRequestConfig: AxiosRequestConfig = {
          headers: {
            Accept: 'application/vnd.github.v3+json'
          }
        }
        const repositoryRequest = axios.get(repositoryRequestUrl, repositoryRequestConfig);

        const languagesRequestUrl = 'https://github-lang-deploy.herokuapp.com/';
        const languagesRequest = axios.get(languagesRequestUrl);

        const [repositoryResult, languagesResult] = await axios.all([
          repositoryRequest,
          languagesRequest
        ]);

        if (languagesResult.status === 200 && languagesResult.data) {
          setLanguages(languagesResult.data);
        }

        if (repositoryResult.status === 200 && repositoryResult.data) {
          setProjects(repositoryResult.data);
        }

      } catch (error) {

      }
    }
    fetchData();
  }, []);

  const openLink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <Layout title='Projects'>
      <div className='projects-container'>
        {
          projects.length ? (
            projects.map((
              {
                id,
                name,
                description,
                html_url,
                homepage,
                language,
                stargazers_count,
                forks_count,
              }: any) => (
              <div key={id} className='project-card'>
                <div className='project-basic-details'>
                  <p className='project-name'>{ name }</p>
                  <p className='project-description'>{ description }</p>
                </div>
                <div className='project-advanced-details'>
                  <div className='git-data'>
                    {
                      language ? (
                        <div className='primary-language-info'>
                          <span className='color-dot' style={{
                            backgroundColor: languages[language].color
                          }} />
                          <span className='name'>{ language }</span>
                        </div>
                      ) : null
                    }
                    {
                      stargazers_count >= 0 ? (
                        <div className='stargazers-info'>
                          <span onClick={() => openLink(`${html_url}/stargazers`)}>
                            <StarIcon verticalAlign='middle' className='star-icon'/>
                          </span>
                          <span className='count'>{ stargazers_count }</span>
                        </div>
                      ) : null
                    }
                    {
                      forks_count >= 0 ? (
                        <div className='forks-info'>
                          <span onClick={() => openLink(`${html_url}/fork`)}>
                            <GitForkIcon className='fork-icon'/>
                          </span>
                          <span className='count'>{ stargazers_count }</span>
                        </div>
                      ) : null
                    }
                  </div>
                  <div className='project-urls'>
                    <span onClick={() => openLink(html_url)}>
                      <MarkGithubIcon verticalAlign='middle' className='url-icons'/>
                    </span>
                    {
                      homepage ? (
                        <span onClick={() => openLink(homepage)}>
                          <URLIcon className='url-icons' />
                        </span>
                      ) : null
                    }
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )
        }
      </div>
    </Layout>
  )
};

export default ProjectsPage;