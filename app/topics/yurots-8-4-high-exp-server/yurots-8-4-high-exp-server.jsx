import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-high-exp-server');
}

export default function Yurots84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-high-exp-server" />;
}
