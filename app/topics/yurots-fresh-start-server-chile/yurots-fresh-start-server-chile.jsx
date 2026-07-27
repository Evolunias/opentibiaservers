import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-chile');
}

export default function YurotsFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-chile" />;
}
