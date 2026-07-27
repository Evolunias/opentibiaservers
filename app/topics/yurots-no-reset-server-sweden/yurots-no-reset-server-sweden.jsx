import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-no-reset-server-sweden');
}

export default function YurotsNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-no-reset-server-sweden" />;
}
