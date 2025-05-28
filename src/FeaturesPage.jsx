import './styles.css';

function FeaturesPage({ onNavigate }) {
  return (
    <div className="page-container">
      <h2>Extension Features</h2>

      <div className="features-list">
        <div className="card">
          <h3>Email Breach Detection</h3>
          <p>Using the Have I Been Pwned database, our extension checks if your email has been exposed in breaches.</p>
        </div> 

        <div className="card">
          <h3>Advanced Email Verification</h3>
          <ul>
            <li>Email syntax and format validation</li>
            <li>Domain existence and mail server detection</li>
            <li>Disposable email detection</li>
            <li>Free provider recognition</li>
          </ul>
        </div>

        <div className="card">
          <h3>Instant Browser Notifications</h3>
          <ul>
            <li>Breaches detected</li>
            <li>Invalid format</li>
            <li>No mail servers found</li>
            <li>Disposable service warning</li>
          </ul>
        </div>

        <div className="card">
          <h3>Privacy-First Design</h3>
          <ul>
            <li>SHA-1 hashing with k-anonymity</li>
            <li>No email data stored</li>
            <li>Local operations preferred</li>
            <li>Minimal API calls</li>
          </ul>
        </div>
      </div>

      <div className="center">
        <button className="button" onClick={() => onNavigate('home')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default FeaturesPage;
