import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-germany');
}

export default function YurotsNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-germany" />;
}
