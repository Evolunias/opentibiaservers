import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-ot-server');
}

export default function ZezeniaOnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-ot-server" />;
}
