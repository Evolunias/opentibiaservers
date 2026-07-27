import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-germany');
}

export default function YurotsRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-germany" />;
}
