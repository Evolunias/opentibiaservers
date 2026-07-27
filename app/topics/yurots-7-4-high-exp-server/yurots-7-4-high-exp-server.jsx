import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-high-exp-server');
}

export default function Yurots74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-high-exp-server" />;
}
