import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-uk');
}

export default function YurotsRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-uk" />;
}
