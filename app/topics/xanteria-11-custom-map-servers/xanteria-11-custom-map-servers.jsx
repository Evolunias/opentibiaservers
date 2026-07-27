import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-custom-map-servers');
}

export default function Xanteria11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-custom-map-servers" />;
}
