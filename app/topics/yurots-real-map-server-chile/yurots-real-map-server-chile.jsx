import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-chile');
}

export default function YurotsRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-chile" />;
}
