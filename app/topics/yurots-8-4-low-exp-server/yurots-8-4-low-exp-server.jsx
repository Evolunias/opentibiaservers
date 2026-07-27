import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-low-exp-server');
}

export default function Yurots84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-low-exp-server" />;
}
