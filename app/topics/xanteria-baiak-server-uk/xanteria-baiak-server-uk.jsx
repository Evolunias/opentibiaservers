import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-uk');
}

export default function XanteriaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-uk" />;
}
