import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-real-map-servers');
}

export default function Xanteria84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-real-map-servers" />;
}
