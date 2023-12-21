import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen center p-24">
      <Link href={'/about'}>To About</Link>
      <Link href={'/about/experience'} className='pl-24'>To My Experience</Link>
    </main>
  )
}
