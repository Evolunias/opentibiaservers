import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-pvp-server-sweden');
}

export default function XanteriaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-pvp-server-sweden" />;
}
