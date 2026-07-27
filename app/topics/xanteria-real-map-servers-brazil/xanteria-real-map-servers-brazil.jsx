import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-brazil');
}

export default function XanteriaRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-brazil" />;
}
