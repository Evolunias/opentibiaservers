import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-sweden');
}

export default function YurotsBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-sweden" />;
}
