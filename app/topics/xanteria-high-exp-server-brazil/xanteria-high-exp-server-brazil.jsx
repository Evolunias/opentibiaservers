import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-brazil');
}

export default function XanteriaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-brazil" />;
}
