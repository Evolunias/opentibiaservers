import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-register');
}

export default function ZezeniaOnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-register" />;
}
