import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-chile');
}

export default function YurotsBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-chile" />;
}
