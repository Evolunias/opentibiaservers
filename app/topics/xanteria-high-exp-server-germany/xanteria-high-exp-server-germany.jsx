import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-germany');
}

export default function XanteriaHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-germany" />;
}
