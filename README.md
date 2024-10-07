# Vitians.in

![Vitians.in Logo](https://github.com/upayanmazumder/vitians.in/assets/logo.png)

Vitians.in is a community-driven platform designed for students and alumni of Vellore Institute of Technology (VIT). The platform serves as a hub for Vitians to connect, collaborate, and stay informed about events, opportunities, and other campus-related activities.

**Status**: 🚧 In Development

## Features (Planned)

- 📰 **News & Announcements**: Stay up-to-date with the latest news, events, and announcements at VIT.
- 💬 **Community Forums**: Engage in discussions, share ideas, and collaborate with other Vitians.
- 📅 **Event Calendar**: Explore upcoming events, fests, and opportunities on campus.
- 🎓 **Alumni Network**: Connect with alumni and grow your professional network.
- 📝 **Resources**: Access helpful study materials, guides, and notes.
- ⚙️ **User Profiles**: Personalized profiles for students and alumni.
- 🔒 **Authentication**: Secure login for VIT students and alumni.

## Tech Stack

- **Frontend**: [Qwik](https://qwik.builder.io/)
- **Backend**: Node.js, Express, Firebase
- **Database**: Firestore (NoSQL)
- **Authentication**: Firebase Auth
- **Deployment**: Cloudflare Pages
  
## Project Structure

## Installation & Development

### Prerequisites

- [Node.js](https://nodejs.org/)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/upayanmazumder/vitians.in.git
   cd vitians.in
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:
   - Login to Firebase:

     ```bash
     firebase login
     ```

   - Initialize Firebase:

     ```bash
     firebase init
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The project will run at `http://localhost:3000`.

### Deployment

To deploy the frontend:

```bash
vercel --prod
```

To deploy the backend (Firebase Functions):

```bash
firebase deploy --only functions
```

## Contributing

Contributions are welcome! If you'd like to contribute to Vitians.in, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
