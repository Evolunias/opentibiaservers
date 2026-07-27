import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-germany');
}

export default function YurotsHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-germany" />;
}
