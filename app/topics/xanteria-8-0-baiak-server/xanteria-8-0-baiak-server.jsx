import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-baiak-server');
}

export default function Xanteria80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-baiak-server" />;
}
