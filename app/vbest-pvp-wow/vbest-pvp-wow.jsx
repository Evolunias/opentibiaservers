import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('vbest-pvp-wow');
}

export default function VbestPvpWowPage() {
  return <StaticExactMatchPage slug="vbest-pvp-wow" />;
}
