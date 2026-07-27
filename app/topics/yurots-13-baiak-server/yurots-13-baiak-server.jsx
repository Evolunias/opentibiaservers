import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-baiak-server');
}

export default function Yurots13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-baiak-server" />;
}
