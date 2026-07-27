import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-poland');
}

export default function XanteriaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-poland" />;
}
