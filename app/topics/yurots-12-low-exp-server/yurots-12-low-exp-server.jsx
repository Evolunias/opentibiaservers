import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-low-exp-server');
}

export default function Yurots12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-low-exp-server" />;
}
