import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-retro-server');
}

export default function ZezeniaOnline12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-retro-server" />;
}
