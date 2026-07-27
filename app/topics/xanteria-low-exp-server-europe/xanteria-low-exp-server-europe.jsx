import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-europe');
}

export default function XanteriaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-europe" />;
}
