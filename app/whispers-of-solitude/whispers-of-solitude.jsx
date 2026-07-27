import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('whispers-of-solitude');
}

export default function WhispersOfSolitudePage() {
  return <StaticExactMatchPage slug="whispers-of-solitude" />;
}
