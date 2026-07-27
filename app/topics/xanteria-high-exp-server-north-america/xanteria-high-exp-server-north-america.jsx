import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-north-america');
}

export default function XanteriaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-north-america" />;
}
