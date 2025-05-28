import './styles.css';

function AboutPage({ onNavigate }) {
  const handleDownload = () => {
    // Track download analytics if needed
    console.log('Extension download initiated');
  };

  return (
    <div className="page-container">
      <h2>About Email Leak Checker</h2>
      <p>
        Email Leak Checker is a privacy-focused browser extension designed to help users determine
        whether their email addresses have been exposed in data breaches.
      </p>

      <p>
        It utilizes secure hashing and k-anonymity to interact with trusted breach databases like 
        <strong> Have I Been Pwned </strong> and <strong>DeHashed</strong>, without compromising your personal data.
      </p>

      <p>
        With features like breach detection, disposable email recognition, and real-time alerts, 
        our tool empowers you to proactively monitor your online identity.
      </p>

      <div className="download-section">
        <h3>Download the Extension</h3>
        <p>Click the button below to download the browser extension:</p>
        <a 
          href="/downloads/extension_no_api_key.crx" // import the .crx file from your public folder
          download="email-leak-checker.crx" 
          className="button download-button"
          onClick={handleDownload}
        >
          📥 Download Extension (.crx)
        </a>
        
        <div className="warning-box">
          <h4>⚠️ Important Installation Notice</h4>
          <p>
            Due to Chrome security policies, you cannot install .crx files directly from websites. 
            Please follow the installation instructions below.
          </p>
        </div>
      </div>

      <div className="installation-section">
        <h3>Installation Instructions</h3>
        
        <div className="instruction-method">
          <h4>Method 1: Developer Mode Installation (Recommended)</h4>
          <ol>
            <li>Download the extension file using the button above</li>
            <li>Open Chrome and navigate to <code>chrome://extensions/</code></li>
            <li>Enable "Developer mode" by toggling the switch in the top-right corner</li>
            <li>Click "Load unpacked" button</li>
            <li>Extract the .crx file to a folder and select that folder</li>
            <li>The extension will now appear in your extensions list</li>
          </ol>
        </div>

        <div className="instruction-method">
          <h4>Method 2: Manual Installation</h4>
          <ol>
            <li>Download the .crx file</li>
            <li>Open Chrome and go to <code>chrome://extensions/</code></li>
            <li>Enable "Developer mode"</li>
            <li>Drag and drop the .crx file onto the extensions page</li>
            <li>Click "Add extension" when prompted</li>
          </ol>
        </div>

        <div className="alternative-section">
          <h4>Alternative: Chrome Web Store</h4>
          <p>
            For easier installation, we recommend installing from the Chrome Web Store once available:
          </p>
          <a href="#" className="button store-button" disabled>
            🏪 Chrome Web Store (Coming Soon)
          </a>
        </div>
      </div>

      <div className="troubleshooting-section">
        <h3>Troubleshooting</h3>
        <div className="faq-item">
          <h4>Q: The extension won't install</h4>
          <p>A: Make sure Developer mode is enabled in chrome://extensions/ and try the drag-and-drop method.</p>
        </div>
        <div className="faq-item">
          <h4>Q: Chrome says the extension is not from the Web Store</h4>
          <p>A: This is normal for manually installed extensions. Click "Keep" to continue installation.</p>
        </div>
        <div className="faq-item">
          <h4>Q: The extension disappeared after Chrome restart</h4>
          <p>A: This can happen with .crx files. Try the "Load unpacked" method with the extracted folder instead.</p>
        </div>
      </div>

      <div className="security-notice">
        <h3>🔒 Security & Privacy</h3>
        <p>
          This extension is open-source and designed with privacy in mind. Your email addresses 
          are hashed locally before any network requests, ensuring your personal data never 
          leaves your device in plain text.
        </p>
      </div>

      <div className="center">
        <button className="button" onClick={() => onNavigate('home')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default AboutPage;