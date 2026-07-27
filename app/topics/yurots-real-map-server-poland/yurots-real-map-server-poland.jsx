import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-poland');
}

export default function YurotsRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-poland" />;
}
