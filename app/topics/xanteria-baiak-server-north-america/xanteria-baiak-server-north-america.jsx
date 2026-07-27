import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-north-america');
}

export default function XanteriaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-north-america" />;
}
