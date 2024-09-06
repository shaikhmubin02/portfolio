import ThoughtsPage from '@/components/Thoughts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thoughts | Mubin",
  description: "Mubin is a developer.",
};

export default function page() {
  return (
      <ThoughtsPage />
  );
}