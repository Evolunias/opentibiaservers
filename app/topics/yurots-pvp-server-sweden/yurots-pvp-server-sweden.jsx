import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-sweden');
}

export default function YurotsPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-sweden" />;
}
