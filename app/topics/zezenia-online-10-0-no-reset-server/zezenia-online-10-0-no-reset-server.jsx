import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-10-0-no-reset-server');
}

export default function ZezeniaOnline100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-10-0-no-reset-server" />;
}
