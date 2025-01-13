import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  currentPage: string;
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 mb-8 text-breadcrumb-small text-gray-600 desktop:text-breadcrumb">
      <Link to="/" className="hover:underline">Home</Link>
      <span className="text-gray-400">&gt;</span>
      <span className="text-gray-800 font-medium truncate ...">{currentPage}</span>
    </div>
  );
} 