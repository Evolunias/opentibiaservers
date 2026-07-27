import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-brazil');
}

export default function XanteriaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-brazil" />;
}
