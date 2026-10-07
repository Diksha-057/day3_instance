import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps Demo</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <h1>Welcome to My React App 🚀</h1>

          <p>
            This is a simple React application deployed on an AWS EC2 instance.
          </p>

          <button>Learn DevOps</button>
        </section>

        <section className="cards" id="about">
          <div className="card">
            <h3>⚛️ React</h3>
            <p>
              A simple frontend application created using React.
            </p>
          </div>

          <div className="card">
            <h3>☁️ AWS EC2</h3>
            <p>
              The application can be hosted and served from an EC2 instance.
            </p>
          </div>

          <div className="card">
            <h3>🔧 DevOps</h3>
            <p>
              Learn how to build, deploy and manage applications.
            </p>
          </div>
        </section>

        <section className="status">
          <h2>Deployment Status</h2>

          <p>
            <span className="status-dot"></span>
            Application is running
          </p>
        </section>
      </main>

      <footer id="contact">
        <p>© 2026 DevOps Demo | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
