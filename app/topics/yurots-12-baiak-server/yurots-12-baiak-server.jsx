import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-baiak-server');
}

export default function Yurots12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-baiak-server" />;
}
