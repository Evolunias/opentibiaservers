import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-server');
}

export default function ZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-server" />;
}
