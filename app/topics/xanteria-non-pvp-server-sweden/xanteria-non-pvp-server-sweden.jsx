import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-non-pvp-server-sweden');
}

export default function XanteriaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-non-pvp-server-sweden" />;
}
