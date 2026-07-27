import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-low-exp-server');
}

export default function Yurots74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-low-exp-server" />;
}
