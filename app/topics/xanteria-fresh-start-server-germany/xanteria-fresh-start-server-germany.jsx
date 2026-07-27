import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-germany');
}

export default function XanteriaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-germany" />;
}
