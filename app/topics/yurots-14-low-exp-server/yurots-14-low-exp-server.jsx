import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-low-exp-server');
}

export default function Yurots14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-low-exp-server" />;
}
