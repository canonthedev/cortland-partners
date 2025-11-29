-- Create consultations table for storing consultation requests
CREATE TABLE IF NOT EXISTS consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  legal_matter VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending, contacted, scheduled, closed
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert consultations
CREATE POLICY "Allow anyone to insert consultations" ON consultations
  FOR INSERT
  WITH CHECK (true);

-- Allow only authenticated users to view consultations
CREATE POLICY "Allow authenticated users to view consultations" ON consultations
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create index on email for faster lookups
CREATE INDEX idx_consultations_email ON consultations(email);

-- Create index on created_at for ordering
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
