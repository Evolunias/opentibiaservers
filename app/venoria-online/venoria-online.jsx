import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('venoria-online');
}

export default function VenoriaOnlinePage() {
  return <StaticExactMatchPage slug="venoria-online" />;
}
