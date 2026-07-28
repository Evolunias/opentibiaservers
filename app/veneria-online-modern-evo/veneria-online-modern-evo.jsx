import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('veneria-online-modern-evo');
}

export default function VeneriaOnlineModernEvoPage() {
  return <StaticExactMatchPage slug="veneria-online-modern-evo" />;
}
