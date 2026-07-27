import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-72-low-exp-server');
}

export default function Yurots772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-72-low-exp-server" />;
}
