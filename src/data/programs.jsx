import fluencyBridgeImage from '../assets/Fluency Bridge.webp';
import nzAcademicBridgeImage from '../assets/NZ Academic Bridge.webp';
import fluencyBridgeLogo from '../assets/fluency-bridge-logo.webp';
import nzAcademicBridgeLogo from '../assets/nz-academic-bridge-logo.webp';

// badge.positionClass and iconPositionClass are kept on opposite top corners of the card image
export const programs = [
  {
    id: 'fluency-bridge',
    accentColor: 'var(--custom-green)',
    accentShadow: 'rgba(78,166,117,0.2)',
    image: fluencyBridgeImage,
    imageAlt: 'Coaching',
    logo: fluencyBridgeLogo,
    logoAlt: 'Fluency Bridge logo',
    badge: { value: '100%', label: 'Natural Method', positionClass: 'right-6', rotationClass: 'rotate-0' },
    iconPositionClass: 'left-4',
    title: 'Fluency Bridge',
    description:
      'Elite frontline program focusing on high-performance English communication coaching for professionals and international students.',
    buttonText: 'Explore coaching',
  },
  {
    id: 'nz-academic-bridge',
    accentColor: 'var(--custom-blue)',
    accentShadow: 'rgba(0,74,204,0.2)',
    image: nzAcademicBridgeImage,
    imageAlt: 'Academic',
    logo: nzAcademicBridgeLogo,
    logoAlt: 'NZ Academic Bridge logo',
    badge: { value: '100%', label: 'Free Placement', positionClass: 'left-6', rotationClass: 'rotate-0' },
    iconPositionClass: 'right-4',
    title: 'NZ Academic Bridge',
    description:
      'Dedicated branding branch to execute international student recruitment, tertiary placement, and career transition consultancy.',
    buttonText: 'Explore consultancy',
  },
];
