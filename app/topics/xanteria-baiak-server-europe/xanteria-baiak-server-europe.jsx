import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-europe');
}

export default function XanteriaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-europe" />;
}
