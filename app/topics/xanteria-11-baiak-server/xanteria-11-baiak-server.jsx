import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-baiak-server');
}

export default function Xanteria11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-baiak-server" />;
}
