import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map');
}

export default function XanteriaRealMapKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map" />;
}
