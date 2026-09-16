export default function WhatsAppCta({
  href,
  children,
  className = '',
  buttonClassName = '',
  full = false,
  showOnline = true,
  onClick,
  tabIndex,
}) {
  return (
    <div className={`wa-cta${full ? ' wa-cta--full' : ''}${className ? ` ${className}` : ''}`}>
      <a
        className={`btn btn--whatsapp${full ? ' btn--full' : ''}${buttonClassName ? ` ${buttonClassName}` : ''}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {children}
      </a>
      {showOnline ? (
        <span className="wa-cta__online">
          <span className="wa-cta__dot" aria-hidden="true" />
          estamos online
        </span>
      ) : null}
    </div>
  )
}
