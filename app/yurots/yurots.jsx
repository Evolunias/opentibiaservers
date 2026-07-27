import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('yurots');
}

export default function YurotsPage() {
  return <StaticExactMatchPage slug="yurots" />;
}
