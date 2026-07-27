import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-real-map-servers');
}

export default function Xanteria100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-real-map-servers" />;
}
