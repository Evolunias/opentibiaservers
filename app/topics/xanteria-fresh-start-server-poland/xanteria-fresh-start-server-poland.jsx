import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-poland');
}

export default function XanteriaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-poland" />;
}
