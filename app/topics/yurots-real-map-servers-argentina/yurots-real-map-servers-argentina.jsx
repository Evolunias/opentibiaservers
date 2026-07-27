import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-argentina');
}

export default function YurotsRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-argentina" />;
}
