import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-mexico');
}

export default function XanteriaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-mexico" />;
}
