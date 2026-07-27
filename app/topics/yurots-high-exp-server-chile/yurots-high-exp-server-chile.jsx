import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-chile');
}

export default function YurotsHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-chile" />;
}
