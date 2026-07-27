import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-baiak-server');
}

export default function Xanteria74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-baiak-server" />;
}
