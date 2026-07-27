import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-chile');
}

export default function YurotsRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-chile" />;
}
