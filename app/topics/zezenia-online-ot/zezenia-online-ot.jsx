import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-ot');
}

export default function ZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-ot" />;
}
