import React from 'react'
import Link from 'next/link'

const AboutPage = props => {
  return (
    <div>
        <h1>AboutPage</h1>
        <Link href={'/experience'} className='pl-24'>To My Experience</Link>
    </div>
    
  )
}

AboutPage.propTypes = {}

export default AboutPage