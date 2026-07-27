import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-mexico');
}

export default function XanteriaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-mexico" />;
}
