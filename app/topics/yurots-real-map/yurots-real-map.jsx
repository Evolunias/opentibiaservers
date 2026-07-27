import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map');
}

export default function YurotsRealMapKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map" />;
}
