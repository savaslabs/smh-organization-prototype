import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© Share My Health { currentYear }</p>
        <nav>
          <ul className="menu--footer">
            { /* @todo: replace with Link elements if we create these pages. */ }
            <li><a href="/">Help</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Updates</a></li>
            <li><a href="/">Policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
