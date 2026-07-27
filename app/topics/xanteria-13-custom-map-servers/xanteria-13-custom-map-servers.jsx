import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-custom-map-servers');
}

export default function Xanteria13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-custom-map-servers" />;
}
