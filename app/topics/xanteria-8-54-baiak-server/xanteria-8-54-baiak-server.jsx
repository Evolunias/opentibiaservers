import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-baiak-server');
}

export default function Xanteria854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-baiak-server" />;
}
