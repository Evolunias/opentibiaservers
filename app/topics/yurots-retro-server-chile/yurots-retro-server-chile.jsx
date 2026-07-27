import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-chile');
}

export default function YurotsRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-chile" />;
}
