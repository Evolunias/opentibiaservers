import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-mexico');
}

export default function YurotsLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-mexico" />;
}
