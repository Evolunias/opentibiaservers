import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-no-reset-server');
}

export default function Yurots96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-no-reset-server" />;
}
