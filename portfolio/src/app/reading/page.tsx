import ReadingPage from '@/components/Reading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reading | Mubin",
  description: "Mubin is a developer.",
};

export default function page() {
  return (
      <ReadingPage />
  );
}