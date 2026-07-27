import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-usa');
}

export default function XanteriaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-usa" />;
}
