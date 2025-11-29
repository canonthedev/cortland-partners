# Cortland Partners - Premium Law Firm Website

A modern, minimalistic website for Cortland Partners, a leading law firm in Nigeria offering comprehensive legal services.

## Features

- **Responsive Design**: Mobile-first approach with elegant minimalistic layout
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Multi-page Structure**: Organized pages for Home, About, Services, Team, and Contact
- **Consultation Form**: Integrated form with Supabase database storage and Zoho SMTP email notifications
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
- **Database**: Supabase (PostgreSQL)
- **Email Service**: Zoho SMTP via Nodemailer
- **UI Components**: Radix UI, Shadcn/UI
- **Icons**: Lucide React

## Environment Variables

Required environment variables:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
ZOHO_SMTP_HOST=smtp.zoho.com
ZOHO_SMTP_PORT=465
ZOHO_SMTP_USER=your_zoho_email@yourdomain.com
ZOHO_SMTP_PASSWORD=your_zoho_app_password
CORTLAND_EMAIL=info@cortlandpartnersng.com
\`\`\`

### How to Get Zoho App Password:
1. Log in to your Zoho Mail account
2. Go to Settings → Security → App Passwords
3. Generate a new app password for "Nodemailer" or your app
4. Use this password (NOT your regular password) in `ZOHO_SMTP_PASSWORD`

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
   - Add the required environment variables in your Vercel project settings
   - For Zoho SMTP, generate an app password in your Zoho account

4. **Create database schema**
   - Run the migration script in the `/scripts` folder to create the consultations table

5. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open in browser**
   - Navigate to \`http://localhost:3000\`

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add all environment variables (Supabase + Zoho SMTP) in Vercel project settings
4. Deploy with a single click

\`\`\`bash
vercel deploy
\`\`\`

## How the Consultation Form Works

The consultation form has a complete flow:

1. **Client Submits Form**: User fills out the consultation form on the Contact page
2. **Data Stored**: Submission is saved to Supabase database for tracking and follow-up
3. **Firm Notification**: Firm receives email with full inquiry details via Zoho SMTP
4. **Client Confirmation**: Client receives confirmation email via Zoho SMTP
5. **Manual Follow-up**: Firm staff access the Supabase dashboard to manage consultations

Emails are sent directly from your Zoho domain email address, ensuring professional branding and better deliverability.

## Database Schema

### Consultations Table
\`\`\`sql
CREATE TABLE consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  legal_matter VARCHAR(255),
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## Email Integration with Zoho SMTP

The consultation form uses Zoho SMTP for reliable email delivery directly from your domain:

### Client Receives:
- Immediate confirmation of their consultation request
- Reference details of their inquiry
- Expected contact timeline (within 24 hours)

### Firm Receives:
- Complete inquiry details including client contact information
- Practice area specified
- Full message content
- Timestamp for organization and follow-up

All emails are sent from your Zoho domain email address with professional formatting.

## Dark Mode

Dark mode is enabled with system theme detection. Users can toggle between light and dark themes using the button in the header.

## Contributing

For updates or bug reports, please contact the development team.

## License

© 2025 Cortland Partners. All rights reserved.
