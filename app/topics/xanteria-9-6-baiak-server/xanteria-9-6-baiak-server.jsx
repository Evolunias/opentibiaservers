import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-baiak-server');
}

export default function Xanteria96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-baiak-server" />;
}
