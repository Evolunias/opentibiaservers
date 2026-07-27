import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-europe');
}

export default function YurotsRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-europe" />;
}
