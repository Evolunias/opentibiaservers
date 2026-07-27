import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-baiak-server');
}

export default function Xanteria15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-baiak-server" />;
}
