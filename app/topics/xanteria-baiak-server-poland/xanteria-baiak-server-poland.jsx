import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-poland');
}

export default function XanteriaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-poland" />;
}
