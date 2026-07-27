import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-chile');
}

export default function YurotsCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-chile" />;
}
