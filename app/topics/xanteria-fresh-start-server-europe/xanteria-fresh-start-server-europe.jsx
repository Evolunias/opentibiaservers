import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-europe');
}

export default function XanteriaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-europe" />;
}
