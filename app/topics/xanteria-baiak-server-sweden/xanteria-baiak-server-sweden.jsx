import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-sweden');
}

export default function XanteriaBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-sweden" />;
}
