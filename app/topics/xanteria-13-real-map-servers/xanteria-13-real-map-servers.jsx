import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-real-map-servers');
}

export default function Xanteria13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-real-map-servers" />;
}
