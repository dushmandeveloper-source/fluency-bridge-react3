import fluencyBridgeImage from '../assets/Fluency Bridge.png';
import nzAcademicBridgeImage from '../assets/NZ Academic Bridge.png';
import fluencyBridgeLogo from '../assets/fluency-bridge-logo.png';
import nzAcademicBridgeLogo from '../assets/nz-academic-bridge-logo.png';

export const programs = [
  {
    id: 'fluency-bridge',
    accentColor: 'var(--custom-green)',
    accentShadow: 'rgba(78,166,117,0.2)',
    glowColor: 'rgba(78,166,117,0.55)',
    floatClass: 'float-fast',
    animationDelay: undefined,
    image: fluencyBridgeImage,
    imageAlt: 'Coaching',
    imageAspect: '2752 / 1536',
    logo: fluencyBridgeLogo,
    logoAlt: 'Fluency Bridge logo',
    logoPositionClass: 'left-6',
    logoFloatClass: 'float-slow',
    badge: { value: '100%', label: 'Natural Method', positionClass: 'right-6', rotationClass: 'rotate-3' },
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    iconPositionClass: 'left-10',
    title: 'Fluency Bridge',
    description:
      'Elite frontline program focusing on high-performance English communication coaching for professionals and international students.',
    buttonText: 'Explore coaching',
  },
  {
    id: 'nz-academic-bridge',
    accentColor: 'var(--custom-blue)',
    accentShadow: 'rgba(0,74,204,0.2)',
    glowColor: 'rgba(0,74,204,0.55)',
    floatClass: 'float-slow',
    animationDelay: '1s',
    image: nzAcademicBridgeImage,
    imageAlt: 'Academic',
    imageAspect: '1476 / 704',
    logo: nzAcademicBridgeLogo,
    logoAlt: 'NZ Academic Bridge logo',
    logoPositionClass: 'right-6',
    logoFloatClass: 'float-fast',
    badge: { value: 'Zero', label: 'Placement Fee', positionClass: 'left-6', rotationClass: '-rotate-3' },
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </>
    ),
    iconPositionClass: 'right-10',
    title: 'NZ Academic Bridge',
    description:
      'Dedicated branding branch to execute international student recruitment, tertiary placement, and career transition consultancy.',
    buttonText: 'Explore consultancy',
  },
];
