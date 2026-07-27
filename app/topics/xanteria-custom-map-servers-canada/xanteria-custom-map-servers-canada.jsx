import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-canada');
}

export default function XanteriaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-canada" />;
}
