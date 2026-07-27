import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-chile');
}

export default function YurotsPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-chile" />;
}
