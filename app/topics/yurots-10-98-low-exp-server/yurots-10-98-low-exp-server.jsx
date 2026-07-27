import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-low-exp-server');
}

export default function Yurots1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-low-exp-server" />;
}
