import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-mexico');
}

export default function YurotsNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-mexico" />;
}
