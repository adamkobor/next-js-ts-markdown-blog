import React from 'react'
import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col items-center lg:items-start">
          <h3
            className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            About me
          </h3>
          <p>I'm X, the author of this blog.
          </p>
          <p>Opinions are my own.</p>
          <div className="py-10 flex-row">
            <a href="https://your.social.link1" target="_blank" rel="noreferrer noopener">Social Link1</a> |
            <a href="https://your.social.link2" target="_blank" rel="noreferrer noopener">Social Link2</a>
          </div>
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
            <img alt="Creative Commons License" style={{borderWidth: 0}}
                 src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"/>
          </a><br/>
          <span className="text-xs">
            This work is licensed under a </span>
          <a className="text-xs" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 International License
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
