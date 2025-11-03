export default function OciIcon({ className }: { className?: string }) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden   ="true"
    >
        <title>Oracle Cloud (OCI)</title>
        {/* Outer ring */}
        <circle cx="12" cy="12" r="10" fill="#F15A24" />
        {/* Inner ring to create the 'O' effect */}
        <circle cx="12" cy="12" r="6.2" fill="#fff" />
        <circle cx="12" cy="12" r="4.2" fill="#F26B2E" />
    </svg>
  );
}
