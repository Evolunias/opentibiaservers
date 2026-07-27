import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-chile');
}

export default function YurotsCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-chile" />;
}
