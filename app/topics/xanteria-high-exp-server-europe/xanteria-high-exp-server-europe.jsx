import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-europe');
}

export default function XanteriaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-europe" />;
}
