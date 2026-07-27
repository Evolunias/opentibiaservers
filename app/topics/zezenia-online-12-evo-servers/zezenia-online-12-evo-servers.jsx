import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-evo-servers');
}

export default function ZezeniaOnline12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-evo-servers" />;
}
