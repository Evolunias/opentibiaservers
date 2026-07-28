import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('xnova-rl-map-custom-areas');
}

export default function XnovaRlMapCustomAreasPage() {
  return <StaticExactMatchPage slug="xnova-rl-map-custom-areas" />;
}
