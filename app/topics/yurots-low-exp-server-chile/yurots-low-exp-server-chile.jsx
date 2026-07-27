import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-chile');
}

export default function YurotsLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-chile" />;
}
