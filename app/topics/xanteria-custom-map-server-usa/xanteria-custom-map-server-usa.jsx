import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-usa');
}

export default function XanteriaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-usa" />;
}
