import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-canada');
}

export default function XanteriaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-canada" />;
}
