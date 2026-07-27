import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-mexico');
}

export default function XanteriaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-mexico" />;
}
