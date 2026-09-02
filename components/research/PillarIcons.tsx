// Minimal geometric SVG icons for each research pillar

export function CellIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="10" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="36.5" cy="17" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="36.5" cy="31" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="24" cy="38" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="11.5" cy="31" r="2.5" fill="currentColor" opacity="0.5" />
      <circle cx="11.5" cy="17" r="2.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function DNAIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 8C16 8 20 14 24 16C28 18 32 24 32 24C32 24 28 30 24 32C20 34 16 40 16 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 8C32 8 28 14 24 16C20 18 16 24 16 24C16 24 20 30 24 32C28 34 32 40 32 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="17.5" y1="17" x2="30.5" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14.5" y1="24" x2="33.5" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17.5" y1="31" x2="30.5" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function TissueIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="25" y="14" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="14" y="25" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="25" y="25" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function RobotIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="18" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="23" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="26" y="23" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="17" y1="33" x2="31" y2="33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="24" y1="10" x2="24" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="9" r="2" stroke="currentColor" strokeWidth="1.2" />
      <line x1="6" y1="26" x2="12" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="26" x2="42" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="22" x2="6" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="42" y1="22" x2="42" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
