import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-baiak-server');
}

export default function Xanteria1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-baiak-server" />;
}
