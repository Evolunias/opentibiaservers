import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-brazil');
}

export default function YurotsNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-brazil" />;
}
