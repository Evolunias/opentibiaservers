import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-baiak-server-south-america');
}

export default function XanteriaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-baiak-server-south-america" />;
}
