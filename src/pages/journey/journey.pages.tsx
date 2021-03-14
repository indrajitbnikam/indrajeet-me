import Layout from '../../components/layout/layout.component';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './journey.scss';
import { JourneyData } from './jouney.data';
import { ReactComponent as SuitcaseIcon } from '../../assets/suitcase-icon.svg';
import { ReactComponent as EducationIcon } from '../../assets/education-icon.svg';
import { ReactComponent as StarIcon } from '../../assets/star-icon.svg'
import { JourneyType } from './journey.types';

const JourneyPage = () => {
  const getIcon = (purpose: JourneyType) => {
    switch (purpose) {
      case JourneyType.EDUCATION:
        return <EducationIcon />

      case JourneyType.WORK:
        return <SuitcaseIcon />

      case JourneyType.SPECIAL:
        return <StarIcon />
      default:
        break;
    }
  }

  return (
    <Layout title='My Journey'>
      <VerticalTimeline layout='2-columns' className="vertical-timeline-custom-line">
        {
          JourneyData.map(journey => (
            <VerticalTimelineElement
              key={journey.id}
              className={`vertical-timeline-element--${journey.purpose}`}
              date={journey.date}
              icon={getIcon(journey.purpose)}
            >
              <h3 className="vertical-timeline-element-title">{journey.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{journey.subtitle}</h4>
              <p>
                {journey.description}
              </p>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </Layout>
  )
};

export default JourneyPage;