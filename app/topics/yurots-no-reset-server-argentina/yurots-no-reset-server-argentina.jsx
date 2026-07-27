import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-argentina');
}

export default function YurotsNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-argentina" />;
}
