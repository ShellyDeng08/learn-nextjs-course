import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <Link href={'/about'}>To About</Link>
      <Link href={'/about/experience'}>To My Experience</Link>
    </main>
  )
}
