import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('trimera');
}

export default function TrimeraPage() {
  return <StaticExactMatchPage slug="trimera" />;
}
