import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-europe');
}

export default function YurotsNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-europe" />;
}
