import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-real-map-servers');
}

export default function Xanteria11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-real-map-servers" />;
}
