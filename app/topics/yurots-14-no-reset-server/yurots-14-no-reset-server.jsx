import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-no-reset-server');
}

export default function Yurots14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-no-reset-server" />;
}
