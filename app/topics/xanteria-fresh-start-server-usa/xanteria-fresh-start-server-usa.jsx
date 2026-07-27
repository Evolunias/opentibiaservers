import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-usa');
}

export default function XanteriaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-usa" />;
}
