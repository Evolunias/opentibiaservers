import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-no-reset-server');
}

export default function Yurots71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-no-reset-server" />;
}
