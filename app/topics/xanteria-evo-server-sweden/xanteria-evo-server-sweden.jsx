import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-sweden');
}

export default function XanteriaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-sweden" />;
}
