import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-chile');
}

export default function YurotsNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-chile" />;
}
