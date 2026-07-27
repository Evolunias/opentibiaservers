import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-usa');
}

export default function YurotsNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-usa" />;
}
