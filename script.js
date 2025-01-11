document.querySelector('form').addEventListener('submit', (e) => {
    const name = e.target.querySelector('[placeholder="Your Name"]').value.trim();
    const email = e.target.querySelector('[type="email"]').value.trim();
    if (!name || !email) {
      e.preventDefault();
      alert('Please fill in all required fields!');
    }
  });
    