import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-baiak-server');
}

export default function Xanteria71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-baiak-server" />;
}
