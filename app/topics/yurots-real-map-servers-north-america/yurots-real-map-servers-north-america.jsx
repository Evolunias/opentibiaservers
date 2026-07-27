import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-north-america');
}

export default function YurotsRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-north-america" />;
}
