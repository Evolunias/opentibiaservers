import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-low-exp-server');
}

export default function Yurots13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-low-exp-server" />;
}
