import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('vestia-forever');
}

export default function VestiaForeverPage() {
  return <StaticExactMatchPage slug="vestia-forever" />;
}
