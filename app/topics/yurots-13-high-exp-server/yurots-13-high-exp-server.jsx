import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-high-exp-server');
}

export default function Yurots13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-high-exp-server" />;
}
