import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-no-reset-server');
}

export default function Yurots74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-no-reset-server" />;
}
