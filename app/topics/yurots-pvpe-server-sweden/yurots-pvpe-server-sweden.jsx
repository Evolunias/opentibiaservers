import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-sweden');
}

export default function YurotsPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-sweden" />;
}
