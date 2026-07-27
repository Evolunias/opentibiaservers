import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-poland');
}

export default function XanteriaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-poland" />;
}
