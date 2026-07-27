import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-no-reset-server');
}

export default function Yurots84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-no-reset-server" />;
}
