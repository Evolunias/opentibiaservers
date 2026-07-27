import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-evo-server');
}

export default function ZezeniaOnline12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-evo-server" />;
}
