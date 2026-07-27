import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-no-reset-server');
}

export default function ZezeniaOnline15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-no-reset-server" />;
}
