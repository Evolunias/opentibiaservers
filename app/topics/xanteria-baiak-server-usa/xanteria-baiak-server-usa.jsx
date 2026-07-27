import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-usa');
}

export default function XanteriaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-usa" />;
}
