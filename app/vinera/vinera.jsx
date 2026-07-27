import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('vinera');
}

export default function VineraPage() {
  return <StaticExactMatchPage slug="vinera" />;
}
