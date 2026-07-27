import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-uk');
}

export default function XanteriaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-uk" />;
}
