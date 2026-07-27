import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-germany-server');
}

export default function ZezeniaOnlineGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-germany-server" />;
}
