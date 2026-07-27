import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-brazil');
}

export default function YurotsHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-brazil" />;
}
