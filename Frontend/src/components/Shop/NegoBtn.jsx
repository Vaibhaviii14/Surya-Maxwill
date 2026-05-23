import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function NegoBtn() {
  const tgtNum = "14155238886"
  const txtCmd = "negotiate"
  const waUrl = `https://wa.me/${tgtNum}?text=${encodeURIComponent(txtCmd)}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="negotiate-btn"
      title="Negotiate Price"
    >
      <MessageCircle size={18} />
    </a>
  )
}

