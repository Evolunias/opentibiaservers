import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-no-reset-server');
}

export default function Yurots12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-no-reset-server" />;
}
