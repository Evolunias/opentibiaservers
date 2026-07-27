import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-argentina');
}

export default function XanteriaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-argentina" />;
}
