import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-high-exp');
}

export default function ZezeniaOnlineHighExpKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-high-exp" />;
}
