import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('vantoria-net-start-13-02-2026');
}

export default function VantoriaNetStart13022026Page() {
  return <StaticExactMatchPage slug="vantoria-net-start-13-02-2026" />;
}
