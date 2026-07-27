import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-north-america');
}

export default function YurotsRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-north-america" />;
}
