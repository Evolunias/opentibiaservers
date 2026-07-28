import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('valmor');
}

export default function ValmorPage() {
  return <StaticExactMatchPage slug="valmor" />;
}
