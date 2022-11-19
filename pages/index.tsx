import { Analytics } from '@vercel/analytics/react';

import Head from 'next/head'

import { Space_Grotesk } from '@next/font/google'
import TopBottomBar from '../components/TopBottomBar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Form from '../components/Form'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Moro Samuele - Stylish Front-end Developer</title>

        <meta name="author" content="Moro Samuele" />
        <meta name="description" content="Moro Samuele - Stylish Front-end developer. All my works are made with NextJS and a bit of love"></meta>
        <meta name="keywords" content="Front-end developer, developer, front-end, javascript, react, nextjs, next, html, css"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${spaceGrotesk.className}`}>
        <header>
          <TopBottomBar />
        </header>

        <Hero />

        <div className="wrapper">
          <Skills />

          <Projects />
        </div>

        <section className="body__contactContent">
          <div className="contactContent__contactContainer">
            <div className="contactForm__titleContent">
              <section id="contactMe"></section>
              <h3>Contact</h3>
              <p>
                Fill out the contact form for any information and I will reply as soon as possible. If you have some time, visit my social networks to find out more about me.
              </p>
            </div>

            <Form />
          </div>
        </section>

        <Analytics />

        <footer>
          <TopBottomBar />
        </footer>
      </div>
    </>
  )
}
