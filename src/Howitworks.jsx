import './HowItWorksPage.css';
const steps = [
  {
    title: "Enter Your Email",
    description: "Simply click on the extension icon and enter the email address you want to check in the popup interface.",
  },
  {
    title: "Email Format Verification",
    description: "The extension first validates the email format using robust pattern matching. Then it connects to the Email Verification API to check if the domain has valid mail servers.",
  },
  {
    title: "Security Check",
    description: "If the email passes initial validation, the extension securely hashes your email and checks it against known data breaches using the 'Have I Been Pwned' database. This process uses k-anonymity to protect your email address.",
  },
  {
    title: "Instant Results",
    description: "You'll receive immediate feedback about:",
    list: [
      "Email format validity",
      "Mail server status",
      "Whether the email is from a disposable service",
      "If the email has appeared in any known data breaches",
    ],
  },
];

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">How It Works</h2>

      <div className="timeline-wrapper">
        <div className="timeline-line"></div>

        <div className="timeline-steps">
          {steps.map((step, index) => (
            <div className="timeline-step" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {step.list && (
                  <ul className="step-list">
                    {step.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default HowItWorks;
