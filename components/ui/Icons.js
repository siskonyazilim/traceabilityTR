/* eslint-disable react/prop-types */

const baseProps = (size, className) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  className,
  'aria-hidden': 'true',
});

export function IconChevronLeft({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronRight({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronDown({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconX({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlus({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowLeft({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowRight({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M22 16.92V20A2 2 0 0 1 19.82 22C9.9 22 2 14.1 2 4.18A2 2 0 0 1 4 2H7.09A2 2 0 0 1 9.06 3.64L10.14 8.32A2 2 0 0 1 9.58 10.24L7.98 11.84A16 16 0 0 0 12.16 16.02L13.76 14.42A2 2 0 0 1 15.68 13.86L20.36 14.94A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}



export function IconLinkedIn({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 16 12A2 2 0 0 0 14 14V21H10V9H14V11A4 4 0 0 1 16 8Z" fill="currentColor" stroke="none" />
      <rect x="2" y="9" width="4" height="12" fill="currentColor" />
      <circle cx="4" cy="4" r="2" fill="currentColor" />
    </svg>
  );
}

export function IconInstagram({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M14 8H16V4H13C10.24 4 8 6.24 8 9V12H6V16H8V22H12V16H15L16 12H12V9C12 8.45 12.45 8 13 8H14Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconQrCode({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
      <path d="M14 14H17V17H14V14Z" fill="currentColor" />
      <path d="M17 17H21V21H17V17Z" fill="currentColor" />
      <path d="M14 19H16V21H14V19Z" fill="currentColor" />
      <path d="M19 14H21V16H19V14Z" fill="currentColor" />
    </svg>
  );
}

export function IconBarcode({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="3" y="4" width="2" height="16" fill="currentColor" />
      <rect x="6" y="4" width="1" height="16" fill="currentColor" />
      <rect x="8" y="4" width="3" height="16" fill="currentColor" />
      <rect x="12" y="4" width="1" height="16" fill="currentColor" />
      <rect x="14" y="4" width="2" height="16" fill="currentColor" />
      <rect x="17" y="4" width="1" height="16" fill="currentColor" />
      <rect x="19" y="4" width="2" height="16" fill="currentColor" />
    </svg>
  );
}

export function IconTarget({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function IconClockCircle({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7V12L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCubes({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="3" y="4" width="7" height="7" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="4" width="7" height="7" stroke="currentColor" strokeWidth="2" />
      <rect x="8.5" y="13" width="7" height="7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconCogs({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <circle cx="9" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 9V7M9 21V19M4 14H2M16 14H14M16 4V2M16 16V14M21 9H19M13 9H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconHistory({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M3 12A9 9 0 1 0 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 4V8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCube({ size = 20, className = '' }) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 7L12 11L20 7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 11V21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
