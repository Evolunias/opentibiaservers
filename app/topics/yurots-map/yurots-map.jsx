import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-map');
}

export default function YurotsMapKeywordPage() {
  return <StaticKeywordPage slug="yurots-map" />;
}
