export interface WorkModel {
  title: string
  position: string
  url: string
  country: string
  year: string
  status?: string
}

export const WorkData = (t: any): WorkModel[] => [
  {
    title: 'Webdoctor',
    position: t('position.senior-front-end-developer'),
    year: '2021',
    country: t('countries.brazil'),
    url: 'https://www.webdoctor.ie/'
  },
  {
    title: 'Ciklum',
    position: t('position.senior-front-end-developer'),
    url: 'https://www.ciklum.com/',
    country: t('countries.spain'),
    year: '2020',
    status: 'current'
  },
  {
    title: 'Payvision',
    position: t('position.software-developer'),
    url: 'https://www.payvision.com',
    country: t('countries.spain'),
    year: '2019'
  },
  {
    title: 'Webdoctor',
    position: t('position.software-developer'),
    year: '2017',
    country: t('countries.ireland'),
    url: 'https://www.webdoctor.ie/'
  },
  {
    title: 'Neoway',
    position: t('position.javascript-developer'),
    country: t('countries.brazil'),
    year: '2016',
    url: 'https://www.neoway.com.br/'
  },
  {
    title: 'Div64',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2015',
    url: 'https://www.usebeon.com/'
  },
  {
    title: 'EloGroup',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2013',
    url: 'https://elogroup.com.br/'
  },
  {
    title: 'Bolt Brasil',
    position: t('position.front-end-developer'),
    country: t('countries.brazil'),
    year: '2011',
    url: 'https://www.bolt.com.br/'
  }
]
