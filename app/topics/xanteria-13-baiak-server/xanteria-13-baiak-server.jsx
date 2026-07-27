import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-baiak-server');
}

export default function Xanteria13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-baiak-server" />;
}
