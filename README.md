# 📧 Email Leak Checker Chrome Extension

> A privacy-focused Chrome extension that allows users to verify whether their email addresses have been exposed in data breaches — powered by React, SHA-1 hashing, and secure API integrations.

---

## 🚀 Overview

The **Email Leak Checker** is a browser-based extension designed to help users take control of their online identity. It leverages third-party APIs like **Have I Been Pwned** and **DeHashed** to check email exposure in breaches while preserving user privacy using **SHA-1 hashing** and **k-anonymity**. Built with **React.js**, this tool delivers a fast, modern, and secure user experience.

---

## 🎯 Features

- ✅ **Breach Detection** – Real-time check against breach databases.
- 🛡️ **Privacy First** – Local SHA-1 hashing with no raw email ever sent.
- 📬 **Disposable Email Detection** – Flags temporary or throwaway email providers.
- 🧪 **Email Format Validation** – Ensures syntax and domain validity.
- 📢 **Instant Feedback** – In-browser alerts and result previews.
- 🧩 **Manual Installation Support** – Easily install as a Chrome extension (.crx).

---

## 🧱 Tech Stack

| Layer      | Technologies Used                                    |
|------------|------------------------------------------------------|
| Frontend   | React.js, HTML5, CSS Modules, Lucide Icons           |
| Logic/API  | JavaScript (ES6+), Fetch API, SHA-1 Hashing          |
| Integration| DeHashed API, Have I Been Pwned API (conceptual use) |
| Platform   | Chrome Extension APIs                                |

---

## 📸 Screenshots

| Page         | Description                              |
|--------------|------------------------------------------|
| Home Page    | Input email and see breach results       |
| Features     | Card-style view of extension capabilities|
| How It Works | Timeline explaining app process          |
| About Page   | Download button + manual install guide   |

> Screenshots will be added soon!

---

## 📦 Installation

### 🔧 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/email-leak-checker.git
   cd email-leak-checker


2. 📦 Install Dependencies

   ```bash
   npm install
3. 🧪 Run the Project

   ```bash
   npm start

---

## 🧩 Chrome Extension Installation

1. Download the `.crx` build
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked** and select the extracted extension folder

---

## ✅ Test Cases

| Input                  | Expected Output                     |
|------------------------|--------------------------------------|
| `test@example.com`     | Breach details shown                |
| `secure@mail.com`      | Message: No breach detected         |
| `invalid@`             | Error: Invalid email format         |
| *(empty)*              | Prompt: Enter an email address      |
| `temp@disposable.com`  | Warning: Disposable email usage     |

---

## 🔮 Future Enhancements

- 🔐 Auto-detect emails on login pages  
- 🌙 Dark mode support  
- 📊 Breach history and analytics  
- 🔑 Password manager integration  

---

## 📌 Conclusion

The Email Leak Checker is a lightweight, secure Chrome extension built with privacy at its core. It empowers users to take control of their online identity with ease and confidence.

---

## 👨‍💻 Author

**Purab Jana**  
Roll: 2305956  
KIIT Deemed to be University

---

## 📄 License

This project is licensed under the **MIT License**.
