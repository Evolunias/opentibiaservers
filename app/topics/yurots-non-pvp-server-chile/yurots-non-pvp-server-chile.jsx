import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-chile');
}

export default function YurotsNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-chile" />;
}
