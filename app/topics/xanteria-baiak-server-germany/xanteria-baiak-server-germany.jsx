import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-germany');
}

export default function XanteriaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-germany" />;
}
