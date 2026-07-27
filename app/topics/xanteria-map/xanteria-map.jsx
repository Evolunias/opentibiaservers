import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-map');
}

export default function XanteriaMapKeywordPage() {
  return <StaticKeywordPage slug="xanteria-map" />;
}
