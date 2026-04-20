import { redirect } from 'next/navigation'

// Middleware will redirect / to /tr, but this is a safety catch
export default function RootPage() {
  redirect('/tr')
}
