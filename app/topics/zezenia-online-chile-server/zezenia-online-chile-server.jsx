import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-chile-server');
}

export default function ZezeniaOnlineChileServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-chile-server" />;
}
