function FloatingContact() {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      <a
        href="https://api.whatsapp.com/send?phone=8613253247773"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm shadow-md hover:bg-amber-600 transition-colors"
        title="WhatsApp Us"
      >
        💬
      </a>
      <a
        href="tel:+8613253247773"
        className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm shadow-md hover:bg-amber-600 transition-colors"
        title="Call Us: +86 13253247773"
      >
        📞
      </a>
      <a
        href="mailto:sales@redstarwiremesh.com"
        className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm shadow-md hover:bg-amber-600 transition-colors"
        title="Email Sales"
      >
        ✉️
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm shadow-md hover:bg-amber-600 transition-colors"
        title="Back to top"
      >
        ▲
      </a>
    </div>
  )
}

export default FloatingContact
