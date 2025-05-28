import { useState } from 'react';
import './styles.css';

const DEHASHED_API_KEY = ""; // here is the API key, please replace it with your own

async function v2Search(page, query, size, wildcard, regex, deDupe) {
  const res = await fetch("https://api.dehashed.com/v2/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Dehashed-Api-Key": DEHASHED_API_KEY,
    },
    body: JSON.stringify({
      page: page,
      query: query,
      size: size,
      wildcard: wildcard,
      regex: regex,
      de_dupe: deDupe,
    })
  });
  return await res.json();
}

function HomePage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckEmail = async () => {
    if (!email) {
      setError('Please enter an email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const testResult = await v2Search(
        1, `email:"${email}"`, 1, false, false, true
      );
      setResult(testResult);
    } catch (err) {
      setError('Failed to check email. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="header">
        <h1>Email Leak Checker</h1>
        <p>Protect your online identity by checking if your email has been exposed in data breaches.</p>

        <div className="email-checker">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="email-input"
          />
          <button 
            onClick={handleCheckEmail}
            disabled={isLoading}
            className="button"
          >
            {isLoading ? 'Checking...' : 'Check Email'}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {result && (
          <div className="result-container">
            <h3>Results for {email}:</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="features-section">
        <h2>Why use our extension?</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Email Verification</h3>
            <p>Validates email format and verifies domain mail servers</p>
          </div>
          <div className="card">
            <h3>Breach Detection</h3>
            <p>Checks if your email has appeared in known data breaches</p>
          </div>
          <div className="card">
            <h3>Disposable Email Check</h3>
            <p>Identifies temporary or disposable email addresses</p>
          </div>
          <div className="card">
            <h3>Instant Alerts</h3>
            <p>Provides immediate notifications about your email security</p>
          </div>
        </div>

        <div className="center">
          <button className="button" onClick={() => onNavigate('features')}>
            Learn more about all features
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
