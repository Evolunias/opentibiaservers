import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-france');
}

export default function XanteriaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-france" />;
}
