import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-no-reset-server');
}

export default function Yurots11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-no-reset-server" />;
}
