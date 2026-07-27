import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-no-reset-server');
}

export default function Yurots15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-no-reset-server" />;
}
