import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-real-map-servers');
}

export default function Xanteria15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-real-map-servers" />;
}
