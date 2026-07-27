import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-baiak-server');
}

export default function Yurots15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-baiak-server" />;
}
