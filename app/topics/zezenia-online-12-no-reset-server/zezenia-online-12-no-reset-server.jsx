import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-no-reset-server');
}

export default function ZezeniaOnline12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-no-reset-server" />;
}
