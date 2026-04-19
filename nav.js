class MainNavigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <a href="index.html" class="nav-link" id="nav-calculator">Calculator</a>
        <a href="feedback.html" class="nav-link" id="nav-feedback">Feedback</a>
      </nav>
    `;

    const currentPath = window.location.pathname;
    
    if (currentPath.includes('feedback.html')) {
      this.querySelector('#nav-feedback').classList.add('active');
    } else {
      // Default to calculator as active for index.html or root
      this.querySelector('#nav-calculator').classList.add('active');
    }
  }
}

customElements.define('main-navigation', MainNavigation);
