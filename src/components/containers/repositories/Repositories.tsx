import React from 'react'
import styles from './Repositories.module.css'
import {RepositoryModel} from './RepositoryModel'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'
import github from '../../../assets/images/logos/github.svg'

const Repositories = () => {
  const repositories: RepositoryModel[] = [
    {
      icon: '🤖',
      name: 'PR Fiscal',
      url: 'https://www.gabriel-lima.com',
      description: 'A Chrome Extension to help you find patterns in your PR.'
    },
    {
      icon: '🦨',
      name: 'Dale CLI',
      url: 'https://www.gabriel-lima.com',
      description: 'One CLI to rule them all! A bunch of daily commands to help development’s workflow.'
    },
    {
      icon: '🔨',
      name: '.dotfiles',
      url: 'https://www.gabriel-lima.com',
      description: 'Shell scripts, git and config files to kick off a project/OS from scratch.'
    }
  ]

  return (
    <section className={`section ${styles['section-repositories']}`}>
      <div className="section-content">
        <Headings title="Repositories" subtitle="I’ve finally finish some side-projects" />

        <ul className={`${styles.list}`}>
          {repositories.map((repository: RepositoryModel, i: number) => (
            <li key={i} className={styles['list-item']}>
              <a className={styles.link} href={repository.url} title={repository.name}>
                <span className={styles['link-wrapper']}>
                  <i className={styles.icon}>{repository.icon}</i>
                  <span className={styles.name}>{repository.name}</span>
                  <img className={styles.github} src={github} alt="GitHub Logo" />
                </span>
                <span className={styles.description}>{repository.description}</span>
              </a>
            </li>
          ))}
        </ul>

        <SeeMore url="https://github.com/the-glima" />
      </div>
    </section>
  )
}

export default Repositories
