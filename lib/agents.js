// This repository serves one agent only: Bec Allen.
// Sender's Rex email -> the agent's filter slug on the McKean McGregor listings page.
// An email that is not listed here shows nothing and links to the main listings page.

export const AGENTS = {
  'bec@mckeanmcgregor.com.au': 'bec-allen',
};

export function slugForEmail(email) {
  return AGENTS[String(email || '').trim().toLowerCase()] || '';
}
