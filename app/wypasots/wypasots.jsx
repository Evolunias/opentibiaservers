import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('wypasots');
}

export default function WypasotsPage() {
  return <StaticExactMatchPage slug="wypasots" />;
}
