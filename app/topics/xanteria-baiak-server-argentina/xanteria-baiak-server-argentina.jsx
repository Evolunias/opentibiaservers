import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-argentina');
}

export default function XanteriaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-argentina" />;
}
