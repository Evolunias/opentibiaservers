import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-baiak-server');
}

export default function Xanteria84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-baiak-server" />;
}
