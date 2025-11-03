export default function KubernetesIcon({ className }: { className?: string }) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
    >
        <title>Kubernetes</title>
        {/* hexagon */}
        <polygon points="12,2 20,6.5 20,17.5 12,22 4,17.5 4,6.5" fill="#326CE5" />
        {/* wheel center */}
        <circle cx="12" cy="12" r="2.2" fill="#fff" />
        {/* spokes */}
        <g stroke="#fff" strokeWidth="0.9" strokeLinecap="round">
            <line x1="12" y1="4.2" x2="12" y2="7" />
            <line x1="12" y1="17" x2="12" y2="19.8" />
            <line x1="16.2" y1="6.2" x2="14.2" y2="8.2" />
            <line x1="9.8" y1="15.8" x2="7.8" y2="17.8" />
            <line x1="16.2" y1="17.8" x2="14.2" y2="15.8" />
            <line x1="9.8" y1="8.2" x2="7.8" y2="6.2" />
        </g>
    </svg>
  );
}
