import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-low-exp-server');
}

export default function Yurots71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-low-exp-server" />;
}
