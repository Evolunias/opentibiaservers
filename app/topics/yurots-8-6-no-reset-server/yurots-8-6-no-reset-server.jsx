import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-no-reset-server');
}

export default function Yurots86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-no-reset-server" />;
}
