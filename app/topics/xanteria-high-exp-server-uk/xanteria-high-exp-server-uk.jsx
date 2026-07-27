import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-uk');
}

export default function XanteriaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-uk" />;
}
