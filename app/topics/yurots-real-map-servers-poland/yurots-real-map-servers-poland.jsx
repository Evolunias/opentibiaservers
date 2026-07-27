import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-poland');
}

export default function YurotsRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-poland" />;
}
