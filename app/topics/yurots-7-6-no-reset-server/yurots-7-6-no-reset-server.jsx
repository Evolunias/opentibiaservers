import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-6-no-reset-server');
}

export default function Yurots76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-6-no-reset-server" />;
}
