# Cortland Partners - Premium Law Firm Website

A modern, minimalistic website for Cortland Partners, a leading law firm in Nigeria offering comprehensive legal services.

## Features

- **Responsive Design**: Mobile-first approach with elegant minimalistic layout
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Multi-page Structure**: Organized pages for Home, About, Services, Team, and Contact
- **Consultation Form**: Integrated form with email notifications via Nodemailer
- **Modern UI**: Built with Next.js 15, React 19, and Tailwind CSS
- **Professional Navigation**: Clean header with mobile menu support

## Pages

- **Home** (`/`): Hero section with firm overview and call-to-action
- **About** (`/about`): Firm description, values, and commitment to excellence
- **Services** (`/services`): Comprehensive list of 12 practice areas
- **Team** (`/team`): Information about partners and legal professionals
- **Contact** (`/contact`): Consultation form and contact information

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, dark mode with next-themes
- **Email Service**: Nodemailer (SMTP)
- **UI Components**: Radix UI, Shadcn/UI
- **Icons**: Lucide React

## Environment Variables

Required environment variables for email functionality:

\`\`\`
SMTP_HOST=your_smtp_host
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@yourdomain.com
SMTP_PASS=your_email_password_or_app_password
SMTP_FROM_EMAIL=your_email@yourdomain.com
CORTLAND_EMAIL=info@cortlandpartnersng.com
\`\`\`

### Email Provider Setup:
For Zoho Mail:
1. Log in to your Zoho Mail account
2. Go to Settings → Security → App Passwords
3. Generate a new app password
4. Use these values in the SMTP environment variables

For other providers (Gmail, Outlook, etc.):
- Use your email provider's SMTP settings
- For Gmail: Use app-specific password with 2FA enabled

## Setup & Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd cortland-partners
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   - Add the SMTP environment variables in your Vercel project settings (or `.env.local` for local development)
   - Configure your email provider (Zoho, Gmail, etc.) SMTP credentials

4. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open in browser**
   - Navigate to \`http://localhost:3000\`

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add all SMTP environment variables in Vercel project settings
4. Deploy with a single click

\`\`\`bash
vercel deploy
\`\`\`

## How the Consultation Form Works

The consultation form has a complete email flow:

1. **Client Submits Form**: User fills out the consultation form on the Contact page
2. **Firm Notification**: Firm receives email with full inquiry details (name, contact info, legal matter, message)
3. **Client Confirmation**: Client receives confirmation email acknowledging receipt of their inquiry
4. **Expected Response**: Firm follows up with client within 24 hours

Emails are sent from your configured SMTP email address, ensuring professional branding and reliable delivery.

## Email Notifications

The consultation form sends two emails automatically:

### Client Receives:
- Immediate confirmation of their consultation request
- Reference details of their inquiry
- Expected contact timeline (within 24 hours)
- Firm contact information

### Firm Receives:
- Complete inquiry details including client contact information
- Practice area specified
- Full message content
- Timestamp for organization and follow-up

All emails are sent from your configured SMTP email address with professional formatting.

## Dark Mode

Dark mode is enabled with system theme detection. Users can toggle between light and dark themes using the button in the header.

## Contributing

For updates or bug reports, please contact the development team.

## License

© 2025 Cortland Partners. All rights reserved.
