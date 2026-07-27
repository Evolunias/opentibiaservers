import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-canada');
}

export default function YurotsRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-canada" />;
}
