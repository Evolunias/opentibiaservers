import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-latin-america-servers');
}

export default function ZezeniaOnlineLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-latin-america-servers" />;
}
