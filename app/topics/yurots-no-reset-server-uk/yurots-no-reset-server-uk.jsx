import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-uk');
}

export default function YurotsNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-uk" />;
}
