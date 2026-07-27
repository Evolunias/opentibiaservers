import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-sweden');
}

export default function XanteriaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-sweden" />;
}
