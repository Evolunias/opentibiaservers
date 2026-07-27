import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-status');
}

export default function ZezeniaOnlineStatusKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-status" />;
}
