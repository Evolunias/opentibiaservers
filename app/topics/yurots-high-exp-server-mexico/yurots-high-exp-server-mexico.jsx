import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-mexico');
}

export default function YurotsHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-mexico" />;
}
