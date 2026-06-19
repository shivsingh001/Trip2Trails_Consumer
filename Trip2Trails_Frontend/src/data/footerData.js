import { SITE_CONFIG } from '../config/siteConfig'

export const QUICK_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cancellation Policy', href: '#' },
]

export const TRIP_LINKS = [
  { label: 'Treks & Trails', href: '#categories' },
  { label: 'Spiti Valley Tour', href: '#categories' },
  { label: 'Weekend Trips from Delhi', href: '#categories' },
  { label: 'Backpacking Trips', href: '#categories' },
  { label: 'Christmas & New Year', href: '#categories' },
  { label: 'Holi Special Trip', href: '#categories' },
]

export const SOCIAL_LINKS = [
  { icon: 'fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fa-whatsapp', href: SITE_CONFIG.links.whatsappGroup, label: 'WhatsApp' },
  { icon: 'fa-youtube', href: '#', label: 'YouTube' },
]

export const CONTACT_ITEMS = [
  {
    icon: 'fa-phone',
    kind: 'link',
    href: `tel:${SITE_CONFIG.contact.phoneE164}`,
    text: SITE_CONFIG.contact.phoneDisplay,
  },
  {
    icon: 'fa-envelope',
    kind: 'link',
    href: `mailto:${SITE_CONFIG.contact.email}`,
    text: SITE_CONFIG.contact.email,
  },
  {
    icon: 'fa-location-dot',
    kind: 'text',
    text: SITE_CONFIG.contact.address,
  },
]
