import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-canada');
}

export default function YurotsNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-canada" />;
}
