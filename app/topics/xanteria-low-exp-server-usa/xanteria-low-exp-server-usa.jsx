import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-usa');
}

export default function XanteriaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-usa" />;
}
