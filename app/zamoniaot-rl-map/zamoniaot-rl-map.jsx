import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('zamoniaot-rl-map');
}

export default function ZamoniaotRlMapPage() {
  return <StaticExactMatchPage slug="zamoniaot-rl-map" />;
}
