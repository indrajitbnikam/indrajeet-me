import { Journey, JourneyType } from './journey.types';

export const JourneyData: Journey[] = [
  {
    id: 9,
    purpose: JourneyType.SPECIAL,
    title: 'Published more than 10 blogs ✍',
    subtitle: '@ fullyunderstood.com',
    date: 'Sep, 20'
  },
  {
    id: 8,
    purpose: JourneyType.SPECIAL,
    title: 'Innovator 2019 🥇',
    subtitle: 'Siemens, Pune',
    description: 'Received this award in an Annual award ceremony to celebrate extra-ordinary contribution in Web Development area.',
    date: 'Feb, 20'
  },
  {
    id: 7,
    purpose: JourneyType.WORK,
    title: 'First international business trip ⛄',
    subtitle: 'Zug, Switzerland',
    description: 'Travelled to Zug, Switzerland as a part of PI Planning for a week',
    date: 'Jan, 20'
  },
  {
    id: 6,
    purpose: JourneyType.SPECIAL,
    title: 'Premium Star 2018 🥇',
    subtitle: 'Siemens, Pune',
    description: 'This is award for Freshers. Received it for creating rapport with co-workers and business partners and showing impact through work.',
    date: 'Feb, 19'
  },
  {
    id: 5,
    purpose: JourneyType.WORK,
    title: 'First Job 👨‍💻',
    subtitle: 'Siemens, Pune',
    description: 'Joined siemens as my first company',
    date: 'Apr, 18'
  },
  {
    id: 4,
    purpose: JourneyType.EDUCATION,
    title: 'PG-DAC',
    subtitle: 'Sunbeam, Pune',
    description: 'Completed PG Diploma in Advanced Computing',
    date: 'Aug, 17 - Feb, 18'
  },
  {
    id: 3,
    purpose: JourneyType.EDUCATION,
    title: 'B.Tech (E&TC)',
    subtitle: 'R.I.T. Sangli',
    description: 'Completed B.Tech in Electronics and Communication',
    date: 'Aug, 13 - Jun, 17'
  },
  {
    id: 2,
    purpose: JourneyType.SPECIAL,
    title: 'Robotics Competetion',
    subtitle: 'I.I.T. Mumbai',
    description: 'Won regional competion twice and made it to finalists at National level.',
    date: 'Apr, 16'
  },
  {
    id: 1,
    purpose: JourneyType.SPECIAL,
    title: 'IUCEE - Indo Universal Collaboration for Engineering Education',
    subtitle: 'R.I.T. Sangli',
    description: 'Actively contributed in different initiatives held under IUCEE',
    date: 'Jan, 14'
  },
]