import { redirect } from 'next/navigation'

export default function BlogRedirect() {
  // Redirect to Docusaurus blog
  redirect('/blog/')
}
