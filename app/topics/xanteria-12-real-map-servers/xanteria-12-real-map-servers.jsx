import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-real-map-servers');
}

export default function Xanteria12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-real-map-servers" />;
}
