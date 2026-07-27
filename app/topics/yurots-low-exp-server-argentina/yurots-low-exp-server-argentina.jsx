import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-argentina');
}

export default function YurotsLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-argentina" />;
}
