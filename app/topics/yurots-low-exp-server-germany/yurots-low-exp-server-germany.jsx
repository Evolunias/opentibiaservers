import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-germany');
}

export default function YurotsLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-germany" />;
}
