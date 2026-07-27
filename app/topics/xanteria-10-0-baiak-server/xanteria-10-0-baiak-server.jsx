import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-baiak-server');
}

export default function Xanteria100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-baiak-server" />;
}
