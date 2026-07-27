import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-mexico');
}

export default function XanteriaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-mexico" />;
}
