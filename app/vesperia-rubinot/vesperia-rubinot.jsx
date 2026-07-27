import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('vesperia-rubinot');
}

export default function VesperiaRubinotPage() {
  return <StaticExactMatchPage slug="vesperia-rubinot" />;
}
