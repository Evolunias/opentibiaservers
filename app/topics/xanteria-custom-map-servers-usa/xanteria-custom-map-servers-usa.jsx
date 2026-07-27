import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-usa');
}

export default function XanteriaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-usa" />;
}
