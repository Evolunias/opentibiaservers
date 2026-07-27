import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('veylaria-8-6');
}

export default function Veylaria86Page() {
  return <StaticExactMatchPage slug="veylaria-8-6" />;
}
