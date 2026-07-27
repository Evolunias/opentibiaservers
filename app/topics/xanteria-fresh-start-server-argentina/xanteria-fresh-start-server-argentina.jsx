import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-argentina');
}

export default function XanteriaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-argentina" />;
}
