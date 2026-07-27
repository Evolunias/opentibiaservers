import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-argentina');
}

export default function XanteriaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-argentina" />;
}
