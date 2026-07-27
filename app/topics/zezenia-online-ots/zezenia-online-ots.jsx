import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-ots');
}

export default function ZezeniaOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-ots" />;
}
