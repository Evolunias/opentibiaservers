import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-login');
}

export default function ZezeniaOnlineLoginKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-login" />;
}
