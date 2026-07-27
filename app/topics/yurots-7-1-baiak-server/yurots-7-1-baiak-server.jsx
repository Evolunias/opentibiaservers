import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-baiak-server');
}

export default function Yurots71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-baiak-server" />;
}
