import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-mexico');
}

export default function XanteriaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-mexico" />;
}
