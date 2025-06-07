import ContentLayout from '@/components/layout/ContentLayout';
import FacultyTabs from '@/components/ui/sections/FacultyTabs';
import { Users } from 'lucide-react';

export default function FacultiesPage() {
  return (
    <ContentLayout
      title="Faces Behind the Wisdom"
      subtitle="Explore our dedicated faculty — nurturing minds through discipline, compassion, and clarity."
      icon={<Users size={32} />}
    >
      <FacultyTabs />
    </ContentLayout>
  );
}
