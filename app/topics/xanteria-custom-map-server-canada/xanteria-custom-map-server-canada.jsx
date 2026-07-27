import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-canada');
}

export default function XanteriaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-canada" />;
}
