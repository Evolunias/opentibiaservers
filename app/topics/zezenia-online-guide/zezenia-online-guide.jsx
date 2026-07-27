import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-guide');
}

export default function ZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-guide" />;
}
