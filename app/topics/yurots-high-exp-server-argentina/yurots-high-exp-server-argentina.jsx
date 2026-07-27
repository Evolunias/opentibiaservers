import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-argentina');
}

export default function YurotsHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-argentina" />;
}
