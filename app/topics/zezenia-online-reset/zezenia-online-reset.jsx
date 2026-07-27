import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-reset');
}

export default function ZezeniaOnlineResetKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-reset" />;
}
