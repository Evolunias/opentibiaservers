import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-france');
}

export default function XanteriaLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-france" />;
}
